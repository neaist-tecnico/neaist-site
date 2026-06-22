import { loadTournamentData } from '../sheets.js';
import { calculateStandings } from '../standings.js';
import { byId, escapeHtml, renderError, renderMatchCard, renderStandingsTable, setText, sortMatches } from '../render.js';

init();

async function init() {
    try {
        const data = await loadTournamentData();
        const teamById = new Map(data.teams.map((team) => [team.id, team]));
        const standings = calculateStandings(data.teams, data.matches);
        const upcoming = sortMatches(data.matches).filter((match) => match.status !== 'finished').slice(0, 3);
        const finishedCount = data.matches.filter((match) => match.status === 'finished').length;

        setText('tournament-name', data.settings.tournamentName || 'NEAIST Championship');
        setText('tournament-description', data.settings.description || 'Calendario, resultados e classificacao do torneio.');
        setText('tournament-venue', data.settings.venue || 'Local por confirmar');
        setText('stat-teams', String(data.teams.length));
        setText('stat-matches', String(data.matches.length));
        setText('stat-finished', String(finishedCount));

        byId('announcement-list').innerHTML = data.announcements.slice(0, 3).map((announcement) => `
            <article class="announcement-card">
                <span>${escapeHtml(announcement.date || 'Atualizacao')}</span>
                <h3>${escapeHtml(announcement.title)}</h3>
                <p>${escapeHtml(announcement.body)}</p>
            </article>
        `).join('');

        byId('upcoming-list').innerHTML = upcoming.length
            ? upcoming.map((match) => renderMatchCard(match, teamById)).join('')
            : '<div class="tournament-empty">Ainda não há próximos jogos publicados.</div>';

        byId('standings-preview').innerHTML = standings.length
            ? renderStandingsTable(standings[0])
            : '<div class="tournament-empty">A classificação ainda não está disponível.</div>';
    } catch (error) {
        renderError(byId('home-content'), error.message);
    }
}
