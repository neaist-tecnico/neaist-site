import { loadTournamentData } from '../sheets.js';
import { byId, escapeHtml, groupBy, renderEmpty, renderError } from '../render.js';

init();

async function init() {
    const target = byId('teams-list');

    try {
        const { teams } = await loadTournamentData();

        if (!teams.length) {
            renderEmpty(target, 'Ainda não há equipas publicadas.');
            return;
        }

        const groups = groupBy(teams, 'group');
        target.innerHTML = Object.entries(groups).map(([group, groupTeams]) => `
            <section class="team-group">
                <div class="section-heading compact">
                    <span class="eyebrow">${escapeHtml(group)}</span>
                    <h2>Equipas</h2>
                </div>
                <div class="team-grid">
                    ${groupTeams.map(renderTeam).join('')}
                </div>
            </section>
        `).join('');
    } catch (error) {
        renderError(target, error.message);
    }
}

function renderTeam(team) {
    const initials = team.shortName || team.name.slice(0, 3).toUpperCase();

    return `
        <article class="team-card">
            <div class="team-avatar">
                ${team.logoUrl ? `<img src="${escapeHtml(team.logoUrl)}" alt="">` : `<span>${escapeHtml(initials)}</span>`}
            </div>
            <div>
                <span class="team-group-label">${escapeHtml(team.group)}</span>
                <h3>${escapeHtml(team.name)}</h3>
                <p>${escapeHtml(team.captain ? `Capitão: ${team.captain}` : 'Capitão por confirmar')}</p>
            </div>
        </article>
    `;
}
