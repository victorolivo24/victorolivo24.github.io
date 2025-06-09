// Wait for the entire page to load before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // --- TYPING ANIMATION ---
    const subtitleElement = document.getElementById('subtitle');
    if (subtitleElement) {
        const textToType = subtitleElement.innerText;
        const typingSpeed = 100; // Milliseconds per character
        let charIndex = 0;

        // Clear the original text and add the cursor
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
        
        // Start the typing animation after a brief delay
        setTimeout(type, 500);
    }

    // --- UNIVERSAL FADE-IN ANIMATION ON SCROLL ---
    // This function will handle any elements we want to fade in
    const animateOnScroll = (selector) => {
        const elements = document.querySelectorAll(selector);
        
        // Hide elements initially
        elements.forEach(el => {
            el.style.opacity = '0';
        });

        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Apply the animation with a staggered delay
                    entry.target.style.animation = `fadeInUp 0.8s ease forwards`;
                    entry.target.style.animationDelay = `${index * 0.2}s`;
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the item is visible
        });

        elements.forEach(el => {
            observer.observe(el);
        });
    };

    // Apply the animation to project cards and timeline items
    animateOnScroll('.project');
    animateOnScroll('.timeline-item');

});
