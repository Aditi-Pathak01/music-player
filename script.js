let song = document.querySelector("#song");
let progress = document.querySelector("#progress");
let ctrlIcon = document.querySelector("#ctrl-icon");

song.addEventListener("onloadedmetadata", () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

const pausePlay = () => {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
};
ctrlIcon.addEventListener("click", pausePlay);

if (song.play()){
  setInterval(()=>{
    progress.value = song.currentTime;
  }, 500)
}
progress.onchange=()=>{
  song.play()
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
}

