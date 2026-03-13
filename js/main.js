document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Toggle icon if needed (lucide update)
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                const isExpanded = navMenu.classList.contains('active');
                icon.setAttribute('data-lucide', isExpanded ? 'x' : 'menu');
                lucide.createIcons();
            }
        });
    }

    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
