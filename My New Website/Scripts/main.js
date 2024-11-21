// main.js
document.addEventListener('DOMContentLoaded', () => {

    // Initialize animations
    blink(eyes);

    document.addEventListener('click', (event) => {
        if (isDizzy) {
            event.stopPropagation();
            event.preventDefault();
            eyes.forEach(eye => {
                eye.style.display = 'none'; // Ensure the eyes remain hidden during dizzy state
            });
        }
    });


    // Event listeners for interactions
    character.addEventListener('click', () => {
        triggerWavingAnimation();
        scrollToTop();
    });

    // Event listeners for menu buttons hover
    menuButtons.profile.addEventListener('mouseenter', () => moveCharacterToButton(menuButtons.profile));
    menuButtons.skills.addEventListener('mouseenter', () => moveCharacterToButton(menuButtons.skills));
    menuButtons.projects.addEventListener('mouseenter', () => moveCharacterToButton(menuButtons.projects));
    menuButtons.contact.addEventListener('mouseenter', () => moveCharacterToButton(menuButtons.contact));

    

    // Adding event listeners to each button
    menuButtons.profile.addEventListener('click', () => scrollToSection(sectionsIDs.profileSection));
    menuButtons.skills.addEventListener('click', () => scrollToSection(sectionsIDs.skillsSection));
    menuButtons.projects.addEventListener('click', () => scrollToSection(sectionsIDs.projectsSection));
    menuButtons.contact.addEventListener('click', () => scrollToSection(sectionsIDs.contactSection));

    


    document.addEventListener('scroll', () => {
 
        const scrollY = window.scrollY;
        
    
        // Adjust the speed factor to control the movement speed of the background
        const speedFactor = 0.5;
        const rotationAngle = scrollY * speedFactor;
        // Calculate the new background position
        const backgroundPositionX = -scrollY * speedFactor;
    
        // Update the background position
        chainContainer.style.backgroundPositionX = `${backgroundPositionX}px`;
        gears.forEach(div => {
            div.style.transform = `rotate(${rotationAngle}deg)`;
        });
        
    });
    // Other main logic, event listeners, and initialization
});
