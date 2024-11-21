document.addEventListener('DOMContentLoaded', () => {
    const head = document.getElementById('head');
    const eyes = document.querySelectorAll('.eye');
    const trackingArea = document.getElementById('tracking-area');
    const trackingFixedArea = document.getElementById('fixed-container')
    const character = document.getElementById('character');
    const leftArm = document.getElementById('left-arm');
    const sky = document.getElementById('sky');
    const skyContainer = document.getElementById('sky-container');
    const treeBackground = document.querySelector('.tree-background');
    const landScape = document.querySelector('.landscape');
    const sections = document.querySelectorAll('.main');
    const body = document.body;
    const floatingZs = document.querySelectorAll('.floating-zs');
    const menuButtons = {
        profile: document.getElementById('profile'),
        skills: document.getElementById('skills'),
        projects: document.getElementById('projects'),
        contact: document.getElementById('contact')
    };
    const sectionsIDs = {
        profileSection: document.getElementById('profile-section'),
        skillsSection: document.getElementById('skills-section'),
        projectsSection: document.getElementById('projects-section'),
        contactSection: document.getElementById('contact-section')
    };

    let isDragging = false;
    let startX;
    let initialRotation = 0;
    
    let isDizzy = false;
    let dizzyTimeout;

    let previousPositions = [];
    const maxPositions = 50; // Maximum positions to track
    let fullCircles = 0; // Count of full circles
    const requiredCircles = 5; // Number of circles required to make character dizzy

    document.addEventListener('click', (event) => {
        if (isDizzy) {
            event.stopPropagation();
            event.preventDefault();
            eyes.forEach(eye => {
                eye.style.display = 'none'; // Ensure the eyes remain hidden during dizzy state
            });
        }
    });
  


        // Function to scroll to a specific section
    function scrollToSection(section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }

    // Adding event listeners to each button
    menuButtons.profile.addEventListener('click', () => scrollToSection(sectionsIDs.profileSection));
    menuButtons.skills.addEventListener('click', () => scrollToSection(sectionsIDs.skillsSection));
    menuButtons.projects.addEventListener('click', () => scrollToSection(sectionsIDs.projectsSection));
    menuButtons.contact.addEventListener('click', () => scrollToSection(sectionsIDs.contactSection));


    // Utility function to get a random integer between min and max
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Blinking function
    function blink() {
        eyes.forEach(eye => {
            const eyelid = eye.querySelector('.eyelid');
            eyelid.style.transform = 'scaleY(1)';
            setTimeout(() => {
                eyelid.style.transform = 'scaleY(0)';
            }, 200); // Duration of the blink animation
        });
        setTimeout(blink, getRandomInt(100, 5000)); // Random interval between blinks
    }

    setTimeout(blink, getRandomInt(100, 6000)); // Start the blinking

    // Handle mouse movement to track and animate the character
    function handleMouseMove(event) {
        // Track cursor positions
        if (isDizzy) return;
        previousPositions.push({ x: event.clientX, y: event.clientY });
        if (previousPositions.length > maxPositions) {
            previousPositions.shift();
        }

        // Check if a full circle is made
        if (previousPositions.length === maxPositions) {
            const first = previousPositions[0];
            const last = previousPositions[previousPositions.length - 10];
            const distance = Math.hypot(last.x - first.x, last.y - first.y);
            if (distance <= 100) { // Adjust threshold for circle detection
                fullCircles += 1;
                previousPositions = []; // Reset positions
            }
        }

        // Trigger dizzy motion if required full circles are detected
        if (fullCircles >= requiredCircles) {
            triggerDizzyMotion();
            fullCircles = 0; // Reset full circles count
        }

        // Regular head and eyes follow logic if it's daytime
        if (!body.classList.contains('night')) {
            const viewportWidth = window.innerWidth;
            const headRect = head.getBoundingClientRect();
            const headCenterX = headRect.left + headRect.width / 2;
            const headCenterY = headRect.top + headRect.height / 2;
            const deltaX = event.clientX - headCenterX;
            const deltaY = event.clientY - headCenterY;
            const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

            let rotationAmount = (event.clientX > viewportWidth / 2) ? angle / 50 : -angle / 50;
            head.style.transform = `rotate(${rotationAmount}deg)`;

            eyes.forEach(eye => {
                const pupil = eye.querySelector('.pupil');
                const eyeRect = eye.getBoundingClientRect();
                const eyeCenterX = eyeRect.left + eyeRect.width / 2;
                const eyeCenterY = eyeRect.top + eyeRect.height / 2;
                const pupilAngle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
                const pupilX = (eyeRect.width / 5) * Math.cos(pupilAngle);
                const pupilY = (eyeRect.height / 5) * Math.sin(pupilAngle);
                pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
            });
        }
    }

    // Trigger dizzy motion animation
    function triggerDizzyMotion() {
        if (!body.classList.contains('night') && !isDizzy) {
            isDizzy = true;
            head.classList.add('dizzy');
            eyes.forEach(eye => {
                eye.style.display = 'none'; // Hide the eyes during dizzy state
            });
            dizzyTimeout = setTimeout(() => {
                head.classList.remove('dizzy');
                eyes.forEach(eye => {
                    eye.style.display = 'flex'; // Show the eyes after dizzy state
                });
                isDizzy = false;
            }, 5000); // Duration of the dizzy animation
        }
    }

    // Handle mouse click to prevent changing the eye display state during dizzy
    document.addEventListener('click', (event) => {
        if (isDizzy) {
            event.stopPropagation();
            event.preventDefault();
        }
    });

    // Handle mouse enter event
    function handleMouseEnter() {
        if (isDizzy) return;
        if (!body.classList.contains('night')) {
            const trackingAreaRect = trackingArea.getBoundingClientRect();
            if (trackingAreaRect.top < 0) {
                character.style.transform = `translateY(100px)`;
            } else {
                character.style.transform = `translateY(0px)`;
            }
        }
        else {
            character.style.transform = `translateY(100px)`;
        }
    }

    // Handle mouse leave event
    function handleMouseLeave() {
        if (isDizzy) return;
        if (!body.classList.contains('night')) {
            const trackingAreaRect = trackingArea.getBoundingClientRect();
            head.style.transform = `rotate(0deg)`;
            eyes.forEach(eye => {
                const pupil = eye.querySelector('.pupil');
                pupil.style.transform = `translate(0, 0)`;
            });

            if (trackingAreaRect.top >= 0) {
                character.style.transform = `translateY(0px)`;
            } else {
                character.style.transform = `translateY(130px)`;
            }
        }
        else {
            character.style.transform = `translateY(100px)`;
        }
        
    }

    // Scroll to top of the page smoothly
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
            console.log(toppest);
        }
    
    }, 200); // Check every 100ms
}

    // Trigger waving animation on character click
    function triggerWavingAnimation() {
        if (!body.classList.contains('night')) {
            clearTimeout(dizzyTimeout); // Stop dizzy animation if active
            head.classList.remove('dizzy'); // Ensure the dizzy class is removed
            character.classList.add('waving');
            setTimeout(() => {
                character.classList.remove('waving');
            }, 5000); // Duration of the waving animation
        }

        if (body.classList.contains('dizzy')) {
            clearTimeout(dizzyTimeout); // Stop dizzy animation if active
            head.classList.remove('dizzy'); // Ensure the dizzy class is removed
            character.classList.add('waving');
            setTimeout(() => {
                character.classList.remove('waving');
            }, 5000); // Duration of the waving animation
        }
    }
    

    // Apply random swing animation to an element
    function applyRandomSwingAnimation(element, baseDuration) {
        const randomDuration = getRandomInt(baseDuration - 1, baseDuration + 1);
        const randomDelay = getRandomInt(-0.5, 0.5);
        element.style.animationDuration = `${randomDuration}s`;
        element.style.animationDelay = `${randomDelay}s`;
    }

    // Event listeners
    character.addEventListener('click', triggerWavingAnimation);
    character.addEventListener('click', scrollToTop);
    trackingArea.addEventListener('mousemove', handleMouseMove);
    trackingArea.addEventListener('mouseenter', handleMouseEnter);
    trackingArea.addEventListener('mouseleave', handleMouseLeave);

    // Apply animations to elements
    applyRandomSwingAnimation(document.getElementById('back-leaves'), 4);
    applyRandomSwingAnimation(document.getElementById('front-leaves'), 3);

    // Event listeners for mouse down, move, and up on tracking area
    trackingFixedArea.addEventListener('mousedown', (event) => {
        isDragging = true;
        startX = event.clientX;
        initialRotation = getRotationDegrees(sky);
        sky.style.transition = 'none'; // Disable transition during drag
    });

    document.addEventListener('mousemove', (event) => {
        if (!isDragging) return;
        const deltaX = event.clientX - startX;

        // Only allow clockwise rotation
        if (deltaX >= 0) {
            const rotation = initialRotation + deltaX;
            sky.style.transform = `rotate(${rotation}deg)`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        sky.style.transition = 'transform 0.5s ease'; // Enable transition for snapping

        const rotation = getRotationDegrees(sky);
        const snappedRotation = snapToNearestPosition(rotation);
        sky.style.transform = `rotate(${snappedRotation}deg)`;

        // Change background color based on snapped rotation
        if (snappedRotation === 0 || snappedRotation === 360) {
            body.style.backgroundColor = '#82CAFF'; // Sunny day color
            treeBackground.style.filter = "brightness(100%)";
            body.style.color = '#000000';
            landScape.style.filter = "brightness(100%)";
            sections.forEach(section => {
                section.style.backgroundColor = '#F5F5F5'; // Light section background for sunny day
            });
            enableDayTime(); // Enable daytime mode
        } else {
            body.style.backgroundColor = '#0C090A'; // Night time color
            body.style.color = '#FFFFFF';
            treeBackground.style.filter = "brightness(50%)";
            landScape.style.filter = "brightness(30%)";
            sections.forEach(section => {
                section.style.backgroundColor = '#4D4D4F'; // Dark section background for night time
            });
            enableNightTime(); // Enable nighttime mode
        }
    });

    // Function to snap rotation to nearest sunny or night time position
    function snapToNearestPosition(rotation) {
        const sunnyDayRotation = 360;
        const nightTimeRotation = 180;

        // Normalize current rotation angle to [0, 360) degrees
        const normalizedRotation = normalizeAngle(rotation);

        // Calculate distances to sunny day and night time positions
        const distanceToSunnyDay = Math.abs(normalizeAngle(sunnyDayRotation - normalizedRotation));
        const distanceToNightTime = Math.abs(normalizeAngle(nightTimeRotation - normalizedRotation));

        // Determine snap rotation based on minimum distance
        let snappedRotation;
        if (distanceToSunnyDay <= distanceToNightTime) {
            snappedRotation = sunnyDayRotation;
        } else {
            snappedRotation = nightTimeRotation;
        }

        return snappedRotation;
    }

    // Normalize angle to be within [0, 360) degrees
    function normalizeAngle(angle) {
        return (angle % 0 + 0) % 0;
    }

    // Utility function to get rotation in degrees
    function getRotationDegrees(element) {
        const style = window.getComputedStyle(element);
        const matrix = style.transform || style.webkitTransform || style.mozTransform;
        if (matrix === 'none') return 0;
        const values = matrix.split('(')[1].split(')')[0].split(',');
        const a = values[0];
        const b = values[1];
        const radians = Math.atan2(b, a);
        return radians * (180 / Math.PI);
    }

    // Enable daytime mode
    function enableDayTime() {
        body.classList.remove('night'); // Remove night class
        head.style.display = 'flex'; // Show character
        character.style.transform = 'translateY(0px)';
        character.querySelector('.sleepyhead').style.display = 'none'; // Hide sleepyhead
        eyes.forEach(eye => eye.style.display = 'flex'); // Show eyes
        trackingArea.addEventListener('mousemove', handleMouseMove); // Enable mouse tracking
        trackingArea.addEventListener('mouseenter', handleMouseEnter);
        trackingArea.addEventListener('mouseleave', handleMouseLeave);
    }

    // Enable nighttime mode
    function enableNightTime() {
        body.classList.add('night'); // Add night class
        head.style.display = 'none'; // Hide character
        character.classList.remove('waving');
        character.style.transform = 'translateY(100px)';
        character.querySelector('.sleepyhead').style.display = 'flex'; // Show sleepyhead
        eyes.forEach(eye => eye.style.display = 'none'); // Hide eyes
        trackingArea.addEventListener('mousemove', handleMouseMove); // Disable mouse tracking
        trackingArea.addEventListener('mouseenter', handleMouseEnter);
        trackingArea.addEventListener('mouseleave', handleMouseLeave);
    }

    // Initial setup based on time of day (for demo purposes, assume it starts as daytime)
    enableDayTime();

    // Event listeners
    character.addEventListener('click', triggerWavingAnimation);
    character.addEventListener('click', scrollToTop);
    trackingArea.addEventListener('mousemove', handleMouseMove);
    trackingArea.addEventListener('mouseenter', handleMouseEnter);
    trackingArea.addEventListener('mouseleave', handleMouseLeave);

    // Apply animations to elements
    applyRandomSwingAnimation(document.getElementById('back-leaves'), 4);
    applyRandomSwingAnimation(document.getElementById('front-leaves'), 3);

    // Event listeners for mouse down, move, and up on tracking area
    trackingFixedArea.addEventListener('mousedown', (event) => {
        isDragging = true;
        startX = event.clientX;
        initialRotation = getRotationDegrees(sky);
        sky.style.transition = 'none'; // Disable transition during drag
    });

    document.addEventListener('mousemove', (event) => {
        if (!isDragging) return;
        const deltaX = event.clientX - startX;

        // Only allow clockwise rotation
        if (deltaX >= 0) {
            const rotation = initialRotation + deltaX;
            sky.style.transform = `rotate(${rotation}deg)`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        sky.style.transition = 'transform 0.5s ease'; // Enable transition for snapping

        const rotation = getRotationDegrees(sky);
        const snappedRotation = snapToNearestPosition(rotation);
        sky.style.transform = `rotate(${snappedRotation}deg)`;

        // Change background color based on snapped rotation
        if (snappedRotation === 0 || snappedRotation === 360) {
            body.style.backgroundColor = '#82CAFF'; // Sunny day color
            treeBackground.style.filter = "brightness(100%)";
            landScape.style.filter = "brightness(100%)";
            sections.forEach(section => {
                section.style.backgroundColor = '#F5F5F5'; // Light section background for sunny day
            });
            enableDayTime(); // Enable daytime mode
        } else {
            body.style.backgroundColor = '#0C090A'; // Night time color
            treeBackground.style.filter = "brightness(50%)";
            landScape.style.filter = "brightness(30%)";
            sections.forEach(section => {
                section.style.backgroundColor = '#4D4D4F'; // Dark section background for night time
            });
            enableNightTime(); // Enable nighttime mode
        }
    });

    // Function to snap rotation to nearest sunny or night time position
    function snapToNearestPosition(rotation) {
        const sunnyDayRotation = 360;
        const nightTimeRotation = 180;

        // Normalize current rotation angle to [0, 360) degrees
        const normalizedRotation = normalizeAngle(rotation);

        // Calculate distances to sunny day and night time positions
        const distanceToSunnyDay = Math.abs(normalizeAngle(sunnyDayRotation - normalizedRotation));
        const distanceToNightTime = Math.abs(normalizeAngle(nightTimeRotation - normalizedRotation));

        // Determine snap rotation based on minimum distance
        let snappedRotation;
        if (distanceToSunnyDay <= distanceToNightTime) {
            snappedRotation = sunnyDayRotation;
        } else {
            snappedRotation = nightTimeRotation;
        }

        return snappedRotation;
    }

    // Normalize angle to be within [0, 360) degrees
    function normalizeAngle(angle) {
        return (angle % 360 + 360) % 360;
    }

    // Utility function to get rotation in degrees
    function getRotationDegrees(element) {
        const style = window.getComputedStyle(element);
        const matrix = style.transform || style.webkitTransform || style.mozTransform;
        if (matrix === 'none') return 0;
        const values = matrix.split('(')[1].split(')')[0].split(',');
        const a = values[0];
        const b = values[1];
        const radians = Math.atan2(b, a);
        return radians * (180 / Math.PI);
    }

// Function to smoothly move character towards hovered menu button
function moveCharacterToButton(buttonElement) {
    const buttonRect = buttonElement.getBoundingClientRect();
    const characterRect = character.getBoundingClientRect();

    // Calculate the distance to move the character
    const deltaX = buttonRect.left - 350;

    // Apply smooth transition to character movement
    character.style.transition = 'transform 0.75s ease-out';
    character.style.transform = `translate(${deltaX}px`;

    // Check if it's nighttime and update character head and background
    if (body.classList.contains('night')) {
        // Update character head image
        const headElement = document.getElementById('sleepyhead');
        const floatZsElement = document.getElementById('floatingZs')
        headElement.style.backgroundImage = 'url("Images/koaloDizzyState.png")';
        floatZsElement.style.backgroundImage = "none"
        floatZsElement.style.animation = "none";
        headElement.style.animation = "none";

        menuButtons.profile.addEventListener('mouseleave', () => {
            character.style.transition = 'transform 0.3s ease';
            character.style.transform = `translate(0px, 100px)`; // Reset character position
        
            // Reset character head image
            headElement.style.animation = "sleeping 2s infinite";
            headElement.style.backgroundImage = '';
            floatZsElement.style.backgroundImage = '';
            floatZsElement.style.animation = "floatZs 2s infinite ease-in-out";
        
            // Reset background image
            body.style.backgroundImage = '';
        });
        // Update background image
        
        menuButtons.skills.addEventListener('mouseleave', () => {
            character.style.transition = 'transform 0.3s ease';
            character.style.transform = `translate(0px, 100px)`; // Reset character position
        
            // Reset character head image
            headElement.style.animation = "sleeping 2s infinite";
            headElement.style.backgroundImage = '';
            floatZsElement.style.backgroundImage = '';
            floatZsElement.style.animation = "floatZs 2s infinite ease-in-out";
        
            // Reset background image
            body.style.backgroundImage = '';
        });
        menuButtons.projects.addEventListener('mouseleave', () => {
            character.style.transition = 'transform 0.3s ease';
            character.style.transform = `translate(0px, 100px)`; // Reset character position
        
            // Reset character head image
            headElement.style.animation = "sleeping 2s infinite";
            headElement.style.backgroundImage = '';
            floatZsElement.style.backgroundImage = '';
            floatZsElement.style.animation = "floatZs 2s infinite ease-in-out";
        
            // Reset background image
            body.style.backgroundImage = '';
        });
        menuButtons.contact.addEventListener('mouseleave', () => {
            character.style.transition = 'transform 0.3s ease';
            character.style.transform = `translate(0px, 100px)`; // Reset character position
        
            // Reset character head image
            headElement.style.animation = "sleeping 2s infinite";
            headElement.style.backgroundImage = '';
            floatZsElement.style.backgroundImage = '';
            floatZsElement.style.animation = "floatZs 2s infinite ease-in-out";
        
            // Reset background image
            body.style.backgroundImage = '';
        });
    }
}

// Event listeners for menu buttons hover
menuButtons.profile.addEventListener('mouseenter', () => moveCharacterToButton(menuButtons.profile));
menuButtons.skills.addEventListener('mouseenter', () => moveCharacterToButton(menuButtons.skills));
menuButtons.projects.addEventListener('mouseenter', () => moveCharacterToButton(menuButtons.projects));
menuButtons.contact.addEventListener('mouseenter', () => moveCharacterToButton(menuButtons.contact));



});
