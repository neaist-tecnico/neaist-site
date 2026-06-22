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
