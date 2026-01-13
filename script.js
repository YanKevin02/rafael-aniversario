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
         toggleMusic();
      }

      enterFullscreenBtn.addEventListener('click', enterFullscreen);

      // Se já está em tela cheia, mostrar o conteúdo principal
      document.addEventListener('fullscreenchange', function () {
         if (document.fullscreenElement) {
            showMainContent();
         }
      });
   });


const musicButton = document.getElementById('musicButton');
let music;
let isPlaying = false;  
function toggleMusic() {
   if (!music) {
         music = new Audio('music.mp3');
         music.volume = 0.2;
         music.loop = true;
      }

      if (isPlaying) {
         music.pause();
         musicButton.style.opacity = 1;
         musicButton.style.transform = 'scale(1.05)';
         musicButton.style.transition = 'transform 0.2s, opacity 0.2s';
         musicButton.textContent = '♪';
         isPlaying = false;
      } else {
         music.play();
         musicButton.style.opacity = 0.5;
         musicButton.style.transform = 'scale(0.95)';
         musicButton.style.transition = 'transform 0.2s, opacity 0.2s';
         musicButton.textContent = '❚❚';
         isPlaying = true;
   }
};

document.getElementById('musicButton').addEventListener('click', toggleMusic);