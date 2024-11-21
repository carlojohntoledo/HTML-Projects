// Handle mouse down to start circle rotation
function startDragRotation(event) {
    isDragging = true;
    startX = event.clientX;
    initialRotation = getRotationDegrees(circle);
    circle.style.transition = 'none'; // Disable transition during drag
}

// Handle mouse move to perform circle rotation
function performDragRotation(event) {
    if (!isDragging) return;
    const deltaX = event.clientX - startX;

    // Only allow clockwise rotation
    if (deltaX >= 0) {
        const rotation = initialRotation + deltaX;
        circle.style.transform = `rotate(${rotation}deg)`;
    }
}

// Handle mouse up to end circle rotation
function endDragRotation() {
    if (!isDragging) return;
    isDragging = false;
    circle.style.transition = 'transform 0.5s ease'; // Enable transition for snapping

    const rotation = getRotationDegrees(circle);
    const snappedRotation = snapToNearestPosition(rotation);
    circle.style.transform = `rotate(${snappedRotation}deg)`;

    // Update UI based on snapped rotation
    if (snappedRotation === 0 || snappedRotation === 360) {
        // Daytime UI
        enableDayTime();
    } else {
        // Nighttime UI
        enableNightTime();
    }
}

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
