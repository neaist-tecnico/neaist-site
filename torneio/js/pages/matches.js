import { loadTournamentData } from '../sheets.js';
import { byId, escapeHtml, groupBy, renderEmpty, renderError, renderMatchCard, sortMatches } from '../render.js';

const mode = document.body.dataset.matchesMode || 'all';

init();

async function init() {
    const target = byId('matches-list');

    try {
        const data = await loadTournamentData();
        const teamById = new Map(data.teams.map((team) => [team.id, team]));
        const filtered = filterMatches(data.matches);

        if (!filtered.length) {
            renderEmpty(target, mode === 'results' ? 'Ainda não há resultados publicados.' : 'Ainda não há jogos publicados.');
            return;
        }

        const groups = groupBy(sortMatches(filtered), 'group');
        target.innerHTML = Object.entries(groups).map(([group, matches]) => `
            <section class="match-group">
                <div class="section-heading compact">
                    <span class="eyebrow">${escapeHtml(group)}</span>
                    <h2>${mode === 'results' ? 'Resultados' : 'Jogos'}</h2>
                </div>
                <div class="match-list">
                    ${matches.map((match) => renderMatchCard(match, teamById)).join('')}
                </div>
            </section>
        `).join('');
    } catch (error) {
        renderError(target, error.message);
    }
}

function filterMatches(matches) {
    if (mode === 'results') {
        return matches.filter((match) => match.status === 'finished');
    }

    return matches.filter((match) => match.status !== 'finished');
}
