<?php
declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';

function db(): PDO
{
    static $pdo = null;

    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $host = defined('TOURNAMENT_DB_HOST') ? TOURNAMENT_DB_HOST : env_value('TOURNAMENT_DB_HOST', 'localhost');
    $name = defined('TOURNAMENT_DB_NAME') ? TOURNAMENT_DB_NAME : env_value('TOURNAMENT_DB_NAME', 'g03349_neaist');
    $user = defined('TOURNAMENT_DB_USER') ? TOURNAMENT_DB_USER : env_value('TOURNAMENT_DB_USER', 'g03349_neaist');
    $pass = defined('TOURNAMENT_DB_PASS') ? TOURNAMENT_DB_PASS : env_value('TOURNAMENT_DB_PASS', '');
    $charset = 'utf8mb4';

    if ($pass === '' || $pass === 'put_database_password_here') {
        json_response([
            'ok' => false,
            'error' => 'Database password is not configured on the server. Restore torneio/api/config.local.php or set torneio/.env with the real DB password.'
        ], 500);
    }

    $dsn = "mysql:host={$host};dbname={$name};charset={$charset}";

    try {
        $pdo = new PDO($dsn, $user, $pass, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ]);
    } catch (PDOException $error) {
        error_log(sprintf(
            'NEAIST tournament DB connection failed: %s | host=%s db=%s user=%s local_config=%s env_pass_present=%s',
            $error->getMessage(),
            $host,
            $name,
            $user,
            TOURNAMENT_LOCAL_CONFIG_LOADED ? 'yes' : 'no',
            env_value('TOURNAMENT_DB_PASS', '') !== '' ? 'yes' : 'no'
        ));

        json_response([
            'ok' => false,
            'error' => 'Database connection failed. Check tournament DB configuration.'
        ], 500);
    }

    return $pdo;
}

function fetch_all(string $sql, array $params = []): array
{
    $statement = db()->prepare($sql);
    $statement->execute($params);
    return $statement->fetchAll();
}

function execute_sql(string $sql, array $params = []): void
{
    $statement = db()->prepare($sql);
    $statement->execute($params);
}

function ensure_tournament_extensions(): void
{
    static $done = false;

    if ($done) {
        return;
    }

    execute_sql(
        'CREATE TABLE IF NOT EXISTS torneio_players (
            id VARCHAR(64) PRIMARY KEY,
            team_id VARCHAR(64) NOT NULL,
            name VARCHAR(160) NOT NULL,
            shirt_number INT NULL,
            position VARCHAR(80) NULL,
            active TINYINT(1) NOT NULL DEFAULT 1,
            sort_order INT NOT NULL DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            INDEX idx_torneio_players_team (team_id),
            CONSTRAINT fk_torneio_players_team FOREIGN KEY (team_id) REFERENCES torneio_teams(id) ON UPDATE CASCADE ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci'
    );

    execute_sql(
        'CREATE TABLE IF NOT EXISTS torneio_goals (
            id VARCHAR(64) PRIMARY KEY,
            match_id VARCHAR(64) NOT NULL,
            team_id VARCHAR(64) NOT NULL,
            player_id VARCHAR(64) NULL,
            player_name VARCHAR(160) NULL,
            minute INT NULL,
            own_goal TINYINT(1) NOT NULL DEFAULT 0,
            penalty TINYINT(1) NOT NULL DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            INDEX idx_torneio_goals_match (match_id),
            INDEX idx_torneio_goals_player (player_id),
            CONSTRAINT fk_torneio_goals_match FOREIGN KEY (match_id) REFERENCES torneio_matches(id) ON UPDATE CASCADE ON DELETE CASCADE,
            CONSTRAINT fk_torneio_goals_team FOREIGN KEY (team_id) REFERENCES torneio_teams(id) ON UPDATE CASCADE,
            CONSTRAINT fk_torneio_goals_player FOREIGN KEY (player_id) REFERENCES torneio_players(id) ON UPDATE CASCADE ON DELETE SET NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci'
    );

    ensure_column('torneio_matches', 'player_of_match_player_id', 'VARCHAR(64) NULL');
    ensure_column('torneio_matches', 'player_of_match_name', 'VARCHAR(160) NULL');

    $done = true;
}

function ensure_column(string $table, string $column, string $definition): void
{
    $exists = fetch_all(
        'SELECT COUNT(*) AS count_value
         FROM INFORMATION_SCHEMA.COLUMNS
         WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?',
        [$table, $column]
    );

    if ((int)($exists[0]['count_value'] ?? 0) > 0) {
        return;
    }

    execute_sql("ALTER TABLE {$table} ADD COLUMN {$column} {$definition}");
}
