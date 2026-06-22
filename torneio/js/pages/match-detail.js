import { loadTournamentData } from '../sheets.js';
import { byId, escapeHtml, formatMatchDate, renderError, renderScore, renderStatus, teamName } from '../render.js';

init();

async function init() {
    const target = byId('match-detail');
    const params = new URLSearchParams(window.location.search);
    const matchId = params.get('id');

    try {
        const data = await loadTournamentData();
        const match = data.matches.find((entry) => entry.id === matchId) || data.matches[0];
        const teamById = new Map(data.teams.map((team) => [team.id, team]));

        if (!match) {
            target.innerHTML = '<div class="tournament-empty">Jogo não encontrado.</div>';
            return;
        }

        document.title = `${teamName(teamById, match.homeTeamId)} vs ${teamName(teamById, match.awayTeamId)} | NEAIST Championship`;

        target.innerHTML = `
            <article class="match-detail-card">
                <div class="match-detail-header">
                    <div>
                        <span class="eyebrow">${escapeHtml(match.group)} · ${escapeHtml(match.round || 'Jogo')}</span>
                        <h1>${escapeHtml(teamName(teamById, match.homeTeamId))} vs ${escapeHtml(teamName(teamById, match.awayTeamId))}</h1>
                    </div>
                    ${renderStatus(match.status)}
                </div>
                <div class="match-detail-score">
                    <span>${escapeHtml(teamName(teamById, match.homeTeamId))}</span>
                    <strong>${escapeHtml(renderScore(match))}</strong>
                    <span>${escapeHtml(teamName(teamById, match.awayTeamId))}</span>
                </div>
                <dl class="detail-list">
                    <div><dt>Data</dt><dd>${escapeHtml(formatMatchDate(match))}</dd></div>
                    <div><dt>Local</dt><dd>${escapeHtml(match.venue || 'Local por confirmar')}</dd></div>
                    <div><dt>Estado</dt><dd>${escapeHtml(renderStatusText(match.status))}</dd></div>
                    <div><dt>Notas</dt><dd>${escapeHtml(match.notes || 'Sem notas adicionais.')}</dd></div>
                </dl>
                <a class="btn btn-secondary" href="calendario.html">Voltar ao calendário</a>
            </article>
        `;
    } catch (error) {
        renderError(target, error.message);
    }
}

function renderStatusText(status) {
    const labels = {
        scheduled: 'Agendado',
        live: 'Ao vivo',
        finished: 'Terminado',
        postponed: 'Adiado'
    };

    return labels[status] || status || 'Agendado';
}
