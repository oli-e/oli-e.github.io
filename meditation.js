function playSoundBeach() {
  var audio = new Audio('./sounds/beach.mp3');
  audio.play();
  if (!audio.paused){
    audio.pause();
    
  }
}
function playSoundRain(){
  var audio = new Audio('./sounds/rain.mp3');
  audio.play();
}

function playSoundBirds(){
  var audio = new Audio('./sounds/birds.mp3');
  audio.play();
}