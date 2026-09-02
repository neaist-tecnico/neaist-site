// Course resource grid interactions are scoped to recursos.html.
(function initCourseResourceGrid() {
    const section = document.getElementById("recursos-por-curso");
    if (!section) {
        return;
    }

    const searchInput = section.querySelector(".course-resource-search");
    const filterButtons = Array.from(section.querySelectorAll(".course-resource-filter"));
    const cards = Array.from(section.querySelectorAll(".course-area-card"));
    const status = section.querySelector(".course-resource-status");
    const emptyState = section.querySelector(".course-resource-empty");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let activeFilter = "all";

    function normalizeText(value) {
        return (value || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase();
    }

    function updateStatus(count) {
        if (!status) {
            return;
        }

        const template = status.dataset.statusTemplate || "{count} resources visible.";
        status.textContent = template.replace("{count}", count);
    }

    function updateCards() {
        const query = normalizeText(searchInput ? searchInput.value : "");
        let visibleCount = 0;

        cards.forEach((card) => {
            const categories = card.dataset.courseCategories || "";
            const matchesFilter = activeFilter === "all" || categories.split(" ").includes(activeFilter);
            const matchesSearch = !query || normalizeText(card.textContent).includes(query);
            const isVisible = matchesFilter && matchesSearch;

            card.classList.toggle("is-filtered-out", !isVisible);
            if (isVisible) {
                visibleCount += 1;
            }
        });

        if (emptyState) {
            emptyState.hidden = visibleCount !== 0;
        }

        updateStatus(visibleCount);
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            activeFilter = button.dataset.courseFilter || "all";
            filterButtons.forEach((filterButton) => {
                const isActive = filterButton === button;
                filterButton.classList.toggle("active", isActive);
                filterButton.setAttribute("aria-pressed", String(isActive));
            });
            updateCards();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", updateCards);
    }

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
        cards.forEach((card) => card.classList.add("is-revealed"));
    } else {
        const observer = new IntersectionObserver((entries, scrollObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-revealed");
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

        cards.forEach((card) => observer.observe(card));
    }

    if (finePointer.matches && !reducedMotion.matches) {
        cards.forEach((card) => {
            card.addEventListener("pointermove", (event) => {
                const bounds = card.getBoundingClientRect();
                const x = (event.clientX - bounds.left) / bounds.width - 0.5;
                const y = (event.clientY - bounds.top) / bounds.height - 0.5;

                card.style.setProperty("--card-rotate-x", `${(-y * 5).toFixed(2)}deg`);
                card.style.setProperty("--card-rotate-y", `${(x * 5).toFixed(2)}deg`);
            });

            card.addEventListener("pointerleave", () => {
                card.style.setProperty("--card-rotate-x", "0deg");
                card.style.setProperty("--card-rotate-y", "0deg");
            });
        });
    }

    window.addEventListener("languagechange", updateCards);
    updateCards();
}());
