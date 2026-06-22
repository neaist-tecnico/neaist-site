export function calculateStandings(teams, matches) {
    const teamById = new Map(teams.map((team) => [team.id, team]));
    const rowsByGroup = new Map();

    teams.forEach((team) => {
        const row = createRow(team);
        const groupRows = rowsByGroup.get(team.group) || [];
        groupRows.push(row);
        rowsByGroup.set(team.group, groupRows);
    });

    matches.forEach((match) => {
        if (!isFinishedWithScore(match)) {
            return;
        }

        const homeTeam = teamById.get(match.homeTeamId);
        const awayTeam = teamById.get(match.awayTeamId);

        if (!homeTeam || !awayTeam) {
            return;
        }

        const homeRow = findRow(rowsByGroup, homeTeam.group, homeTeam.id);
        const awayRow = findRow(rowsByGroup, awayTeam.group, awayTeam.id);

        if (!homeRow || !awayRow) {
            return;
        }

        applyResult(homeRow, match.homeScore, match.awayScore);
        applyResult(awayRow, match.awayScore, match.homeScore);
    });

    return Array.from(rowsByGroup.entries()).map(([group, rows]) => ({
        group,
        rows: rows.sort(compareRows)
    }));
}

function createRow(team) {
    return {
        team,
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
    };
}

function isFinishedWithScore(match) {
    return match.status === 'finished'
        && Number.isFinite(match.homeScore)
        && Number.isFinite(match.awayScore);
}

function findRow(rowsByGroup, group, teamId) {
    return (rowsByGroup.get(group) || []).find((row) => row.team.id === teamId);
}

function applyResult(row, ownGoals, opponentGoals) {
    row.played += 1;
    row.goalsFor += ownGoals;
    row.goalsAgainst += opponentGoals;
    row.goalDifference = row.goalsFor - row.goalsAgainst;

    if (ownGoals > opponentGoals) {
        row.wins += 1;
        row.points += 3;
    } else if (ownGoals === opponentGoals) {
        row.draws += 1;
        row.points += 1;
    } else {
        row.losses += 1;
    }
}

function compareRows(a, b) {
    return b.points - a.points
        || b.goalDifference - a.goalDifference
        || b.goalsFor - a.goalsFor
        || b.wins - a.wins
        || a.team.name.localeCompare(b.team.name);
}
