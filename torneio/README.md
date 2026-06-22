# NEAIST Tournament

Static tournament mini-app built with HTML, CSS, JavaScript, PHP and MySQL.

## Database setup

1. Import `schema.sql` into the MySQL database `g03349_neaist`.
2. Copy `.env.example` to `.env` on the server.
3. Fill `TOURNAMENT_DB_PASS` with the database password.
4. Open `admin.html` and log in with:

```text
Username: neaist
Password: neaist_19
```

The public pages read from `api/data.php`. The admin page writes through `api/admin.php`.

## Tables

- `torneio_settings`
- `torneio_teams`
- `torneio_matches`
- `torneio_announcements`
- `torneio_rules`

## Status values

- `scheduled`
- `live`
- `finished`
- `postponed`

Only `finished` matches with both scores filled count for standings.
