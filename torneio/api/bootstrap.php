<?php
declare(strict_types=1);

session_name('neaist_tournament_admin');
session_set_cookie_params([
    'httponly' => true,
    'samesite' => 'Lax',
    'secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
    'path' => '/torneio/'
]);
session_start();

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

const TOURNAMENT_ADMIN_USER = 'neaist';
const TOURNAMENT_ADMIN_PASS = 'neaist_19';

function load_env_file(string $path): void
{
    if (!is_file($path) || !is_readable($path)) {
        return;
    }

    foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        $line = trim($line);

        if ($line === '' || substr($line, 0, 1) === '#' || strpos($line, '=') === false) {
            continue;
        }

        [$key, $value] = array_map('trim', explode('=', $line, 2));
        $value = trim($value, "\"'");

        if (getenv($key) === false) {
            putenv($key . '=' . $value);
            $_ENV[$key] = $value;
        }
    }
}

load_env_file(dirname(__DIR__, 2) . '/.env');

$localConfig = __DIR__ . '/config.local.php';
if (is_file($localConfig)) {
    require $localConfig;
}

function env_value(string $key, string $default = ''): string
{
    $value = getenv($key);
    return $value === false ? $default : $value;
}

function json_response(array $payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function read_json_body(): array
{
    $raw = file_get_contents('php://input') ?: '';
    if ($raw === '') {
        return [];
    }

    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

function request_method(): string
{
    return strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');
}

function require_post(): void
{
    if (request_method() !== 'POST') {
        json_response(['ok' => false, 'error' => 'Method not allowed'], 405);
    }
}

function clean_string($value): string
{
    return trim((string)($value ?? ''));
}

function nullable_string($value): ?string
{
    $clean = clean_string($value);
    return $clean === '' ? null : $clean;
}

function nullable_int($value): ?int
{
    if ($value === null || $value === '') {
        return null;
    }

    return is_numeric($value) ? (int)$value : null;
}

function bool_int($value): int
{
    if (is_bool($value)) {
        return $value ? 1 : 0;
    }

    return in_array(strtolower((string)$value), ['1', 'true', 'sim', 'yes', 'on'], true) ? 1 : 0;
}
