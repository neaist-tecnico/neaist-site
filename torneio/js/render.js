export function byId(id) {
    return document.getElementById(id);
}

export function setText(id, value) {
    const element = byId(id);

    if (element) {
        element.textContent = value || '';
    }
}

export function renderError(target, message) {
    target.innerHTML = `<div class="tournament-empty"><strong>Não foi possível carregar os dados.</strong><span>${escapeHtml(message)}</span></div>`;
}

export function renderEmpty(target, message) {
    target.innerHTML = `<div class="tournament-empty">${escapeHtml(message)}</div>`;
}

export function teamName(teamById, id) {
    return teamById.get(id)?.name || 'Equipa por confirmar';
}

export function teamShortName(teamById, id) {
    return teamById.get(id)?.shortName || 'TBD';
}

export function formatMatchDate(match) {
    if (!match.date) {
        return 'Data por confirmar';
    }

    const date = new Date(`${match.date}T${match.time || '00:00'}`);

    if (Number.isNaN(date.getTime())) {
        return [match.date, match.time].filter(Boolean).join(' · ');
    }

    return new Intl.DateTimeFormat('pt-PT', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        hour: match.time ? '2-digit' : undefined,
        minute: match.time ? '2-digit' : undefined
    }).format(date);
}

export function statusLabel(status) {
    const labels = {
        scheduled: 'Agendado',
        live: 'Ao vivo',
        finished: 'Terminado',
        postponed: 'Adiado'
    };

    return labels[status] || status || 'Agendado';
}

export function renderStatus(status) {
    return `<span class="status-badge status-${escapeHtml(status || 'scheduled')}">${escapeHtml(statusLabel(status))}</span>`;
}

export function renderScore(match) {
    if (Number.isFinite(match.homeScore) && Number.isFinite(match.awayScore)) {
        return `${match.homeScore} - ${match.awayScore}`;
    }

    return match.status === 'postponed' ? 'Adiado' : 'vs';
}

export function renderMatchCard(match, teamById) {
    return `
        <article class="match-card">
            <div class="match-card-top">
                <span>${escapeHtml(match.group)} · ${escapeHtml(match.round || 'Jogo')}</span>
                ${renderStatus(match.status)}
            </div>
            <a class="match-card-body" href="jogo.html?id=${encodeURIComponent(match.id)}">
                <div class="match-team">
                    <strong>${escapeHtml(teamName(teamById, match.homeTeamId))}</strong>
                    <span>${escapeHtml(teamShortName(teamById, match.homeTeamId))}</span>
                </div>
                <div class="match-score">${escapeHtml(renderScore(match))}</div>
                <div class="match-team match-team-away">
                    <strong>${escapeHtml(teamName(teamById, match.awayTeamId))}</strong>
                    <span>${escapeHtml(teamShortName(teamById, match.awayTeamId))}</span>
                </div>
            </a>
            <div class="match-card-meta">
                <span><i class="fas fa-calendar-days" aria-hidden="true"></i>${escapeHtml(formatMatchDate(match))}</span>
                <span><i class="fas fa-location-dot" aria-hidden="true"></i>${escapeHtml(match.venue || 'Local por confirmar')}</span>
            </div>
        </article>
    `;
}

export function renderStandingsTable(group) {
    const rows = group.rows.map((row, index) => `
        <tr>
            <td class="rank-cell">${index + 1}</td>
            <td class="team-cell"><strong>${escapeHtml(row.team.name)}</strong><span>${escapeHtml(row.team.shortName)}</span></td>
            <td>${row.played}</td>
            <td>${row.wins}</td>
            <td>${row.draws}</td>
            <td>${row.losses}</td>
            <td>${row.goalsFor}</td>
            <td>${row.goalsAgainst}</td>
            <td>${row.goalDifference}</td>
            <td><strong>${row.points}</strong></td>
        </tr>
    `).join('');

    return `
        <section class="standings-group">
            <div class="section-heading compact">
                <span class="eyebrow">${escapeHtml(group.group)}</span>
                <h2>Classificação</h2>
            </div>
            <div class="table-scroll">
                <table class="standings-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Equipa</th>
                            <th>J</th>
                            <th>V</th>
                            <th>E</th>
                            <th>D</th>
                            <th>GM</th>
                            <th>GS</th>
                            <th>DG</th>
                            <th>Pts</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        </section>
    `;
}

export function sortMatches(matches) {
    return [...matches].sort((a, b) => {
        const dateA = `${a.date || '9999-12-31'}T${a.time || '23:59'}`;
        const dateB = `${b.date || '9999-12-31'}T${b.time || '23:59'}`;
        return dateA.localeCompare(dateB) || a.id.localeCompare(b.id);
    });
}

export function groupBy(items, key) {
    return items.reduce((groups, item) => {
        const value = item[key] || 'Geral';
        groups[value] = groups[value] || [];
        groups[value].push(item);
        return groups;
    }, {});
}

export function escapeHtml(value) {
    return String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}
