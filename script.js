document.addEventListener('DOMContentLoaded', function () {
      // Fullscreen welcome logic
      const welcomeFullscreen = document.getElementById('welcomeFullscreen');
      const enterFullscreenBtn = document.getElementById('enterFullscreenBtn');
      const card = document.querySelector('.birthdayCard');

      function showMainContent() {
         welcomeFullscreen.style.display = 'none';
         card.style.display = '';
      }
      function enterFullscreen() {
         const el = document.documentElement;
         if (el.requestFullscreen) {
            el.requestFullscreen();
         } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
         } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
         }
         showMainContent();
      }
      enterFullscreenBtn.addEventListener('click', enterFullscreen);

      // If already in fullscreen, show main content
      document.addEventListener('fullscreenchange', function () {
         if (document.fullscreenElement) {
            showMainContent();
         }
      });
   });