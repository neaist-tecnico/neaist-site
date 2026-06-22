import { calculateStandings } from '../standings.js';
import { escapeHtml, renderStandingsTable } from '../render.js';

const apiBase = window.NEAIST_TOURNAMENT_CONFIG?.apiBaseUrl || 'api';
let csrfToken = null;
let state = null;
let drawAssignments = [];

const loginView = document.getElementById('login-view');
const adminView = document.getElementById('admin-view');
const message = document.getElementById('admin-message');
const logoutButton = document.getElementById('logout-button');

init();

async function init() {
    try {
        bindStaticEvents();
        const status = await apiGet('auth.php?action=status');

        if (!status.ok) {
            showLogin();
            showMessage(`Erro ao verificar sessão: ${status.error}`, true);
            return;
        }

        if (status.authenticated) {
            csrfToken = status.csrfToken;
            await loadAdmin();
        } else {
            showLogin();
        }
    } catch (error) {
        showLogin();
        showMessage(`Erro ao iniciar admin: ${error.message}`, true);
    }
}

function bindStaticEvents() {
    document.getElementById('login-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        await handleLoginSubmit(event);
    });

    logoutButton.addEventListener('click', async () => {
        await apiPost('auth.php?action=logout', {});
        csrfToken = null;
        state = null;
        showLogin();
    });

    document.querySelectorAll('[data-admin-tab]').forEach((button) => {
        button.addEventListener('click', () => activateTab(button.dataset.adminTab));
    });

    bindForm('settings-form', 'save-settings', collectSettings);
    bindForm('team-form', 'save-team', collectTeam);
    bindForm('player-form', 'save-player', collectPlayer);
    bindForm('match-form', 'save-match', collectMatch);
    bindForm('goal-form', 'save-goal', collectGoal);

    document.querySelectorAll('[data-clear-form]').forEach((button) => {
        button.addEventListener('click', () => clearForm(button.dataset.clearForm));
    });

    document.getElementById('draw-groups-button').addEventListener('click', previewGroupDraw);
    document.getElementById('save-groups-button').addEventListener('click', saveGroupDraw);

    const logoInput = document.querySelector('#team-form [name="logoUrl"]');
    logoInput?.addEventListener('input', () => renderLogoPreview(logoInput.value));
}

function bindForm(formId, action, collector) {
    document.getElementById(formId).addEventListener('submit', async (event) => {
        event.preventDefault();
        const response = await apiPost(`admin.php?action=${action}`, collector(new FormData(event.currentTarget)));
        handleAdminResponse(response, 'Guardado com sucesso.');
    });
}

async function handleLoginSubmit(event) {
    const form = new FormData(event.currentTarget);
    const submitButton = event.submitter || event.currentTarget.querySelector('button[type="submit"]');

    try {
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'A entrar...';
        }

        const response = await apiPost('auth.php?action=login', {
            username: form.get('username'),
            password: form.get('password')
        }, false);

        if (!response.ok) {
            showMessage(response.error || 'Utilizador ou password inválidos.', true);
            return;
        }

        csrfToken = response.csrfToken;
        const status = await apiGet('auth.php?action=status');

        if (!status.authenticated) {
            showMessage('Login aceite, mas a sessão não ficou guardada no browser. Confirma que cookies estão ativos e que estás em https://neaist.tecnico.ulisboa.pt/torneio/admin.html.', true);
            return;
        }

        csrfToken = status.csrfToken || csrfToken;
        await loadAdmin();
    } catch (error) {
        showMessage(`Erro durante login: ${error.message}`, true);
    } finally {
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Entrar';
        }
    }
}

async function loadAdmin() {
    const response = await apiPost('admin.php?action=list', {});

    if (!response.ok) {
        showMessage(`Login feito, mas não foi possível abrir a administração: ${response.error || 'erro desconhecido'}`, true);
        return;
    }

    try {
        state = normalizeAdminData(response.data);
        renderAdmin();
        loginView.hidden = true;
        adminView.hidden = false;
        logoutButton.hidden = false;
    } catch (error) {
        showLogin();
        showMessage(`Login feito, mas houve erro ao desenhar o painel: ${error.message}`, true);
    }
}

