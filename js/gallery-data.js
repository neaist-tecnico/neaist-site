const GALLERY_IMAGES = [
    "images/gallery/Dia de Africa Agenda.png",
    "images/gallery/NEA Tote Bag.jpeg",
    "images/gallery/NEA bottle.jpeg",
    "images/gallery/NEA cap.jpeg",
    "images/gallery/NEA collaboradores.png",
    "images/gallery/RTP 30 Years.jpeg",
    "images/gallery/RTP conversa.jpeg",
    "images/gallery/Sem Margem - Semana de Africa ULisboa.jpg",
    "images/gallery/wp-legacy/272389698_304326381747946_4525075536510278058_n.jpg",
    "images/gallery/wp-legacy/Capa.jpg",
    "images/gallery/wp-legacy/Direcao-2122.jpg",
    "images/gallery/wp-legacy/Interior-Brochura.jpg",
    "images/gallery/wp-legacy/LetsTalk_fblinked_post.png",
    "images/gallery/wp-legacy/WhatsApp-Image-2025-03-27-at-01.26.07_ed565588-1.jpg",
    "images/gallery/wp-legacy/banner1-1.jpg",
    "images/gallery/wp-legacy/banner4.jpg",
    "images/gallery/wp-legacy/jantar.jpg",
    "images/gallery/wp-legacy/jogo.jpg",
    "images/gallery/wp-legacy/mentimg1-1.jpg",
    "images/gallery/wp-legacy/mentimg2.jpg",
    "images/gallery/wp-legacy/mentimg3.jpg",
    "images/gallery/wp-legacy/mentimg4.jpg",
    "images/gallery/wp-legacy/s1.png",
    "images/gallery/wp-legacy/s2.png",
    "images/gallery/wp-legacy/sessao-3.png",
    "images/gallery/wp-legacy/sessao-5.png",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.18 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.18.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.19 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.19.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.20 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.20.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.21 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.21.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.22 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.22.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.23.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.24.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.25.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.27 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.27.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.28 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.28 (2).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.28.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.29 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.29.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.30 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.30.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.32.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.35.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.37.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.39.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.42.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.46.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.49 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.49.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.50 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.50 (2).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.50 (3).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.50 (4).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.50 (5).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.50.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.51 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.51 (2).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.51 (3).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.51 (4).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.51 (5).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.51 (6).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.51.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.52 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.52 (2).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.52 (3).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.52 (4).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.52 (5).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.52.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.53 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.53 (2).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.53 (3).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.53 (4).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.53 (5).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.53 (6).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.53 (7).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.53.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.54 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.54 (2).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.54 (3).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.54 (4).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.54 (5).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.54 (6).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.54.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.55 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.55 (2).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.55 (3).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.55 (4).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.55 (5).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.55 (6).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.55 (7).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.55.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.56 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.56 (2).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.56 (3).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.56 (4).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.56 (5).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.56.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.57 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.57 (2).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.57 (3).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.57 (4).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.57.jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.58 (1).jpeg",
    "images/gallery/WhatsApp Image 2026-05-23 at 18.35.58.jpeg"
];

function renderGallery() {
    const galleryGrid = document.getElementById("galleryGrid");
    const galleryCount = document.getElementById("galleryCount");
    const isEnglish = window.currentLanguage === "en";

    if (!galleryGrid) {
        return;
    }

    if (galleryCount) {
        galleryCount.textContent = `${GALLERY_IMAGES.length} ${isEnglish ? "images" : "imagens"}`;
    }

    galleryGrid.innerHTML = GALLERY_IMAGES.map((imagePath, index) => {
        const fileName = imagePath.split("/").pop().replace(/\.[^.]+$/, "");
        const altText = fileName.replace(/[-_]/g, " ");

        return `
            <a class="gallery-item fade-in-up" href="${imagePath}" target="_blank" rel="noopener" aria-label="${isEnglish ? "Open image" : "Abrir imagem"} ${index + 1}">
                <img src="${imagePath}" alt="${altText}" loading="lazy">
            </a>
        `;
    }).join("");
}

window.renderGallery = renderGallery;
document.addEventListener("DOMContentLoaded", renderGallery);
