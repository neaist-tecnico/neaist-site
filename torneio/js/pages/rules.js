import { loadTournamentData } from '../sheets.js';
import { byId, escapeHtml, renderEmpty, renderError } from '../render.js';

init();

async function init() {
    const target = byId('rules-list');

    try {
        const { rules } = await loadTournamentData();

        if (!rules.length) {
            renderEmpty(target, 'As regras ainda estão a ser preparadas.');
            return;
        }

        target.innerHTML = rules.map((rule) => `
            <article class="rule-card">
                <span>${rule.sortOrder ? String(rule.sortOrder).padStart(2, '0') : 'NEAIST'}</span>
                <h2>${escapeHtml(rule.title)}</h2>
                <p>${escapeHtml(rule.body)}</p>
            </article>
        `).join('');
    } catch (error) {
        renderError(target, error.message);
    }
}
