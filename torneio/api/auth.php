<?php
declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';

function admin_user(): string
{
    return defined('TOURNAMENT_ADMIN_USERNAME')
        ? TOURNAMENT_ADMIN_USERNAME
        : env_value('TOURNAMENT_ADMIN_USERNAME', TOURNAMENT_ADMIN_USER);
}

function admin_pass(): string
{
    return defined('TOURNAMENT_ADMIN_PASSWORD')
        ? TOURNAMENT_ADMIN_PASSWORD
        : env_value('TOURNAMENT_ADMIN_PASSWORD', TOURNAMENT_ADMIN_PASS);
}

function is_admin_logged_in(): bool
{
    return !empty($_SESSION['tournament_admin_logged_in']);
}

function csrf_token(): string
{
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }

    return $_SESSION['csrf_token'];
}

function require_admin(): void
{
    if (!is_admin_logged_in()) {
        json_response(['ok' => false, 'error' => 'Authentication required'], 401);
    }

    $token = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
    if (request_method() === 'POST' && !hash_equals(csrf_token(), $token)) {
        json_response(['ok' => false, 'error' => 'Invalid session token'], 403);
    }
}

if (basename($_SERVER['SCRIPT_NAME'] ?? '') === 'auth.php') {
    $action = $_GET['action'] ?? 'status';

    if ($action === 'status') {
        json_response([
            'ok' => true,
            'authenticated' => is_admin_logged_in(),
            'csrfToken' => is_admin_logged_in() ? csrf_token() : null
        ]);
    }

    if ($action === 'login') {
        require_post();
        $body = read_json_body();
        $username = clean_string($body['username'] ?? '');
        $password = clean_string($body['password'] ?? '');

        if (hash_equals(admin_user(), $username) && hash_equals(admin_pass(), $password)) {
            session_regenerate_id(true);
            $_SESSION['tournament_admin_logged_in'] = true;
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
            json_response([
                'ok' => true,
                'authenticated' => true,
                'csrfToken' => $_SESSION['csrf_token']
            ]);
        }

        json_response(['ok' => false, 'error' => 'Utilizador ou password inválidos'], 401);
    }

    if ($action === 'logout') {
        require_post();
        $_SESSION = [];
        session_destroy();
        json_response(['ok' => true]);
    }

    json_response(['ok' => false, 'error' => 'Unknown auth action'], 404);
}
