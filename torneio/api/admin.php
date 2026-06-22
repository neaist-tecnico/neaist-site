<?php
declare(strict_types=1);

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/auth.php';

require_admin();

$action = $_GET['action'] ?? 'list';

try {
    if ($action === 'list') {
        require_post();
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
        'matches' => fetch_all('SELECT id, group_name AS `group`, round_label AS round, DATE_FORMAT(match_date, "%Y-%m-%d") AS date, TIME_FORMAT(match_time, "%H:%i") AS time, venue, home_team_id AS homeTeamId, away_team_id AS awayTeamId, home_score AS homeScore, away_score AS awayScore, status, notes, sort_order AS sortOrder FROM torneio_matches ORDER BY match_date IS NULL, match_date, match_time, sort_order, id'),
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
    $id = require_id($body);
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

function save_match(array $body): void
{
    $id = require_id($body);
    execute_sql(
        'INSERT INTO torneio_matches (id, group_name, round_label, match_date, match_time, venue, home_team_id, away_team_id, home_score, away_score, status, notes, sort_order)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE group_name = VALUES(group_name), round_label = VALUES(round_label), match_date = VALUES(match_date), match_time = VALUES(match_time), venue = VALUES(venue), home_team_id = VALUES(home_team_id), away_team_id = VALUES(away_team_id), home_score = VALUES(home_score), away_score = VALUES(away_score), status = VALUES(status), notes = VALUES(notes), sort_order = VALUES(sort_order)',
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
            nullable_int($body['sortOrder'] ?? 0) ?? 0
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
