// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('confetti').style.display = 'none';

    localStorage.setItem('popupShown', 'true');
}

// Function to show the popup only on hard reload
window.onload = function() {
    var type = performance.navigation.type;
    if (type === 1) { // 1 indicates hard reload
        document.getElementById('popup').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('confetti').style.display = 'block';
    }
    var popupShown = localStorage.getItem('popupShown'); // popup on first visit
    if (!popupShown) {
        document.getElementById('popup').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('confetti').style.display = 'block';
    }

};