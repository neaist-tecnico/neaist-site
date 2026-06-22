import { calculateStandings } from '../standings.js';
import { escapeHtml, renderStandingsTable } from '../render.js';

const apiBase = window.NEAIST_TOURNAMENT_CONFIG?.apiBaseUrl || 'api';
let csrfToken = null;
let state = null;

const loginView = document.getElementById('login-view');
const adminView = document.getElementById('admin-view');
const message = document.getElementById('admin-message');
const logoutButton = document.getElementById('logout-button');

init();

async function init() {
    bindStaticEvents();
    const status = await apiGet('auth.php?action=status');

    if (!status.ok) {
        showLogin();
        showMessage(status.error, true);
        return;
    }

    if (status.authenticated) {
        csrfToken = status.csrfToken;
        await loadAdmin();
    } else {
        showLogin();
    }
}

function bindStaticEvents() {
    document.getElementById('login-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const submitButton = event.submitter;
        submitButton.disabled = true;
        submitButton.textContent = 'A entrar...';

        const response = await apiPost('auth.php?action=login', {
            username: form.get('username'),
            password: form.get('password')
        }, false);

        submitButton.disabled = false;
        submitButton.textContent = 'Entrar';

        if (!response.ok) {
            showMessage(response.error || 'Login falhou.', true);
            return;
        }

        csrfToken = response.csrfToken;
        await loadAdmin();
    });

    document.getElementById('logout-button').addEventListener('click', async () => {
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
    bindForm('match-form', 'save-match', collectMatch);
    bindForm('announcement-form', 'save-announcement', collectAnnouncement);
    bindForm('rule-form', 'save-rule', collectRule);

    document.querySelectorAll('[data-clear-form]').forEach((button) => {
        button.addEventListener('click', () => clearForm(button.dataset.clearForm));
    });
}

function bindForm(formId, action, collector) {
    document.getElementById(formId).addEventListener('submit', async (event) => {
        event.preventDefault();
        const payload = collector(new FormData(event.currentTarget));
        const response = await apiPost(`admin.php?action=${action}`, payload);
        handleAdminResponse(response, 'Guardado com sucesso.');
    });
}

async function loadAdmin() {
    const response = await apiPost('admin.php?action=list', {});

    if (!response.ok) {
        showLogin();
        showMessage(response.error || 'Não foi possível abrir a administração.', true);
        return;
    }

    state = normalizeAdminData(response.data);
    renderAdmin();
    loginView.hidden = true;
    adminView.hidden = false;
    logoutButton.hidden = false;
}

function showLogin() {
    loginView.hidden = false;
    adminView.hidden = true;
    logoutButton.hidden = true;
}

function renderAdmin() {
    renderDashboard();
    renderSettings();
    renderTeamOptions();
    renderTeams();
    renderMatches();
    renderAnnouncements();
    renderRules();
    renderAdminStandings();
}

function renderDashboard() {
    const finished = state.matches.filter((match) => match.status === 'finished').length;
    const pending = state.matches.filter((match) => match.status !== 'finished').length;

    document.getElementById('admin-stats').innerHTML = [
        ['Equipas', state.teams.length],
        ['Jogos', state.matches.length],
        ['Terminados', finished],
        ['Pendentes', pending]
    ].map(([label, value]) => `
        <div class="admin-stat"><strong>${value}</strong><span>${label}</span></div>
    `).join('');
}

function renderSettings() {
    const form = document.getElementById('settings-form');
    const settings = state.settings;

    ['tournamentName', 'subtitle', 'description', 'venue', 'startDate', 'endDate', 'contactEmail', 'lastUpdated'].forEach((key) => {
        if (form.elements[key]) {
            form.elements[key].value = settings[key] || '';
        }
    });
}

function renderTeamOptions() {
    const options = state.teams.map((team) => `<option value="${escapeHtml(team.id)}">${escapeHtml(team.name)}</option>`).join('');
    document.querySelectorAll('[data-team-select]').forEach((select) => {
        const current = select.value;
        select.innerHTML = `<option value="">Selecionar equipa</option>${options}`;
        select.value = current;
    });
}

function renderTeams() {
    document.getElementById('teams-table').innerHTML = renderTable(
        ['ID', 'Grupo', 'Equipa', 'Sigla', 'Capitão', 'Ativa', 'Ações'],
        state.teams.map((team) => [
            team.id,
            team.group,
            team.name,
            team.shortName,
            team.captain || '',
            team.active ? 'Sim' : 'Não',
            actionButtons('team', team.id)
        ])
    );
}

function renderMatches() {
    const teamById = new Map(state.teams.map((team) => [team.id, team.name]));
    document.getElementById('matches-table').innerHTML = renderTable(
        ['ID', 'Grupo', 'Jornada', 'Data', 'Casa', 'Fora', 'Resultado', 'Estado', 'Ações'],
        state.matches.map((match) => [
            match.id,
            match.group,
            match.round || '',
            [match.date, match.time].filter(Boolean).join(' '),
            teamById.get(match.homeTeamId) || match.homeTeamId,
            teamById.get(match.awayTeamId) || match.awayTeamId,
            scoreText(match),
            match.status,
            actionButtons('match', match.id)
        ])
    );
}

function renderAnnouncements() {
    document.getElementById('announcements-table').innerHTML = renderTable(
        ['ID', 'Data', 'Título', 'Fixo', 'Ativo', 'Ações'],
        state.announcements.map((item) => [
            item.id,
            item.date || '',
            item.title,
            item.pinned ? 'Sim' : 'Não',
            item.active ? 'Sim' : 'Não',
            actionButtons('announcement', item.id)
        ])
    );
}

function renderRules() {
    document.getElementById('rules-table').innerHTML = renderTable(
        ['ID', 'Ordem', 'Título', 'Ativa', 'Ações'],
        state.rules.map((rule) => [
            rule.id,
            rule.sortOrder,
            rule.title,
            rule.active ? 'Sim' : 'Não',
            actionButtons('rule', rule.id)
        ])
    );
}

function renderAdminStandings() {
    const activeTeams = state.teams.filter((team) => team.active);
    const standings = calculateStandings(activeTeams, state.matches);
    document.getElementById('admin-standings-preview').innerHTML = standings.length
        ? standings.map(renderStandingsTable).join('')
        : '<div class="tournament-empty">Sem classificação para mostrar.</div>';
}

function renderTable(headers, rows) {
    return `
        <div class="table-scroll">
            <table class="admin-table">
                <thead><tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join('')}</tr></thead>
                <tbody>
                    ${rows.map((row) => `<tr>${row.map((cell) => `<td>${renderAdminCell(cell)}</td>`).join('')}</tr>`).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function renderAdminCell(cell) {
    const value = String(cell ?? '');

    if (value.startsWith('<div class="table-actions">')) {
        return value;
    }

    return escapeHtml(value);
}

function actionButtons(type, id) {
    return `
        <div class="table-actions">
            <button type="button" data-edit="${type}" data-id="${escapeHtml(id)}">Editar</button>
            <button type="button" class="danger" data-delete="${type}" data-id="${escapeHtml(id)}">Apagar</button>
        </div>
    `;
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
        match: ['match-form', state.matches],
        announcement: ['announcement-form', state.announcements],
        rule: ['rule-form', state.rules]
    };
    const [formId, collection] = maps[type];
    const item = collection.find((entry) => entry.id === id);

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
}

async function deleteEntry(type, id) {
    const actionMap = {
        team: 'delete-team',
        match: 'delete-match',
        announcement: 'delete-announcement',
        rule: 'delete-rule'
    };

    if (!window.confirm(`Apagar "${id}"?`)) {
        return;
    }

    const response = await apiPost(`admin.php?action=${actionMap[type]}`, { id });
    handleAdminResponse(response, 'Apagado com sucesso.');
}

function clearForm(formId) {
    const form = document.getElementById(formId);
    form.reset();
    form.querySelectorAll('input[type="checkbox"]').forEach((input) => {
        input.checked = input.hasAttribute('data-default-checked');
    });
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
        sortOrder: form.get('sortOrder')
    };
}

function collectAnnouncement(form) {
    return {
        id: form.get('id'),
        title: form.get('title'),
        body: form.get('body'),
        date: form.get('date'),
        pinned: form.get('pinned') === 'on',
        active: form.get('active') === 'on'
    };
}

function collectRule(form) {
    return {
        id: form.get('id'),
        title: form.get('title'),
        body: form.get('body'),
        sortOrder: form.get('sortOrder'),
        active: form.get('active') === 'on'
    };
}

function normalizeAdminData(data) {
    return {
        settings: data.settings || {},
        teams: (data.teams || []).map((team) => ({ ...team, active: toBool(team.active), sortOrder: Number(team.sortOrder) || 0 })),
        matches: (data.matches || []).map((match) => ({
            ...match,
            homeScore: toNullableNumber(match.homeScore),
            awayScore: toNullableNumber(match.awayScore),
            sortOrder: Number(match.sortOrder) || 0
        })),
        announcements: (data.announcements || []).map((item) => ({ ...item, pinned: toBool(item.pinned), active: toBool(item.active) })),
        rules: (data.rules || []).map((rule) => ({ ...rule, active: toBool(rule.active), sortOrder: Number(rule.sortOrder) || 0 }))
    };
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
    return Number.isFinite(match.homeScore) && Number.isFinite(match.awayScore)
        ? `${match.homeScore} - ${match.awayScore}`
        : 'vs';
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
    }, 4000);
}

async function apiGet(path) {
    return apiRequest(path, {
        credentials: 'same-origin',
        cache: 'no-store'
    });
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
                error: detail
                    ? `A API não devolveu JSON válido. Resposta: ${detail}`
                    : `A API não devolveu JSON válido. HTTP ${response.status}.`
            };
        }
    } catch (error) {
        return {
            ok: false,
            error: `Não foi possível contactar a API (${apiBase}/${path}). Confirma que estás a abrir isto num servidor com PHP, não só como ficheiro estático.`
        };
    }
}
