<?php
declare(strict_types=1);

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/auth.php';

require_admin();
ensure_tournament_extensions();

$action = $_GET['action'] ?? 'list';

try {
    if ($action === 'list') {
        json_response(['ok' => true, 'data' => admin_data()]);
    }

    if ($action === 'save-settings') {
        require_post();
        save_settings(read_json_body());
        json_response(['ok' => true, 'data' => admin_data()]);
    }

    if ($action === 'save-team') {
        require_post();
        save_team(read_json_body());
        json_response(['ok' => true, 'data' => admin_data()]);
    }

    if ($action === 'delete-team') {
        require_post();
        delete_row('torneio_teams', clean_string(read_json_body()['id'] ?? ''));
        json_response(['ok' => true, 'data' => admin_data()]);
    }

    if ($action === 'save-player') {
        require_post();
        save_player(read_json_body());
        json_response(['ok' => true, 'data' => admin_data()]);
    }

    if ($action === 'delete-player') {
        require_post();
        delete_row('torneio_players', clean_string(read_json_body()['id'] ?? ''));
        json_response(['ok' => true, 'data' => admin_data()]);
    }

    if ($action === 'save-groups') {
        require_post();
        save_groups(read_json_body());
        json_response(['ok' => true, 'data' => admin_data()]);
    }

    if ($action === 'save-match') {
        require_post();
        save_match(read_json_body());
        json_response(['ok' => true, 'data' => admin_data()]);
    }

    if ($action === 'delete-match') {
        require_post();
        delete_row('torneio_matches', clean_string(read_json_body()['id'] ?? ''));
        json_response(['ok' => true, 'data' => admin_data()]);
    }

    if ($action === 'save-goal') {
        require_post();
        save_goal(read_json_body());
        json_response(['ok' => true, 'data' => admin_data()]);
    }

    if ($action === 'delete-goal') {
        require_post();
        delete_row('torneio_goals', clean_string(read_json_body()['id'] ?? ''));
        json_response(['ok' => true, 'data' => admin_data()]);
    }

    if ($action === 'save-announcement') {
        require_post();
        save_announcement(read_json_body());
        json_response(['ok' => true, 'data' => admin_data()]);
    }

    if ($action === 'delete-announcement') {
        require_post();
        delete_row('torneio_announcements', clean_string(read_json_body()['id'] ?? ''));
        json_response(['ok' => true, 'data' => admin_data()]);
    }

    if ($action === 'save-rule') {
        require_post();
        save_rule(read_json_body());
        json_response(['ok' => true, 'data' => admin_data()]);
    }

    if ($action === 'delete-rule') {
        require_post();
        delete_row('torneio_rules', clean_string(read_json_body()['id'] ?? ''));
        json_response(['ok' => true, 'data' => admin_data()]);
    }

    json_response(['ok' => false, 'error' => 'Unknown admin action'], 404);
} catch (Throwable $error) {
    json_response(['ok' => false, 'error' => 'Admin action failed'], 500);
}

function admin_data(): array
{
    $settingsRows = fetch_all('SELECT setting_key, setting_value FROM torneio_settings ORDER BY setting_key');
    $settings = [];
    foreach ($settingsRows as $row) {
        $settings[$row['setting_key']] = $row['setting_value'];
    }

    return [
        'settings' => $settings,
        'teams' => fetch_all('SELECT id, group_name AS `group`, name, short_name AS shortName, logo_url AS logoUrl, captain, active, sort_order AS sortOrder FROM torneio_teams ORDER BY group_name, sort_order, name'),
        'players' => fetch_all('SELECT id, team_id AS teamId, name, shirt_number AS shirtNumber, position, active, sort_order AS sortOrder FROM torneio_players ORDER BY team_id, sort_order, shirt_number, name'),
        'matches' => fetch_all('SELECT id, group_name AS `group`, round_label AS round, DATE_FORMAT(match_date, "%Y-%m-%d") AS date, TIME_FORMAT(match_time, "%H:%i") AS time, venue, home_team_id AS homeTeamId, away_team_id AS awayTeamId, home_score AS homeScore, away_score AS awayScore, status, notes, player_of_match_player_id AS playerOfMatchPlayerId, player_of_match_name AS playerOfMatchName, sort_order AS sortOrder FROM torneio_matches ORDER BY match_date IS NULL, match_date, match_time, sort_order, id'),
        'goals' => fetch_all('SELECT id, match_id AS matchId, team_id AS teamId, player_id AS playerId, player_name AS playerName, minute, own_goal AS ownGoal, penalty FROM torneio_goals ORDER BY match_id, minute IS NULL, minute, id'),
        'announcements' => fetch_all('SELECT id, title, body, DATE_FORMAT(published_at, "%Y-%m-%d") AS date, pinned, active FROM torneio_announcements ORDER BY pinned DESC, published_at DESC, id DESC'),
        'rules' => fetch_all('SELECT id, title, body, sort_order AS sortOrder, active FROM torneio_rules ORDER BY sort_order, title')
    ];
}