function showLogin() {
    loginView.hidden = false;
    adminView.hidden = true;
    logoutButton.hidden = true;
}

function renderAdmin() {
    renderDashboard();
    renderSettings();
    renderOptions();
    renderTeams();
    renderPlayers();
    renderMatches();
    renderGoals();
    renderAdminStandings();
    renderPrizeStats();
}

function renderDashboard() {
    const finished = state.matches.filter((match) => match.status === 'finished').length;
    const goals = state.goals.length;

    document.getElementById('admin-stats').innerHTML = [
        ['Equipas', state.teams.length],
        ['Jogadores', state.players.length],
        ['Jogos', state.matches.length],
        ['Golos', goals],
        ['Terminados', finished],
        ['Pendentes', state.matches.length - finished]
    ].map(([label, value]) => `<div class="admin-stat"><strong>${value}</strong><span>${label}</span></div>`).join('');
}

function renderSettings() {
    const form = document.getElementById('settings-form');
    ['tournamentName', 'subtitle', 'description', 'venue', 'startDate', 'endDate', 'contactEmail', 'lastUpdated'].forEach((key) => {
        if (form.elements[key]) {
            form.elements[key].value = state.settings[key] || '';
        }
    });
}

function renderOptions() {
    const teamOptions = state.teams.map((team) => `<option value="${escapeHtml(team.id)}">${escapeHtml(team.name)}</option>`).join('');
    const playerOptions = state.players.map((player) => {
        const team = teamName(player.teamId);
        return `<option value="${escapeHtml(player.id)}">${escapeHtml(player.name)} · ${escapeHtml(team)}</option>`;
    }).join('');
    const matchOptions = state.matches.map((match) => `<option value="${escapeHtml(match.id)}">${escapeHtml(matchLabel(match))}</option>`).join('');

    document.querySelectorAll('[data-team-select]').forEach((select) => {
        const current = select.value;
        select.innerHTML = `<option value="">Selecionar equipa</option>${teamOptions}`;
        select.value = current;
    });

    document.querySelectorAll('[data-player-select]').forEach((select) => {
        const current = select.value;
        select.innerHTML = `<option value="">Selecionar jogador</option>${playerOptions}`;
        select.value = current;
    });

    document.querySelectorAll('[data-match-select]').forEach((select) => {
        const current = select.value;
        select.innerHTML = `<option value="">Selecionar jogo</option>${matchOptions}`;
        select.value = current;
    });
}

function renderTeams() {
    document.getElementById('teams-table').innerHTML = renderTable(
        ['Logo', 'ID', 'Grupo', 'Equipa', 'Sigla', 'Capitão', 'Ativa', 'Ações'],
        state.teams.map((team) => [
            htmlCell(team.logoUrl ? `<img class="admin-thumb" src="${escapeHtml(team.logoUrl)}" alt="">` : '<span class="admin-thumb-fallback">-</span>'),
            team.id,
            team.group,
            team.name,
            team.shortName,
            team.captain || '',
            team.active ? 'Sim' : 'Não',
            actionCell('team', team.id)
        ])
    );
}

function renderPlayers() {
    document.getElementById('players-table').innerHTML = renderTable(
        ['ID', 'Equipa', 'Nome', 'Número', 'Posição', 'Ativo', 'Ações'],
        state.players.map((player) => [
            player.id,
            teamName(player.teamId),
            player.name,
            player.shirtNumber ?? '',
            player.position || '',
            player.active ? 'Sim' : 'Não',
            actionCell('player', player.id)
        ])
    );
}

function renderMatches() {
    document.getElementById('matches-table').innerHTML = renderTable(
        ['ID', 'Grupo', 'Jornada', 'Data', 'Casa', 'Fora', 'Resultado', 'Estado', 'Jogador do jogo', 'Ações'],
        state.matches.map((match) => [
            match.id,
            match.group,
            match.round || '',
            [match.date, match.time].filter(Boolean).join(' '),
            teamName(match.homeTeamId),
            teamName(match.awayTeamId),
            scoreText(match),
            match.status,
            playerDisplay(match.playerOfMatchPlayerId, match.playerOfMatchName),
            actionCell('match', match.id)
        ])
    );
}

