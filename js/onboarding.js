// Shared destinations for the onboarding hub. Keep HTML href fallbacks in sync so
// every action also works with JavaScript disabled (no client-side rendering).
(() => {
    'use strict';
    const NEAIST_ONBOARDING = Object.freeze({
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdWEEdEibkHmomE9jwtozgM7lZSU0niKHMRODGaSGuAUcgUpA/viewform?usp=header',
        guideUrl: 'files/caloiros/2026-2027/guia-novos-alunos-neaist-2026-2027.pdf'
    });

    document.querySelectorAll('[data-onboarding-action]').forEach((link) => {
        link.href = NEAIST_ONBOARDING.formUrl;
    });
    document.querySelectorAll('[data-guide-link]').forEach((link) => {
        link.href = NEAIST_ONBOARDING.guideUrl;
    });

    // Add keyboard state to this page's existing shared mobile navigation.
    const toggle = document.getElementById('hamburger');
    const menu = document.getElementById('navMenu');
    const mobile = window.matchMedia('(max-width: 1279px)');
    const syncMenu = () => {
        const expanded = menu.classList.contains('active');
        toggle.setAttribute('aria-expanded', String(expanded));
        toggle.setAttribute('aria-label', getTranslationValue(expanded ? 'onboarding_menu_close' : 'onboarding_menu_open'));
        menu.inert = mobile.matches && !expanded;
    };
    new MutationObserver(syncMenu).observe(menu, { attributes: true, attributeFilter: ['class'] });
    mobile.addEventListener('change', syncMenu);
    window.addEventListener('languagechange', syncMenu);
    syncMenu();
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobile.matches && menu.classList.contains('active')) {
            toggle.click();
            toggle.focus();
        }
    });

    // The site's shared handlers request smooth scrolling explicitly. Respect
    // reduced motion for those interactions too, without changing other pages.
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    document.addEventListener('click', (event) => {
        const anchor = event.target.closest('a[href^="#"]');
        const backToTop = event.target.closest('#backToTop');
        if (!reducedMotion.matches && !anchor?.classList.contains('ob-skip-link')) return;
        const target = anchor && document.getElementById(anchor.hash.slice(1));
        if (!target && !backToTop) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        if (target) {
            target.scrollIntoView({ behavior: 'instant' });
            if (anchor.classList.contains('ob-skip-link')) target.focus({ preventScroll: true });
        } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, true);
})();
