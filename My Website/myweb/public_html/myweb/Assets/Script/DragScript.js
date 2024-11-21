let isDragging = false;
let initialX;

function startDrag(event) {
    isDragging = true;
    initialX = event.clientX;

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);

    // Prevent text selection during drag
    event.preventDefault();
}

function drag(event) {
    if (isDragging) {
        const deltaX = event.clientX - initialX;
        document.querySelector('.projects-images').scrollLeft -= deltaX;

        initialX = event.clientX;
    }
}

function stopDrag() {
    isDragging = false;

    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
}