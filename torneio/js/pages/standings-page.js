import { loadTournamentData } from '../sheets.js';
import { calculateStandings } from '../standings.js';
import { byId, escapeHtml, renderEmpty, renderError, renderStandingsTable } from '../render.js';

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

        target.innerHTML = standings.map(renderStandingsTable).join('') + renderPublicStats(data, standings);
    } catch (error) {
        renderError(target, error.message);
    }
}

function renderPublicStats(data, standings) {
    const teamById = new Map(data.teams.map((team) => [team.id, team]));
    const playerById = new Map(data.players.map((player) => [player.id, player]));
    const scorers = topScorers(data, teamById, playerById);
    const keepers = keeperCandidates(data, standings, playerById);
    const potm = playerOfMatchStats(data, teamById, playerById);

    return `
        <section class="content-section">
            <div class="section-heading compact"><span class="eyebrow">Prémios e estatísticas</span><h2>Estatísticas</h2></div>
            <div class="stats-grid">
                ${simpleTable('Melhores marcadores', ['#', 'Jogador', 'Equipa', 'Golos'], scorers.map((row, index) => [index + 1, row.player, row.team, row.goals]))}
                ${simpleTable('Best keeper candidates', ['#', 'Candidato', 'Equipa', 'GS', 'Clean sheets', 'J'], keepers.map((row, index) => [index + 1, row.candidate, row.team, row.goalsAgainst, row.cleanSheets, row.played]))}
                ${simpleTable('Jogador do jogo', ['Jogador', 'Equipa', 'Nomeações'], potm.map((row) => [row.player, row.team, row.count]))}
            </div>
        </section>
    `;
}

function simpleTable(title, headers, rows) {
    const safeRows = rows.length ? rows : [['-', 'Sem dados', '', '', '', '']];

    return `
        <div class="standings-group">
            <div class="section-heading compact"><span class="eyebrow">${escapeHtml(title)}</span></div>
            <div class="table-scroll">
                <table class="standings-table">
                    <thead><tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join('')}</tr></thead>
                    <tbody>${safeRows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody>
                </table>
            </div>
        </div>
    `;
}

function topScorers(data, teamById, playerById) {
    const rows = new Map();

    data.goals.filter((goal) => !goal.ownGoal).forEach((goal) => {
        const key = goal.playerId || `${goal.playerName}:${goal.teamId}`;
        const player = playerById.get(goal.playerId);
        const existing = rows.get(key) || {
            player: player?.name || goal.playerName || 'Desconhecido',
            team: teamById.get(goal.teamId)?.name || '-',
            goals: 0
        };
        existing.goals += 1;
        rows.set(key, existing);
    });

    return [...rows.values()].sort((a, b) => b.goals - a.goals || a.player.localeCompare(b.player));
}

function keeperCandidates(data, standings, playerById) {
    const rowByTeam = new Map(standings.flatMap((group) => group.rows).map((row) => [row.team.id, row]));

    return data.teams.map((team) => {
        const row = rowByTeam.get(team.id) || { played: 0, goalsAgainst: 0, points: 0 };
        const cleanSheets = data.matches.filter((match) => match.status === 'finished' && ((match.homeTeamId === team.id && match.awayScore === 0) || (match.awayTeamId === team.id && match.homeScore === 0))).length;
        const keeper = [...playerById.values()].find((player) => player.teamId === team.id && String(player.position || '').toLowerCase().includes('goalkeeper'));

        return {
            candidate: keeper?.name || team.name,
            team: team.name,
            goalsAgainst: row.goalsAgainst,
            cleanSheets,
            played: row.played,
            points: row.points
        };
    }).sort((a, b) => a.goalsAgainst - b.goalsAgainst || b.cleanSheets - a.cleanSheets || b.played - a.played || b.points - a.points);
}

function playerOfMatchStats(data, teamById, playerById) {
    const rows = new Map();

    data.matches.forEach((match) => {
        const player = playerById.get(match.playerOfMatchPlayerId);
        const label = player?.name || match.playerOfMatchName;
        if (!label) {
            return;
        }
        const key = match.playerOfMatchPlayerId || label;
        const existing = rows.get(key) || { player: label, team: player ? teamById.get(player.teamId)?.name || '-' : '-', count: 0 };
        existing.count += 1;
        rows.set(key, existing);
    });

    return [...rows.values()].sort((a, b) => b.count - a.count || a.player.localeCompare(b.player));
}
