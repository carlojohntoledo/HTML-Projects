const fullscreenBtn = document.getElementById('fullscreen-btn');
const iframe = document.getElementById('Odin');

fullscreenBtn.addEventListener('click', () => {
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.mozRequestFullScreen) { /* Firefox */
    iframe.mozRequestFullScreen();
  } else if (iframe.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) { /* IE/Edge */
    iframe.msRequestFullscreen();
  }
});