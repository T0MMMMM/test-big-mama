document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. CONFIGURATION & DONNÉES --- */
    const projects = window.projectDataGlobal || [
        { id: '01', title: "Rénovation Urbaine - Lyon", image: 'assets/images/projet_3.jpg' },
        { id: '02', title: "Identité Visuelle - Studio", image: 'assets/images/projet_7.jpg' },
        { id: '03', title: "Application Mobile - Sport", image: 'assets/images/projet_8.jpg' },
        { id: '04', title: "Architecture - Loft", image: 'assets/images/projet_4.jpg' },
        { id: '05', title: "Scénographie - Musée d'Art", image: 'assets/images/projet_2.jpg' },
        { id: '06', title: "Packaging - Cosmétique Bio", image: 'assets/images/projet_6.jpg' },
        { id: '07', title: "Webdesign - E-Commerce", image: 'assets/images/projet_5.jpg' },
        { id: '08', title: "Design d'Espace - Villa", image: 'assets/images/projet_1.jpg' },
        { id: '09', title: "Branding - Start-up Tech", image: 'assets/images/projet_3.jpg' },
        { id: '10', title: "Motion Design - Publicité TV", image: 'assets/images/projet_7.jpg' },
        { id: '11', title: "Print - Festival de Jazz", image: 'assets/images/projet_8.jpg' },
        { id: '12', title: "UX/UI - Dashboard Finance", image: 'assets/images/projet_4.jpg' },
    ];

    const DEFAULT_TITLE_HTML = "Titre du <span>projet</span> affiché au passage de la souris";
    const ANIMATION_DELAY_MS = 150;

    /* --- 2. ÉLÉMENTS DU DOM --- */
    const gridElement = document.getElementById('js-projects-grid');
    const projectTitleElement = document.getElementById('js-project-title');
    const projectUnderlineElement = document.getElementById('js-project-title-underline');

    /* --- 3. LOGIQUE PRINCIPALE --- */

    // Met à jour le soulignement pour qu'il soit légèrement plus large que le texte
    function updateUnderlineStyle() {
        if (!projectTitleElement || !projectUnderlineElement) return;

        const UNDERLINE_OVERFLOW = 15 * 2; // Débordement total en pixels (15px de chaque côté)
        const titleWidth = projectTitleElement.scrollWidth + UNDERLINE_OVERFLOW;
        const containerWidth = projectUnderlineElement.offsetWidth;

        const clipPercent = ((containerWidth - titleWidth) / containerWidth) * 50;
        const clipValue = Math.max(0, clipPercent);

        projectUnderlineElement.style.clipPath = `inset(0 ${clipValue}% 0 ${clipValue}%)`;
    }

    // Anime le changement du texte du titre en pied de page
    function animateTitleChange(newHTML) {
        if (!projectTitleElement) return;

        projectTitleElement.style.opacity = '0';

        setTimeout(() => {
            projectTitleElement.innerHTML = newHTML;
            projectTitleElement.style.opacity = '1';
            updateUnderlineStyle();
        }, ANIMATION_DELAY_MS);
    }

    // Crée la structure DOM pour une carte de projet
    function createCardElement(project) {
        const card = document.createElement('article');
        card.classList.add('project-card');

        card.innerHTML = `
            <div class="project-card__wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-card__image">
                <div class="project-card__cta">Voir le projet</div>
                <img src="assets/icons/outline.png" alt="" class="project-card__border" aria-hidden="true">
            </div>
        `;

        card.addEventListener('mouseenter', () => {
            animateTitleChange(`<span>${project.title}</span>`);
        });

        card.addEventListener('mouseleave', () => {
            animateTitleChange(DEFAULT_TITLE_HTML);
        });

        return card;
    }

    /* --- 4. INITIALISATION --- */
    function init() {
        if (!gridElement) {
            console.error('Grid element not found');
            return;
        }

        const fragment = document.createDocumentFragment();

        projects.forEach(project => {
            const cardElement = createCardElement(project);
            fragment.appendChild(cardElement);
        });

        gridElement.appendChild(fragment);

        // Met à jour le soulignement au redimensionnement pour qu'il reste aligné avec le texte
        window.addEventListener('resize', updateUnderlineStyle);
        updateUnderlineStyle();
    }

    init();
});
