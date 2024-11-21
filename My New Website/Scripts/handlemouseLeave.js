// Handle mouse leave event

    function handleMouseLeave() {
        // Implement mouse leave interaction logic
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
        else
        {
            character.style.transform = `translateY(100px)`;
        }
    }

    trackingArea.addEventListener('mouseleave', handleMouseLeave);