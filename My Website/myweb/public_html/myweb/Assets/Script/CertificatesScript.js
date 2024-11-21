    // Get the container and slides
    var container = document.getElementById('container');
    var slides = document.getElementById('slides');
    var box6 = document.getElementById('prev');
    var box7 = document.getElementById('next');

    // Set the translation amount
    var translationAmount = 0;

    // Function to scroll the boxes
    function scrollBoxes(direction) {
      var scrollAmount = window.innerWidth < 600 ? 90 : 60; // Adjust scroll amount for mobile screens
      var maxTranslation = window.innerWidth < 600 ? -900 : -600; // Adjust maximum translation for mobile screens

      translationAmount += direction * scrollAmount;
      // Check for minimum and maximum translations
      translationAmount = Math.min(translationAmount, 0);
      translationAmount = Math.max(translationAmount, maxTranslation);
      slides.style.transform = 'translateX(' + translationAmount + 'vw)';
      updateButtons();
    }

    // Function to update the state of the navigation buttons
    function updateButtons() {
      box6.disabled = translationAmount >= 0;
      box7.disabled = translationAmount <= -(slides.offsetWidth - container.offsetWidth);
    }

    // Add event listener for scrolling
    window.addEventListener('resize', updateButtons);
    updateButtons();


    