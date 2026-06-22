import { sampleAnnouncements, sampleMatches, sampleRules, sampleSettings, sampleTeams } from './sample-data.js';

const config = window.NEAIST_TOURNAMENT_CONFIG || {};

const fallbackData = {
    settings: sampleSettings,
    teams: sampleTeams,
    matches: sampleMatches,
    players: [],
    goals: [],
    announcements: sampleAnnouncements,
    rules: sampleRules
};

export async function loadTournamentData() {
    const apiData = await loadApiData();

    return {
        settings: normalizeSettings(apiData.settings),
        teams: normalizeTeams(apiData.teams),
        matches: normalizeMatches(apiData.matches),
        players: normalizePlayers(apiData.players),
        goals: normalizeGoals(apiData.goals),
        announcements: normalizeAnnouncements(apiData.announcements),
        rules: normalizeRules(apiData.rules)
    };
}

async function loadApiData() {
    try {
        const response = await fetch(`${config.apiBaseUrl || 'api'}/data.php`, {
            cache: 'no-store',
            credentials: 'same-origin'
        });

        if (!response.ok) {
            throw new Error(`API returned ${response.status}`);
        }

        const payload = await response.json();

        if (!payload.ok) {
            throw new Error(payload.error || 'API returned an error');
        }

        return payload;
    } catch (error) {
        console.warn('Using fallback tournament data:', error);

        if (config.useSampleDataWhenApiFails !== false) {
            return fallbackData;
        }

        return {
            settings: {},
            teams: [],
            matches: [],
            players: [],
            goals: [],
            announcements: [],
            rules: []
        };
    }
}

function normalizeSettings(settings) {
    if (!Array.isArray(settings)) {
        return settings || {};
    }

    return settings.reduce((result, row) => {
        if (row.key) {
            result[row.key] = row.value || '';
        }
        return result;
    }, {});
}

function normalizeTeams(teams) {
    return (teams || [])
        .map((team) => ({
            id: clean(team.id),
            group: clean(team.group) || 'Geral',
            name: clean(team.name),
            shortName: clean(team.shortName) || clean(team.name),
            logoUrl: clean(team.logoUrl),
            captain: clean(team.captain),
            active: parseBool(team.active, true)
        }))
        .filter((team) => team.id && team.name && team.active);
}

function normalizeMatches(matches) {
    return (matches || [])
        .map((match) => ({
            id: clean(match.id),
            group: clean(match.group) || 'Geral',
            round: clean(match.round),
            date: clean(match.date),
            time: clean(match.time),
            venue: clean(match.venue),
            homeTeamId: clean(match.homeTeamId),
            awayTeamId: clean(match.awayTeamId),
            homeScore: parseScore(match.homeScore),
            awayScore: parseScore(match.awayScore),
            status: clean(match.status) || 'scheduled',
            notes: clean(match.notes),
            playerOfMatchPlayerId: clean(match.playerOfMatchPlayerId),
            playerOfMatchName: clean(match.playerOfMatchName)
        }))
        .filter((match) => match.id && match.homeTeamId && match.awayTeamId);
}

function normalizePlayers(players) {
    return (players || [])
        .map((player) => ({
            id: clean(player.id),
            teamId: clean(player.teamId),
            name: clean(player.name),
            shirtNumber: parseScore(player.shirtNumber),
            position: clean(player.position),
            active: parseBool(player.active, true),
            sortOrder: Number(player.sortOrder) || 0
        }))
        .filter((player) => player.id && player.teamId && player.name && player.active);
}

function normalizeGoals(goals) {
    return (goals || [])
        .map((goal) => ({
            id: clean(goal.id),
            matchId: clean(goal.matchId),
            teamId: clean(goal.teamId),
            playerId: clean(goal.playerId),
            playerName: clean(goal.playerName),
            minute: parseScore(goal.minute),
            ownGoal: parseBool(goal.ownGoal, false),
            penalty: parseBool(goal.penalty, false)
        }))
        .filter((goal) => goal.id && goal.matchId && goal.teamId);
}

function normalizeAnnouncements(announcements) {
    return (announcements || [])
        .map((announcement) => ({
            id: clean(announcement.id),
            title: clean(announcement.title),
            body: clean(announcement.body),
            date: clean(announcement.date),
            pinned: parseBool(announcement.pinned, false),
            active: parseBool(announcement.active, true)
        }))
        .filter((announcement) => announcement.id && announcement.title && announcement.active)
        .sort((a, b) => Number(b.pinned) - Number(a.pinned) || b.date.localeCompare(a.date));
}

function normalizeRules(rules) {
    return (rules || [])
        .map((rule) => ({
            id: clean(rule.id),
            title: clean(rule.title),
            body: clean(rule.body),
            sortOrder: Number(rule.sortOrder) || 0,
            active: parseBool(rule.active, true)
        }))
        .filter((rule) => rule.title && rule.body && rule.active)
        .sort((a, b) => a.sortOrder - b.sortOrder || a.title.localeCompare(b.title));
}

function parseScore(value) {
    if (value === null || value === undefined || value === '') {
        return null;
    }

    const score = Number(value);
    return Number.isFinite(score) ? score : null;
}

function parseBool(value, fallback) {
    if (value === null || value === undefined || value === '') {
        return fallback;
    }

    return ['true', '1', 'sim', 'yes', 'y'].includes(String(value).trim().toLowerCase());
}

function clean(value) {
    return String(value || '').trim();
}
