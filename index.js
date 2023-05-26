
// Initialize variables
let songIndex= 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.querySelector('.master-play');
let ProgressBar = document.getElementById('progressBar');
let ShowGif = document.querySelector('.hide-show-gif');
let MasterSongName = document.querySelector('.master-name');
let songItems = document.querySelectorAll('.Song-items');


let songs = [
    {songName: 'let me love you', filePath: './songs/1.mp3', coverPatch: './Images/let-me-love-you.jpg'},
    {songName: 'Bewafa Se Pyaar Kiya', filePath: './songs/2.mp3', coverPatch: './Images/let-me-love-you.jpg'},
    {songName: 'Khoobsurat', filePath: './songs/3.mp3', coverPatch: './Images/let-me-love-you.jpg'},
    {songName: 'Phone Mila Ke', filePath: './songs/4.mp3', coverPatch: './Images/let-me-love-you.jpg'},
    {songName: 'Kya Loge Tum', filePath: './songs/5.mp3', coverPatch: './Images/let-me-love-you.jpg'},
]

songItems.forEach((element, i) =>{
    element.getElementsByClassName('song-name')[0].innerText= songs[i].songName;
})




// handle play/pause events
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        ShowGif.classList.remove('opacity-0');
        ShowGif.classList.add('opacity-100');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle-o');
        masterPlay.classList.add('fa-play-circle-o');
        ShowGif.classList.add('opacity-0');
        ShowGif.classList.remove('opacity-100');
    }
});

// listen events
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    ProgressBar.value=progress;
});

ProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    document.querySelectorAll('.song-play-pause-icon').forEach((element)=>{
        element.classList.remove('fa-pause-circle-o');
        element.classList.add('fa-play-circle-o');
    })

}

document.querySelectorAll('.song-play-pause-icon').forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle-o');
        audioElement.src = `./songs/${songIndex+1}.mp3`;
        MasterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        // audioElement.pause();
        ShowGif.classList.add('opacity-100');
    })
});

document.querySelector('.next').addEventListener('click', ()=>{
    if(songIndex>songs.length){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `./songs/${songIndex+1}.mp3`;
        MasterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        ShowGif.classList.add('opacity-100');
})
document.querySelector('.pre').addEventListener('click', ()=>{
    if(songIndex<0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `./songs/${songIndex+1}.mp3`;
        MasterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        ShowGif.classList.add('opacity-100');
})