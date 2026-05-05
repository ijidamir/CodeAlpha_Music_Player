let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let volumeSlider = document.getElementById("volume");
let volumeValue = document.querySelector(".volumeValue")
let currentTimeEl = document.getElementById("currentTime");
let durationEl = document.getElementById("duration");

 const songs =[
    {
        src:"music/A_NEW_WINE__LAWRENCE_OYOR(128k).mp3",
        title:"A NEW WINE",
        artist:"Lawrence Oyor",
    },
   
    {
        src:"music/eagles-flight.mp3",
        title:"EAGLES FLIGHT",
        artist:"Lawrence Oyor ",
    },
    {
        src:"music/Your-great-name.mp3",
        title:"YOUR GREAT NAME",
        artist:"Keastrings ",
    },

    

 ]

 let currentSongIndex = 0;

 function loadSong(index){
    song.src = songs[index].src;
    title.innerText = songs[index].title;
    artist.innerText = songs[index].artist;
    song.play()
    if(ctrlIcon.classList.contains("fa-play")){
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
    }

  

 }

 nextBtn.addEventListener("click",()=>{
    currentSongIndex++;

    if(currentSongIndex >= songs.length){
        currentSongIndex = 0
    };

    loadSong(currentSongIndex);
 });


 prevBtn.addEventListener("click",()=>{
    currentSongIndex--;

    if(currentSongIndex < songs.length){
        currentSongIndex = 0
    };

    loadSong(currentSongIndex);
 });


song.addEventListener("ended",()=>{
    currentSongIndex++;

    if(currentSongIndex >= songs.length){
        currentSongIndex = 0
    };

    loadSong(currentSongIndex);
});


song.volume = volumeSlider.value

volumeSlider.addEventListener("input",()=>{
    song.volume = volumeSlider.value;
    volumeValue.textContent = Math.floor(volumeSlider.value* 100) + "%";
});


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
    
};


function PlayPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
    }
    else{
        song.play();
            ctrlIcon.classList.remove("fa-play");
            ctrlIcon.classList.add("fa-pause");
    
       
    }
};



progress.addEventListener("input",()=>{
    song.currentTime = progress.value;
    
 
})



song.addEventListener("timeupdate",()=>{
   
    progress.value = song.currentTime
    
    currentTimeEl.textContent = formatTime(song.currentTime);
    durationEl.textContent= formatTime(song.duration);
});


function formatTime(time){
    if(isNaN(time)) return "0:00";

    let minutes = Math.floor(time/60);
    let seconds = Math.floor(time % 60);

    if (seconds < 10) {
        seconds = "0" + seconds ;
    }

    return minutes + ":" + seconds
}
