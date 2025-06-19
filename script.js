// --- MAIN DOCUMENT READY LISTENER ---
document.addEventListener('DOMContentLoaded', function() {

    // --- VANTA.JS HALO ANIMATION ---
    // Make sure to include three.js and vanta.halo.min.js in your HTML
    if (window.VANTA) {
        VANTA.HALO({
            el: "header",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            baseColor: 0x0d1117, // Corresponds to CSS var(--bg-color)
            backgroundColor: 0x0d1117, // Corresponds to CSS var(--bg-color)
            amplitudeFactor: 1.20,
            xOffset: 0.20,
            yOffset: 0.10,
            size: 1.20
        });
    }

    // --- SCROLL TO TOP BUTTON ---
    const scrollTopBtn = document.getElementById('scroll-to-top');
    if (scrollTopBtn) {
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
    }

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
    const subtitleElement = document.getElementById('subtitle');
    if (subtitleElement) {
        const textToType = subtitleElement.innerText;
        const typingSpeed = 100;
        let charIndex = 0;
        subtitleElement.innerText = '';
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        const parent = subtitleElement.parentElement;
        if(parent) {
            parent.insertBefore(cursor, subtitleElement.nextSibling);
        }

        function type() {
            if (charIndex < textToType.length) {
                subtitleElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            }
        }
        setTimeout(type, 500);
    }
    const audioData = "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3";

const playBtn = document.getElementById('play-button');
const pauseBtn = document.getElementById('pause-button');

if (playBtn && pauseBtn) {
    let audio = new Audio(audioData);
    audio.loop = true;

    playBtn.addEventListener('click', () => {
        audio.play().then(() => {
            playBtn.classList.add('hidden');
            pauseBtn.classList.remove('hidden');
        }).catch(e => console.error("Playback error:", e));
    });

    pauseBtn.addEventListener('click', () => {
        audio.pause();
        pauseBtn.classList.add('hidden');
        playBtn.classList.remove('hidden');
    });
}

});
