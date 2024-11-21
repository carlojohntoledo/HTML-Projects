

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
    head.classList.remove('dizzy');
    character.style.transform = 'translateY(100px)';
    character.querySelector('.sleepyhead').style.display = 'flex'; // Show sleepyhead
    eyes.forEach(eye => eye.style.display = 'none'); // Hide eyes
    trackingArea.addEventListener('mousemove', handleMouseMove); // Enable mouse tracking
    trackingArea.addEventListener('mouseenter', handleMouseEnter);
    trackingArea.addEventListener('mouseleave', handleMouseLeave);
}

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
            menuCont.style.filter = "brightness(100%)";
            chains.style.filter = "brightness(100%)";
            gears.forEach(div => {
                div.style.filter = "brightness(100%)";
            });
            sections.forEach(section => {
                section.style.backgroundColor = '#F5F5F5'; // Light section background for sunny day
            });
            enableDayTime(); // Enable daytime mode
        } else {
            body.style.backgroundColor = '#0C090A'; // Night time color
            treeBackground.style.filter = "brightness(50%)";
            landScape.style.filter = "brightness(30%)";
            chains.style.filter = "brightness(50%)";
            gears.forEach(div => {
                div.style.filter = "brightness(50%)";
            });
            radioBtns.forEach(radio => {
                radio.style.filter = "brightness(100%)";
                radio.style.textShadow = 'rgba(255,255,255,1) 0px 0px 41px';
            });
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
        const matrix = style.transform; //|| style.webkitTransform || style.mozTransform; (remove "//" if needed.)
        if (matrix === 'none') return 0;
        const values = matrix.split('(')[1].split(')')[0].split(',');
        const a = values[0];
        const b = values[1];
        const radians = Math.atan2(b, a);
        return radians * (180 / Math.PI);
    }