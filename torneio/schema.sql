CREATE TABLE IF NOT EXISTS torneio_settings (
    setting_key VARCHAR(80) PRIMARY KEY,
    setting_value TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS torneio_teams (
    id VARCHAR(64) PRIMARY KEY,
    group_name VARCHAR(80) NOT NULL DEFAULT 'Geral',
    name VARCHAR(160) NOT NULL,
    short_name VARCHAR(40) NOT NULL,
    logo_url VARCHAR(500) NULL,
    captain VARCHAR(160) NULL,
    active TINYINT(1) NOT NULL DEFAULT 1,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS torneio_matches (
    id VARCHAR(64) PRIMARY KEY,
    group_name VARCHAR(80) NOT NULL DEFAULT 'Geral',
    round_label VARCHAR(100) NULL,
    match_date DATE NULL,
    match_time TIME NULL,
    venue VARCHAR(160) NULL,
    home_team_id VARCHAR(64) NOT NULL,
    away_team_id VARCHAR(64) NOT NULL,
    home_score INT NULL,
    away_score INT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'scheduled',
    notes TEXT NULL,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_torneio_matches_date (match_date, match_time),
    INDEX idx_torneio_matches_status (status),
    CONSTRAINT fk_torneio_home_team FOREIGN KEY (home_team_id) REFERENCES torneio_teams(id) ON UPDATE CASCADE,
    CONSTRAINT fk_torneio_away_team FOREIGN KEY (away_team_id) REFERENCES torneio_teams(id) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS torneio_announcements (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(180) NOT NULL,
    body TEXT NOT NULL,
    published_at DATE NULL,
    pinned TINYINT(1) NOT NULL DEFAULT 0,
    active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS torneio_rules (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(180) NOT NULL,
    body TEXT NOT NULL,
    sort_order INT NOT NULL DEFAULT 0,
    active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO torneio_settings (setting_key, setting_value) VALUES
('tournamentName', 'NEAIST Championship 2026'),
('subtitle', 'Torneio comunitario organizado pelo NEAIST'),
('description', 'Equipas, calendario, resultados e classificacao atualizados para participantes e espectadores.'),
('venue', 'Instituto Superior Tecnico'),
('startDate', '2026-07-01'),
('endDate', '2026-07-10'),
('contactEmail', 'neaist.sa@aeist.pt'),
('lastUpdated', '2026-06-22')
ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value);

INSERT INTO torneio_teams (id, group_name, name, short_name, captain, active, sort_order) VALUES
('a1', 'Grupo A', 'Ubuntu FC', 'UBU', 'Capitao Ubuntu', 1, 10),
('a2', 'Grupo A', 'Tecnico Stars', 'TST', 'Capitao Stars', 1, 20),
('a3', 'Grupo A', 'Baobab United', 'BAO', 'Capitao Baobab', 1, 30),
('b1', 'Grupo B', 'Lisboa Lions', 'LIO', 'Capitao Lions', 1, 10),
('b2', 'Grupo B', 'Kizomba City', 'KIZ', 'Capitao Kizomba', 1, 20),
('b3', 'Grupo B', 'Maputo XI', 'MAP', 'Capitao Maputo', 1, 30)
ON DUPLICATE KEY UPDATE name = VALUES(name), short_name = VALUES(short_name);

INSERT INTO torneio_matches (id, group_name, round_label, match_date, match_time, venue, home_team_id, away_team_id, home_score, away_score, status, notes, sort_order) VALUES
('m1', 'Grupo A', 'Jornada 1', '2026-07-01', '16:00:00', 'Campo 1', 'a1', 'a2', 2, 1, 'finished', 'Jogo inaugural.', 10),
('m2', 'Grupo A', 'Jornada 1', '2026-07-01', '17:00:00', 'Campo 1', 'a3', 'a1', NULL, NULL, 'scheduled', '', 20),
('m3', 'Grupo A', 'Jornada 2', '2026-07-03', '18:00:00', 'Campo 2', 'a2', 'a3', NULL, NULL, 'scheduled', '', 30),
('m4', 'Grupo B', 'Jornada 1', '2026-07-02', '16:30:00', 'Campo 1', 'b1', 'b2', 0, 0, 'finished', '', 10),
('m5', 'Grupo B', 'Jornada 1', '2026-07-02', '17:30:00', 'Campo 1', 'b3', 'b1', NULL, NULL, 'live', 'Resultado em atualizacao.', 20),
('m6', 'Grupo B', 'Jornada 2', '2026-07-04', '18:30:00', 'Campo 2', 'b2', 'b3', NULL, NULL, 'postponed', 'Nova data a confirmar.', 30)
ON DUPLICATE KEY UPDATE status = VALUES(status);

INSERT INTO torneio_announcements (id, title, body, published_at, pinned, active) VALUES
('n1', 'Calendario inicial publicado', 'Consulta os jogos da fase de grupos e confirma os horarios com a tua equipa.', '2026-06-22', 1, 1),
('n2', 'Regras de classificacao', 'A classificacao e ordenada por pontos, diferenca de golos, golos marcados, vitorias e nome da equipa.', '2026-06-22', 0, 1)
ON DUPLICATE KEY UPDATE title = VALUES(title);

INSERT INTO torneio_rules (id, title, body, sort_order, active) VALUES
('r1', 'Participacao', 'Cada equipa deve apresentar-se antes da hora marcada e respeitar as indicacoes da organizacao.', 1, 1),
('r2', 'Pontuacao', 'Vitoria vale 3 pontos, empate vale 1 ponto e derrota vale 0 pontos.', 2, 1),
('r3', 'Desempates', 'Os criterios sao pontos, diferenca de golos, golos marcados, vitorias e nome da equipa. Casos excecionais sao decididos pela organizacao.', 3, 1),
('r4', 'Fair play', 'Comportamentos antidesportivos podem levar a advertencia, exclusao do jogo ou exclusao do torneio.', 4, 1)
ON DUPLICATE KEY UPDATE title = VALUES(title);
