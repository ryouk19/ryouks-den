document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 50) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    };
    document.getElementById('go-to-openings').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('openings').scrollIntoView({ behavior: 'smooth' });
    });
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
    });
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});