// ===================================
// NEAIST Website - News Data & Archive
// Shared source for homepage previews and the archive page.
// ===================================

const NEWS_ITEMS = [
    {
        slug: 'study-squads-tutores-2026',
        date: '2026-05-24',
        categoryId: 'oportunidades',
        image: 'files/study-squads/study-squads-poster.png',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSeh4LVB7fIxfBD5aBc_p2V5zvk1f-D_hd54MXaNZPrn2RKCSA/viewform?usp=header',
        external: true,
        copy: {
            pt: {
                category: 'Oportunidades',
                secondaryTag: 'Académico',
                alt: 'Study Squads NEAIST — grupos de estudo com apoio de tutores',
                title: 'Candidaturas abertas para Tutores — Study Squads',
                excerpt: 'O NEAIST está a recrutar tutores para os Study Squads, uma iniciativa de grupos de estudo criada para promover a aprendizagem colaborativa, o apoio entre colegas e hábitos de estudo mais consistentes ao longo do semestre.',
                cta: 'Candidatar-me a Tutor'
            },
            en: {
                category: 'Opportunities',
                secondaryTag: 'Academic',
                alt: 'Study Squads NEAIST — study groups supported by tutors',
                title: 'Tutor Applications Open — Study Squads',
                excerpt: 'NEAIST is recruiting tutors for Study Squads, a study-group initiative created to promote collaborative learning, peer support, and more consistent study habits throughout the semester.',
                cta: 'Apply as a Tutor'
            }
        }
    },
    {
        slug: 'dia-de-africa-2026',
        date: '2026-05-27',
        homepagePriority: 2,
        categoryId: 'eventos',
        image: 'images/news/dia-de-africa-2026/group-photo.jpg',
        url: 'dia-de-africa.html',
        copy: {
            pt: {
                category: 'Eventos',
                title: 'Dia de África no Técnico',
                excerpt: 'No dia 27 de Maio, o NEAIST reuniu estudantes, convidados e comunidade académica num encontro de celebração, reflexão e partilha no Técnico Innovation Center.',
                cta: 'Ler mais'
            },
            en: {
                category: 'Events',
                title: 'Africa Day at Técnico',
                excerpt: 'On May 27, NEAIST brought together students, guests, and the academic community for a gathering of celebration, reflection, and connection at the Técnico Innovation Center.',
                cta: 'Read more'
            }
        }
    },
    {
        slug: 'recrutamento-colaboradores-2026',
        date: '2026-05-22',
        categoryId: 'oportunidades',
        image: 'images/news/collaboradores-2026.png',
        mediaFit: 'contain',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSeaPowt7ku00SvK6ykEAOBPSun59V1UjDE_cMkKSTwUMCJJ-Q/viewform?usp=header',
        external: true,
        copy: {
            pt: {
                category: 'Oportunidades',
                title: 'Recrutamento de Colaboradores 2026',
                excerpt: 'Estão abertas as inscrições para estudantes que queiram colaborar com o NEAIST.',
                cta: 'Ler mais'
            },
            en: {
                category: 'Opportunities',
                title: 'Collaborator Recruitment 2026',
                excerpt: 'Applications are open for students who want to collaborate with NEAIST.',
                cta: 'Read more'
            }
        }
    },
    {
        slug: 'semana-de-africa-ulisboa',
        date: '2026-05-25',
        homepagePriority: 1,
        categoryId: 'eventos',
        image: 'images/news/semana-de-africa-ulisboa.jpg',
        url: 'semana-africa-ulisboa.html',
        copy: {
            pt: {
                category: 'Eventos',
                secondaryTag: 'ULisboa',
                dateLabel: '25 a 30 de Maio de 2026',
                alt: 'Cartaz da Semana de África Sem Margem da Universidade de Lisboa',
                title: 'Semana de África ULisboa — Sem Margem',
                excerpt: 'A Universidade de Lisboa promoveu a Semana de África “Sem Margem”, uma iniciativa dedicada à cultura, história, pensamento, gastronomia e expressões artísticas africanas, com participação do NEAIST através do Africa Quiz Challenge.',
                cta: 'Ver destaque'
            },
            en: {
                category: 'Events',
                secondaryTag: 'ULisboa',
                dateLabel: 'May 25 to 30, 2026',
                alt: 'Poster of the Sem Margem Africa Week at the University of Lisbon',
                title: 'ULisboa Africa Week — Sem Margem',
                excerpt: 'The University of Lisbon promoted Sem Margem Africa Week, an initiative dedicated to African culture, history, thought, gastronomy, and artistic expression, with NEAIST participating through the Africa Quiz Challenge.',
                cta: 'View highlight'
            }
        }
    },
    {
        slug: 'rtp-africa-30-anos',
        date: '2026-04-12',
        categoryId: 'arquivo',
        image: 'images/news/rtp-30-years.jpeg',
        url: 'noticias.html#rtp-africa-30-anos',
        copy: {
            pt: {
                category: 'Arquivo',
                title: 'RTP África 30 Anos na Gulbenkian',
                excerpt: 'Participação do NEAIST num momento de visibilidade pública e representação estudantil ligado aos 30 anos da RTP África.',
                cta: 'Ler mais'
            },
            en: {
                category: 'Archive',
                title: 'RTP África 30 Years at Gulbenkian',
                excerpt: 'NEAIST took part in a moment of public visibility and student representation linked to RTP África’s 30th anniversary.',
                cta: 'Read more'
            }
        }
    },
    {
        slug: 'tomada-de-posse-2026',
        date: '2026-03-23',
        categoryId: 'institucional',
        image: 'images/news/tomada-posse-direcao-neaist-2026.jpeg',
        url: 'noticia-tomada-posse-2026.html',
        copy: {
            pt: {
                category: 'Institucional',
                title: 'Tomada de Posse - Mandato 2025/2026',
                excerpt: 'A 23 de Março de 2026, o NEAIST realizou a tomada de posse dos seus órgãos sociais e da equipa do mandato 2025/2026, assinalando o início de um novo ciclo de representação no Técnico.',
                cta: 'Ler mais'
            },
            en: {
                category: 'Institutional',
                title: 'Inauguration - 2025/2026 Term',
                excerpt: 'On March 23, 2026, NEAIST held the inauguration of its governing bodies and team for the 2025/2026 term, marking the start of a new cycle of representation at Técnico.',
                cta: 'Read more'
            }
        }
    },
    {
        slug: 'game-day-2026',
        date: '2026-04-23',
        categoryId: 'eventos',
        image: 'images/news/game-day-2026-poster.png',
        mediaFit: 'contain',
        url: 'noticia-game-day-2026.html',
        copy: {
            pt: {
                category: 'Eventos',
                secondaryTag: 'Comunidade',
                alt: 'Cartaz do Game Day do NEAIST com data de 23 de Abril e local C9',
                title: 'Game Day NEAIST',
                excerpt: 'No dia 23 de Abril de 2026, o NEAIST viveu uma tarde de jogos, convívio e alegria, agradecendo a todos os estudantes que tornaram esta experiência tão enriquecedora.',
                cta: 'Ler mais'
            },
            en: {
                category: 'Events',
                secondaryTag: 'Community',
                alt: 'NEAIST Game Day poster with the April 23 date and the C9 location',
                title: 'NEAIST Game Day',
                excerpt: 'On April 23, 2026, NEAIST enjoyed an afternoon of games, connection, and joy, with thanks to all the students who made it such an enriching experience.',
                cta: 'Read more'
            }
        }
    }
];