function renderGoals() {
    document.getElementById('goals-warning').innerHTML = renderGoalWarnings();
    document.getElementById('goals-table').innerHTML = renderTable(
        ['ID', 'Jogo', 'Equipa', 'Jogador', 'Minuto', 'Notas', 'Ações'],
        state.goals.map((goal) => [
            goal.id,
            matchLabelById(goal.matchId),
            teamName(goal.teamId),
            playerDisplay(goal.playerId, goal.playerName),
            goal.minute ?? '',
            [goal.ownGoal ? 'Auto-golo' : '', goal.penalty ? 'Penalti' : ''].filter(Boolean).join(', '),
            actionCell('goal', goal.id)
        ])
    );
}

function renderGoalWarnings() {
    const warnings = [];

    state.matches.forEach((match) => {
        if (!Number.isFinite(match.homeScore) || !Number.isFinite(match.awayScore)) {
            return;
        }

        const homeGoals = state.goals.filter((goal) => goal.matchId === match.id && goal.teamId === match.homeTeamId).length;
        const awayGoals = state.goals.filter((goal) => goal.matchId === match.id && goal.teamId === match.awayTeamId).length;

        if (homeGoals !== match.homeScore || awayGoals !== match.awayScore) {
            warnings.push(`${matchLabel(match)}: marcadores registados ${homeGoals}-${awayGoals}, resultado ${match.homeScore}-${match.awayScore}.`);
        }
    });

    return warnings.length
        ? `<div class="admin-warning"><strong>Atenção aos marcadores</strong>${warnings.map((warning) => `<p>${escapeHtml(warning)}</p>`).join('')}</div>`
        : '';
}

function renderAdminStandings() {
    const activeTeams = state.teams.filter((team) => team.active);
    const standings = calculateStandings(activeTeams, state.matches);
    document.getElementById('admin-standings-preview').innerHTML = standings.length
        ? standings.map(renderStandingsTable).join('')
        : '<div class="tournament-empty">Sem classificação para mostrar.</div>';
}

function renderPrizeStats() {
    const topScorers = computeTopScorers();
    const keeperCandidates = computeKeeperCandidates();
    const potmStats = computePotmStats();

    document.getElementById('admin-stats-preview').innerHTML = `
        <div class="stats-grid">
            <section>${statTable('Melhores marcadores', ['#', 'Jogador', 'Equipa', 'Golos'], topScorers.map((row, index) => [index + 1, row.player, row.team, row.goals]))}</section>
            <section>${statTable('Best keeper candidates', ['#', 'Candidato', 'Equipa', 'GS', 'Clean sheets', 'J'], keeperCandidates.map((row, index) => [index + 1, row.candidate, row.team, row.goalsAgainst, row.cleanSheets, row.played]))}</section>
            <section>${statTable('Jogador do jogo', ['Jogador', 'Equipa', 'Nomeações'], potmStats.map((row) => [row.player, row.team, row.count]))}</section>
        </div>
    `;
}

function statTable(title, headers, rows) {
    const emptyRow = headers.map((_, index) => (index === 1 ? 'Sem dados' : '-'));

    return `
        <div class="standings-group">
            <div class="section-heading compact"><span class="eyebrow">${escapeHtml(title)}</span><h2>${escapeHtml(title)}</h2></div>
            ${renderTable(headers, rows.length ? rows : [emptyRow])}
        </div>
    `;
}

