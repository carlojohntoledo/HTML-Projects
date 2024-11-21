// charactertomenubuttons.js


// Function to smoothly move character towards hovered menu button
function moveCharacterToButton(buttonElement) {
    const buttonRect = buttonElement.getBoundingClientRect();
    // const characterRect = character.getBoundingClientRect();

    // Calculate the distance to move the character
    const deltaX = buttonRect.left - 350;

    // Apply smooth transition to character movement
    character.style.transition = 'transform 0.75s ease-out';
    character.style.transform = `translate(${deltaX}px`;

    // Check if it's nighttime and update character head and background
    if (body.classList.contains('night')) {
        // Update character head image
        resetCharacterAndBackground();
    }
    else
    {
        resetCharacterAndBackground();
    }
}



function resetCharacterAndBackground() {

    const headElement = document.getElementById('sleepyhead');
    const floatZsElement = document.getElementById('floatingZs')
    headElement.style.backgroundImage = 'url("Images/koaloDizzyState.png")';
    floatZsElement.style.backgroundImage = "none"
    floatZsElement.style.animation = "none";
    headElement.style.animation = "none";

    menuButtons.profile.addEventListener('mouseleave', () => {
        triggerSleepAnimation()
    });

    menuButtons.skills.addEventListener('mouseleave', () => {
        triggerSleepAnimation()
    });
    menuButtons.projects.addEventListener('mouseleave', () => {
        triggerSleepAnimation()
    });
    menuButtons.contact.addEventListener('mouseleave', () => {
        triggerSleepAnimation()
    });
}