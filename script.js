// Scroll animations using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Initial items to observe
    const elementsToAnimate = document.querySelectorAll('.hero-content, .hero-image, .section-header, .about-grid, .training-grid, .skills-wrapper, .projects-grid, .contact-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('animate-ready'); // Setup initial state
        observer.observe(el);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