let activeNewsFilter = 'todos';

function sortNewsItems() {
    return [...NEWS_ITEMS].sort((a, b) => b.date.localeCompare(a.date));
}

function getLocalizedNewsValue(item, field) {
    const language = window.currentLanguage === 'en' ? 'en' : 'pt';
    return item.copy?.[language]?.[field] ?? item.copy?.pt?.[field] ?? item[field];
}

function formatNewsDate(dateString) {
    const locale = window.currentLanguage === 'en' ? 'en-GB' : 'pt-PT';

    return new Intl.DateTimeFormat(locale, {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(new Date(`${dateString}T12:00:00`));
}

function getNewsDateLabel(item) {
    return getLocalizedNewsValue(item, 'dateLabel') || formatNewsDate(item.date);
}

function renderNewsMedia(item) {
    if (item.image) {
        return `
            <div class="highlight-media ${item.mediaFit === 'contain' ? 'highlight-media-contain' : ''}">
                <img src="${item.image}" alt="${getLocalizedNewsValue(item, 'alt') || getLocalizedNewsValue(item, 'title')}" loading="lazy" decoding="async">
            </div>
        `;
    }

    return `
        <div class="highlight-media highlight-media-placeholder">
            <span class="placeholder-pill">${getLocalizedNewsValue(item, 'category')}</span>
            <strong>${item.placeholderLabel || 'NEAIST'}</strong>
            <p>${getLocalizedNewsValue(item, 'title')}</p>
        </div>
    `;
}

function renderNewsCard(item, showButton = true) {
    const href = item.url || `noticias.html#${item.slug}`;
    const target = item.external ? ' target="_blank" rel="noopener"' : '';
    const secondaryTag = getLocalizedNewsValue(item, 'secondaryTag');
    const category = getLocalizedNewsValue(item, 'category');
    const title = getLocalizedNewsValue(item, 'title');
    const excerpt = getLocalizedNewsValue(item, 'excerpt');
    const cta = getLocalizedNewsValue(item, 'cta');
    const tagMarkup = secondaryTag
        ? `<div class="highlight-tag-group"><span class="highlight-tag">${category}</span><span class="highlight-tag highlight-tag-secondary">${secondaryTag}</span></div>`
        : `<span class="highlight-tag">${category}</span>`;

    return `
        <article class="highlight-card ${showButton ? '' : 'highlight-card-compact'} fade-in-up" id="${item.slug}" data-category="${item.categoryId}">
            ${renderNewsMedia(item)}
            <div class="highlight-body">
                ${tagMarkup}
                <p class="news-date">${getNewsDateLabel(item)}</p>
                <h3 class="highlight-title">${title}</h3>
                <p class="highlight-description">${excerpt}</p>
                ${showButton ? `<a class="news-card-link" href="${href}"${target}>${cta || (window.currentLanguage === 'en' ? 'Read more' : 'Ler mais')}</a>` : ''}
            </div>
        </article>
    `;
}

function renderHomepageNews() {
    const homeContainer = document.getElementById('homeNewsPreview');

    if (!homeContainer) {
        return;
    }

    const items = [...sortNewsItems()]
        .sort((a, b) => (b.homepagePriority || 0) - (a.homepagePriority || 0) || b.date.localeCompare(a.date))
        .slice(0, 3);
    homeContainer.innerHTML = items.map((item, index) => {
        const markup = renderNewsCard(item, true);
        return markup.replace('fade-in-up', `fade-in-up${index ? ` delay-${index}` : ''}`);
    }).join('');
}

function renderArchiveNews() {
    const archiveContainer = document.getElementById('newsArchive');

    if (!archiveContainer) {
        return;
    }

    const items = sortNewsItems().filter((item) => {
        return activeNewsFilter === 'todos' || item.categoryId === activeNewsFilter;
    });

    archiveContainer.innerHTML = items.map((item, index) => {
        const markup = renderNewsCard(item, true);
        return markup.replace('fade-in-up', `fade-in-up${index % 3 ? ` delay-${index % 3}` : ''}`);
    }).join('');
}

function initNewsFilters() {
    const filterButtons = document.querySelectorAll('.news-filter-btn');

    if (!filterButtons.length) {
        return;
    }

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            activeNewsFilter = button.getAttribute('data-filter') || 'todos';

            filterButtons.forEach((item) => item.classList.remove('active'));
            button.classList.add('active');
            renderArchiveNews();
        });
    });
}

function renderNewsSections() {
    renderHomepageNews();
    renderArchiveNews();
}

window.renderNewsSections = renderNewsSections;

document.addEventListener('DOMContentLoaded', () => {
    renderNewsSections();
    initNewsFilters();
});