function save_settings(array $body): void
{
    $allowed = ['tournamentName', 'subtitle', 'description', 'venue', 'startDate', 'endDate', 'contactEmail', 'lastUpdated'];

    foreach ($allowed as $key) {
        $value = clean_string($body[$key] ?? '');
        execute_sql(
            'INSERT INTO torneio_settings (setting_key, setting_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)',
            [$key, $value]
        );
    }
}

function save_team(array $body): void
{
    $id = optional_id($body, 'torneio_teams', 'team');
    execute_sql(
        'INSERT INTO torneio_teams (id, group_name, name, short_name, logo_url, captain, active, sort_order)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE group_name = VALUES(group_name), name = VALUES(name), short_name = VALUES(short_name), logo_url = VALUES(logo_url), captain = VALUES(captain), active = VALUES(active), sort_order = VALUES(sort_order)',
        [
            $id,
            clean_string($body['group'] ?? 'Geral') ?: 'Geral',
            clean_string($body['name'] ?? ''),
            clean_string($body['shortName'] ?? ''),
            nullable_string($body['logoUrl'] ?? null),
            nullable_string($body['captain'] ?? null),
            bool_int($body['active'] ?? true),
            nullable_int($body['sortOrder'] ?? 0) ?? 0
        ]
    );
}

