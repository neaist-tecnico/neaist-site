import { loadTournamentData } from '../sheets.js';
import { calculateStandings } from '../standings.js';
import { byId, renderEmpty, renderError, renderStandingsTable } from '../render.js';

init();

async function init() {
    const target = byId('standings-list');

    try {
        const data = await loadTournamentData();
        const standings = calculateStandings(data.teams, data.matches);

        if (!standings.length) {
            renderEmpty(target, 'A classificação ainda não está disponível.');
            return;
        }

        target.innerHTML = standings.map(renderStandingsTable).join('');
    } catch (error) {
        renderError(target, error.message);
    }
}
