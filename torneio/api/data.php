<?php
declare(strict_types=1);

require_once __DIR__ . '/db.php';

try {
    $settingsRows = fetch_all('SELECT setting_key, setting_value FROM torneio_settings ORDER BY setting_key');
    $settings = [];
    foreach ($settingsRows as $row) {
        $settings[$row['setting_key']] = $row['setting_value'];
    }

    $teams = fetch_all('SELECT id, group_name AS `group`, name, short_name AS shortName, logo_url AS logoUrl, captain, active FROM torneio_teams WHERE active = 1 ORDER BY group_name, sort_order, name');
    $matches = fetch_all('SELECT id, group_name AS `group`, round_label AS round, DATE_FORMAT(match_date, "%Y-%m-%d") AS date, TIME_FORMAT(match_time, "%H:%i") AS time, venue, home_team_id AS homeTeamId, away_team_id AS awayTeamId, home_score AS homeScore, away_score AS awayScore, status, notes FROM torneio_matches ORDER BY match_date IS NULL, match_date, match_time, sort_order, id');
    $announcements = fetch_all('SELECT id, title, body, DATE_FORMAT(published_at, "%Y-%m-%d") AS date, pinned, active FROM torneio_announcements WHERE active = 1 ORDER BY pinned DESC, published_at DESC, id DESC');
    $rules = fetch_all('SELECT id, title, body, sort_order AS sortOrder, active FROM torneio_rules WHERE active = 1 ORDER BY sort_order, title');

    json_response([
        'ok' => true,
        'settings' => $settings,
        'teams' => normalize_booleans($teams, ['active']),
        'matches' => normalize_scores($matches),
        'announcements' => normalize_booleans($announcements, ['pinned', 'active']),
        'rules' => normalize_booleans($rules, ['active'])
    ]);
} catch (Throwable $error) {
    json_response(['ok' => false, 'error' => 'Could not load tournament data'], 500);
}

function normalize_booleans(array $rows, array $keys): array
{
    return array_map(function (array $row) use ($keys): array {
        foreach ($keys as $key) {
            if (array_key_exists($key, $row)) {
                $row[$key] = (bool)$row[$key];
            }
        }
        return $row;
    }, $rows);
}

function normalize_scores(array $rows): array
{
    return array_map(function (array $row): array {
        foreach (['homeScore', 'awayScore'] as $key) {
            $row[$key] = $row[$key] === null ? null : (int)$row[$key];
        }
        return $row;
    }, $rows);
}