function save_player(array $body): void
{
    $id = optional_id($body, 'torneio_players', 'player');
    execute_sql(
        'INSERT INTO torneio_players (id, team_id, name, shirt_number, position, active, sort_order)
         VALUES (?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE team_id = VALUES(team_id), name = VALUES(name), shirt_number = VALUES(shirt_number), position = VALUES(position), active = VALUES(active), sort_order = VALUES(sort_order)',
        [
            $id,
            clean_string($body['teamId'] ?? ''),
            clean_string($body['name'] ?? ''),
            nullable_int($body['shirtNumber'] ?? null),
            nullable_string($body['position'] ?? null),
            bool_int($body['active'] ?? true),
            nullable_int($body['sortOrder'] ?? 0) ?? 0
        ]
    );
}

function save_groups(array $body): void
{
    $assignments = $body['assignments'] ?? [];

    if (!is_array($assignments)) {
        json_response(['ok' => false, 'error' => 'Invalid group assignments'], 422);
    }

    foreach ($assignments as $assignment) {
        $teamId = clean_string($assignment['teamId'] ?? '');
        $group = clean_string($assignment['group'] ?? '');

        if ($teamId === '' || $group === '') {
            continue;
        }

        execute_sql('UPDATE torneio_teams SET group_name = ? WHERE id = ?', [$group, $teamId]);
    }
}

function save_match(array $body): void
{
    $id = optional_id($body, 'torneio_matches', 'match');
    execute_sql(
        'INSERT INTO torneio_matches (id, group_name, round_label, match_date, match_time, venue, home_team_id, away_team_id, home_score, away_score, status, notes, player_of_match_player_id, player_of_match_name, sort_order)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE group_name = VALUES(group_name), round_label = VALUES(round_label), match_date = VALUES(match_date), match_time = VALUES(match_time), venue = VALUES(venue), home_team_id = VALUES(home_team_id), away_team_id = VALUES(away_team_id), home_score = VALUES(home_score), away_score = VALUES(away_score), status = VALUES(status), notes = VALUES(notes), player_of_match_player_id = VALUES(player_of_match_player_id), player_of_match_name = VALUES(player_of_match_name), sort_order = VALUES(sort_order)',
        [
            $id,
            clean_string($body['group'] ?? 'Geral') ?: 'Geral',
            nullable_string($body['round'] ?? null),
            nullable_string($body['date'] ?? null),
            nullable_string($body['time'] ?? null),
            nullable_string($body['venue'] ?? null),
            clean_string($body['homeTeamId'] ?? ''),
            clean_string($body['awayTeamId'] ?? ''),
            nullable_int($body['homeScore'] ?? null),
            nullable_int($body['awayScore'] ?? null),
            clean_string($body['status'] ?? 'scheduled') ?: 'scheduled',
            nullable_string($body['notes'] ?? null),
            nullable_string($body['playerOfMatchPlayerId'] ?? null),
            nullable_string($body['playerOfMatchName'] ?? null),
            nullable_int($body['sortOrder'] ?? 0) ?? 0
        ]
    );
}

function save_goal(array $body): void
{
    $id = optional_id($body, 'torneio_goals', 'goal');
    execute_sql(
        'INSERT INTO torneio_goals (id, match_id, team_id, player_id, player_name, minute, own_goal, penalty)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE match_id = VALUES(match_id), team_id = VALUES(team_id), player_id = VALUES(player_id), player_name = VALUES(player_name), minute = VALUES(minute), own_goal = VALUES(own_goal), penalty = VALUES(penalty)',
        [
            $id,
            clean_string($body['matchId'] ?? ''),
            clean_string($body['teamId'] ?? ''),
            nullable_string($body['playerId'] ?? null),
            nullable_string($body['playerName'] ?? null),
            nullable_int($body['minute'] ?? null),
            bool_int($body['ownGoal'] ?? false),
            bool_int($body['penalty'] ?? false)
        ]
    );
}

function save_announcement(array $body): void
{
    $id = require_id($body);
    execute_sql(
        'INSERT INTO torneio_announcements (id, title, body, published_at, pinned, active)
         VALUES (?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE title = VALUES(title), body = VALUES(body), published_at = VALUES(published_at), pinned = VALUES(pinned), active = VALUES(active)',
        [
            $id,
            clean_string($body['title'] ?? ''),
            clean_string($body['body'] ?? ''),
            nullable_string($body['date'] ?? null),
            bool_int($body['pinned'] ?? false),
            bool_int($body['active'] ?? true)
        ]
    );
}

function save_rule(array $body): void
{
    $id = require_id($body);
    execute_sql(
        'INSERT INTO torneio_rules (id, title, body, sort_order, active)
         VALUES (?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE title = VALUES(title), body = VALUES(body), sort_order = VALUES(sort_order), active = VALUES(active)',
        [
            $id,
            clean_string($body['title'] ?? ''),
            clean_string($body['body'] ?? ''),
            nullable_int($body['sortOrder'] ?? 0) ?? 0,
            bool_int($body['active'] ?? true)
        ]
    );
}

function delete_row(string $table, string $id): void
{
    if ($id === '') {
        json_response(['ok' => false, 'error' => 'Missing id'], 422);
    }

    execute_sql("DELETE FROM {$table} WHERE id = ?", [$id]);
}

function require_id(array $body): string
{
    $id = clean_string($body['id'] ?? '');
    if ($id === '') {
        json_response(['ok' => false, 'error' => 'Missing id'], 422);
    }
    return $id;
}

function optional_id(array $body, string $table, string $prefix): string
{
    $id = clean_string($body['id'] ?? '');

    if ($id !== '') {
        return $id;
    }

    return next_id($table, $prefix);
}

function next_id(string $table, string $prefix): string
{
    $rows = fetch_all("SELECT id FROM {$table} WHERE id LIKE ? ORDER BY id", [$prefix . '\_%']);
    $max = 0;

    foreach ($rows as $row) {
        if (preg_match('/^' . preg_quote($prefix, '/') . '_(\d+)$/', $row['id'], $matches)) {
            $max = max($max, (int)$matches[1]);
        }
    }

    return sprintf('%s_%03d', $prefix, $max + 1);
}
