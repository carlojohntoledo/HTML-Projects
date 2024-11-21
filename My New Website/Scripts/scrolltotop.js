// Scroll to top of the page smoothly
// Implement scroll to top logic
var toppest = false;
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });


    // Check scroll position after a delay
    const checkScrollPosition = setInterval(() => {
        
        if (window.scrollY === 0) {
            clearInterval(checkScrollPosition);
            toppest = true;
            if (toppest) {
                character.style.transform = `translateY(0px)`;
                character.style.transition = 'transform 0.3s ease'; // Ensure the transition is applied
            }
            console.log("top = " + toppest);
        }
    
    }, 200); // Check every 100ms
}

// Function to scroll to a specific section
function scrollToSection(section) {
    section.scrollIntoView({ behavior: 'smooth' });
}
