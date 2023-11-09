const video = document.querySelector("#video");
const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const progress = document.querySelector("#progress");
const timestamp = document.querySelector("#timestamp");

//play-pause video
function toggleVideoStatus() {
  if(video.paused){
    video.play();
  }else{
    video.pause();
  }
}

//Icon güncelleme
function updatePlayIcon() {
  if (video.paused) {
    const i = document.createElement("i");
    i.classList.add("fa", "fa-play", "fa-2x"); 
    play.firstElementChild.remove();
    play.appendChild(i); 
  }else{
    const i = document.createElement("i");
    i.classList.add("fa", "fa-pause", "fa-2x"); 
    play.firstElementChild.remove();
    play.appendChild(i); 
  }
  
}

//Zaman damgası güncelleme
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  //Dakika değeri alma
  let mins = Math.floor(video.currentTime / 60) 
  if(mins<10){
    mins = `0${String(mins)}`
  }

  //Saniye değeri alma
  let secs = Math.floor(video.currentTime % 60) 
  if(secs<10){
    secs = `0${String(secs)}`
  }

  timestamp.innerHTML = `${mins}:${secs}`

}

//Video zamanını güncelleme
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);