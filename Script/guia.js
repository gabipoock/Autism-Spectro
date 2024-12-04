const video = document.getElementById('videoPlayer');

// Retrocede 5 segundos no vídeo
function rewind() {
  video.currentTime -= 5;
}

// Avança 5 segundos no vídeo
function fastForward() {
  video.currentTime += 5;
}

// Alterna o estado de mute do vídeo
function toggleMute() {
  video.muted = !video.muted;
}

// Alterna o modo tela cheia
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen().catch(err => {
      console.error(`Erro ao tentar entrar em tela cheia: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
}

// Quando o vídeo carrega, ele toca automaticamente
video.addEventListener('canplay', () => {
  video.play();
});
