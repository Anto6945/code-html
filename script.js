

const startButton = document.getElementById('start-button');
const videoContainer = document.getElementById('video-container');
const videoElement = document.getElementById('camera-feed');

startButton.addEventListener('click', () => {
      // Affiche la vidéo et commence la lecture
      videoContainer.style.display = 'block';
      startCamera();
  });

function startCamera() {
      // Options pour accéder à la caméra (video et audio)
      const constraints = { video: true, audio: false };

      // Accès à la caméra
      navigator.mediaDevices
          .getUserMedia(constraints)
          .then((stream) => {
              videoElement.srcObject = stream;
          })
          .catch((error) => {
              console.error('Erreur lors de l\'accès à la caméra :', error);
          });}