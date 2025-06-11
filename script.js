document.addEventListener('DOMContentLoaded', function() {

    // --- PARTICLE.JS INITIALIZATION ---
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });
    }

    // --- STICKY NAVIGATION ---
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const stickyPoint = header.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > stickyPoint) {
            nav.classList.add('nav-sticky');
        } else {
            nav.classList.remove('nav-sticky');
        }
    });

    // --- SCROLL TO TOP BUTTON ---
    const scrollTopBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- UNIVERSAL FADE-IN ANIMATION ON SCROLL ---
    const animateOnScroll = (selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => { el.style.opacity = '0'; });
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = `fadeInUp 0.8s ease forwards ${index * 0.2}s`;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        elements.forEach(el => { observer.observe(el); });
    };
    animateOnScroll('.project');
    animateOnScroll('.timeline-item');
    
    // --- TYPING ANIMATION ---
    // (This part remains the same)
    const subtitleElement = document.getElementById('subtitle');
    if (subtitleElement) {
        const textToType = subtitleElement.innerText;
        const typingSpeed = 100;
        let charIndex = 0;
        subtitleElement.innerText = '';
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        subtitleElement.parentNode.insertBefore(cursor, subtitleElement.nextSibling);

        function type() {
            if (charIndex < textToType.length) {
                subtitleElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            }
        }
        setTimeout(type, 500);
    }
});
