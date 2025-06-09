
// Wait for the entire page to load before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // --- TYPING ANIMATION ---
    const subtitleElement = document.getElementById('subtitle');
    if (subtitleElement) {
        const textToType = subtitleElement.getAttribute('data-text') || subtitleElement.innerText;
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
        
        // Start the typing animation
        type();
    }


    // --- STAGGERED FADE-IN ANIMATION FOR PROJECTS ---
    const projects = document.querySelectorAll('.project');
    
    // We remove the animation from the CSS and will apply it via JS
    projects.forEach(project => {
        project.style.animation = 'none';
        project.style.opacity = '0'; // Keep them hidden initially
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Apply the animation with a delay based on its order
                entry.target.style.animation = `fadeInUp 0.8s ease forwards`;
                // Stagger the animation start time
                entry.target.style.animationDelay = `${index * 0.2}s`;
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the item is visible
    });

    projects.forEach(project => {
        observer.observe(project);
    });

});