function renderTable(headers, rows) {
    return `
        <div class="table-scroll">
            <table class="admin-table">
                <thead><tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join('')}</tr></thead>
                <tbody>
                    ${rows.map((row) => `<tr>${row.map(renderAdminCell).join('')}</tr>`).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function renderAdminCell(cell) {
    if (cell && typeof cell === 'object' && cell.__html !== undefined) {
        return `<td>${cell.__html}</td>`;
    }

    return `<td>${escapeHtml(cell ?? '')}</td>`;
}

function htmlCell(html) {
    return { __html: html };
}

function actionCell(type, id) {
    return htmlCell(`
        <div class="table-actions">
            <button type="button" data-edit="${escapeHtml(type)}" data-id="${escapeHtml(id)}">Editar</button>
            <button type="button" class="danger" data-delete="${escapeHtml(type)}" data-id="${escapeHtml(id)}">Apagar</button>
        </div>
    `);
}

document.addEventListener('click', async (event) => {
    const editButton = event.target.closest('[data-edit]');
    const deleteButton = event.target.closest('[data-delete]');

    if (editButton) {
        editEntry(editButton.dataset.edit, editButton.dataset.id);
    }

    if (deleteButton) {
        await deleteEntry(deleteButton.dataset.delete, deleteButton.dataset.id);
    }
});

function editEntry(type, id) {
    const maps = {
        team: ['team-form', state.teams],
        player: ['player-form', state.players],
        match: ['match-form', state.matches],
        goal: ['goal-form', state.goals]
    };
    const [formId, collection] = maps[type] || [];
    const item = collection?.find((entry) => entry.id === id);

    if (!item) {
        return;
    }

    const form = document.getElementById(formId);
    Object.entries(item).forEach(([key, value]) => {
        if (!form.elements[key]) {
            return;
        }

        if (form.elements[key].type === 'checkbox') {
            form.elements[key].checked = Boolean(value);
        } else {
            form.elements[key].value = value ?? '';
        }
    });

    if (type === 'team') {
        renderLogoPreview(item.logoUrl);
    }
}

async function deleteEntry(type, id) {
    const actionMap = {
        team: 'delete-team',
        player: 'delete-player',
        match: 'delete-match',
        goal: 'delete-goal'
    };

    if (!actionMap[type] || !window.confirm(`Apagar "${id}"?`)) {
        return;
    }

    const response = await apiPost(`admin.php?action=${actionMap[type]}`, { id });
    handleAdminResponse(response, 'Apagado com sucesso.');
}

function clearForm(formId) {
    const form = document.getElementById(formId);
    form.reset();
    if (form.elements.id) {
        form.elements.id.value = '';
    }
    form.querySelectorAll('input[type="checkbox"]').forEach((input) => {
        input.checked = input.hasAttribute('data-default-checked');
    });
    if (formId === 'team-form') {
        renderLogoPreview('');
    }
}

function collectSettings(form) {
    return Object.fromEntries(form.entries());
}

function collectTeam(form) {
    return {
        id: form.get('id'),
        group: form.get('group'),
        name: form.get('name'),
        shortName: form.get('shortName'),
        logoUrl: form.get('logoUrl'),
        captain: form.get('captain'),
        sortOrder: form.get('sortOrder'),
        active: form.get('active') === 'on'
    };
}

function collectPlayer(form) {
    return {
        id: form.get('id'),
        teamId: form.get('teamId'),
        name: form.get('name'),
        shirtNumber: form.get('shirtNumber'),
        position: form.get('position'),
        sortOrder: form.get('sortOrder'),
        active: form.get('active') === 'on'
    };
}

function collectMatch(form) {
    return {
        id: form.get('id'),
        group: form.get('group'),
        round: form.get('round'),
        date: form.get('date'),
        time: form.get('time'),
        venue: form.get('venue'),
        homeTeamId: form.get('homeTeamId'),
        awayTeamId: form.get('awayTeamId'),
        homeScore: form.get('homeScore'),
        awayScore: form.get('awayScore'),
        status: form.get('status'),
        notes: form.get('notes'),
        playerOfMatchPlayerId: form.get('playerOfMatchPlayerId'),
        playerOfMatchName: form.get('playerOfMatchName'),
        sortOrder: form.get('sortOrder')
    };
}

function collectGoal(form) {
    return {
        id: form.get('id'),
        matchId: form.get('matchId'),
        teamId: form.get('teamId'),
        playerId: form.get('playerId'),
        playerName: form.get('playerName'),
        minute: form.get('minute'),
        ownGoal: form.get('ownGoal') === 'on',
        penalty: form.get('penalty') === 'on'
    };
}

function previewGroupDraw() {
    const groupCount = Number(document.getElementById('draw-group-count').value) || 2;
    const teams = [...state.teams.filter((team) => team.active)].sort(() => Math.random() - 0.5);
    const groupNames = Array.from({ length: groupCount }, (_, index) => `Grupo ${String.fromCharCode(65 + index)}`);

    drawAssignments = teams.map((team, index) => ({
        teamId: team.id,
        group: groupNames[index % groupCount]
    }));

    renderDrawPreview();
    document.getElementById('save-groups-button').disabled = drawAssignments.length === 0;
}

function renderDrawPreview() {
    const grouped = drawAssignments.reduce((result, assignment) => {
        result[assignment.group] = result[assignment.group] || [];
        result[assignment.group].push(teamName(assignment.teamId));
        return result;
    }, {});

    document.getElementById('draw-preview').innerHTML = Object.entries(grouped).map(([group, teams]) => `
        <article class="draw-card">
            <h3>${escapeHtml(group)}</h3>
            <ul>${teams.map((team) => `<li>${escapeHtml(team)}</li>`).join('')}</ul>
        </article>
    `).join('');
}

async function saveGroupDraw() {
    if (!drawAssignments.length || !window.confirm('Guardar este sorteio vai substituir os grupos atuais. Continuar?')) {
        return;
    }

    const response = await apiPost('admin.php?action=save-groups', { assignments: drawAssignments });
    handleAdminResponse(response, 'Grupos guardados com sucesso.');
    drawAssignments = [];
    document.getElementById('save-groups-button').disabled = true;
}

function renderLogoPreview(value) {
    const target = document.getElementById('team-logo-preview');
    const url = String(value || '').trim();
    target.innerHTML = url ? `<img src="${escapeHtml(url)}" alt="Pré-visualização do logo">` : '<span>Sem imagem</span>';
}

function normalizeAdminData(data) {
    return {
        settings: data.settings || {},
        teams: (data.teams || []).map((team) => ({ ...team, active: toBool(team.active), sortOrder: Number(team.sortOrder) || 0 })),
        players: (data.players || []).map((player) => ({ ...player, active: toBool(player.active), shirtNumber: toNullableNumber(player.shirtNumber), sortOrder: Number(player.sortOrder) || 0 })),
        matches: (data.matches || []).map((match) => ({ ...match, homeScore: toNullableNumber(match.homeScore), awayScore: toNullableNumber(match.awayScore), sortOrder: Number(match.sortOrder) || 0 })),
        goals: (data.goals || []).map((goal) => ({ ...goal, minute: toNullableNumber(goal.minute), ownGoal: toBool(goal.ownGoal), penalty: toBool(goal.penalty) })),
        announcements: data.announcements || [],
        rules: data.rules || []
    };
}

function computeTopScorers() {
    const rows = new Map();

    state.goals.filter((goal) => !goal.ownGoal).forEach((goal) => {
        const key = goal.playerId || `manual:${goal.playerName || 'Desconhecido'}:${goal.teamId}`;
        const existing = rows.get(key) || {
            player: playerDisplay(goal.playerId, goal.playerName),
            team: teamName(goal.teamId),
            goals: 0
        };
        existing.goals += 1;
        rows.set(key, existing);
    });

    return [...rows.values()].sort((a, b) => b.goals - a.goals || a.player.localeCompare(b.player));
}

function computeKeeperCandidates() {
    const standings = calculateStandings(state.teams.filter((team) => team.active), state.matches).flatMap((group) => group.rows);
    const rowByTeam = new Map(standings.map((row) => [row.team.id, row]));

    return state.teams.filter((team) => team.active).map((team) => {
        const row = rowByTeam.get(team.id) || { played: 0, goalsAgainst: 0 };
        const cleanSheets = state.matches.filter((match) => {
            if (match.status !== 'finished') {
                return false;
            }
            if (match.homeTeamId === team.id) {
                return match.awayScore === 0;
            }
            if (match.awayTeamId === team.id) {
                return match.homeScore === 0;
            }
            return false;
        }).length;
        const goalkeeper = state.players.find((player) => player.teamId === team.id && String(player.position || '').toLowerCase().includes('goalkeeper'));

        return {
            candidate: goalkeeper?.name || team.name,
            team: team.name,
            goalsAgainst: row.goalsAgainst,
            cleanSheets,
            played: row.played,
            rankPoints: row.points || 0
        };
    }).sort((a, b) => a.goalsAgainst - b.goalsAgainst || b.cleanSheets - a.cleanSheets || b.played - a.played || b.rankPoints - a.rankPoints);
}

function computePotmStats() {
    const rows = new Map();

    state.matches.forEach((match) => {
        const label = playerDisplay(match.playerOfMatchPlayerId, match.playerOfMatchName);
        if (!label || label === '-') {
            return;
        }
        const player = state.players.find((item) => item.id === match.playerOfMatchPlayerId);
        const key = match.playerOfMatchPlayerId || `manual:${label}`;
        const existing = rows.get(key) || {
            player: label,
            team: player ? teamName(player.teamId) : '-',
            count: 0
        };
        existing.count += 1;
        rows.set(key, existing);
    });

    return [...rows.values()].sort((a, b) => b.count - a.count || a.player.localeCompare(b.player));
}

function teamName(id) {
    return state.teams.find((team) => team.id === id)?.name || id || '-';
}

function playerDisplay(id, fallback) {
    return state.players.find((player) => player.id === id)?.name || fallback || '-';
}

function matchLabelById(id) {
    return matchLabel(state.matches.find((match) => match.id === id));
}

function matchLabel(match) {
    if (!match) {
        return '-';
    }

    return `${teamName(match.homeTeamId)} vs ${teamName(match.awayTeamId)}${match.date ? ` · ${match.date}` : ''}`;
}

function toBool(value) {
    return value === true || value === 1 || value === '1';
}

function toNullableNumber(value) {
    if (value === null || value === undefined || value === '') {
        return null;
    }

    const number = Number(value);
    return Number.isFinite(number) ? number : null;
}

function scoreText(match) {
    return Number.isFinite(match.homeScore) && Number.isFinite(match.awayScore) ? `${match.homeScore} - ${match.awayScore}` : 'vs';
}

function activateTab(tab) {
    document.querySelectorAll('[data-admin-tab]').forEach((button) => {
        button.classList.toggle('active', button.dataset.adminTab === tab);
    });

    document.querySelectorAll('[data-admin-panel]').forEach((panel) => {
        panel.hidden = panel.dataset.adminPanel !== tab;
    });
}

function handleAdminResponse(response, successText) {
    if (!response.ok) {
        showMessage(response.error || 'Ação falhou.', true);
        return;
    }

    state = normalizeAdminData(response.data);
    renderAdmin();
    showMessage(successText, false);
}

function showMessage(text, isError = false) {
    message.textContent = text;
    message.classList.toggle('is-error', isError);
    message.hidden = false;

    window.setTimeout(() => {
        message.hidden = true;
    }, 4500);
}

async function apiGet(path) {
    return apiRequest(path, { credentials: 'same-origin', cache: 'no-store' });
}

async function apiPost(path, payload, includeCsrf = true) {
    const headers = { 'Content-Type': 'application/json' };
    if (includeCsrf && csrfToken) {
        headers['X-CSRF-Token'] = csrfToken;
    }

    return apiRequest(path, {
        method: 'POST',
        credentials: 'same-origin',
        cache: 'no-store',
        headers,
        body: JSON.stringify(payload)
    });
}

async function apiRequest(path, options) {
    try {
        const response = await fetch(`${apiBase}/${path}`, options);
        const text = await response.text();

        try {
            const payload = JSON.parse(text);
            return payload.ok === undefined ? { ok: response.ok, ...payload } : payload;
        } catch (error) {
            const detail = text.trim().slice(0, 180);
            return {
                ok: false,
                error: detail ? `A API não devolveu JSON válido. Resposta: ${detail}` : `A API não devolveu JSON válido. HTTP ${response.status}.`
            };
        }
    } catch (error) {
        return {
            ok: false,
            error: `Não foi possível contactar a API (${apiBase}/${path}).`
        };
    }
}
