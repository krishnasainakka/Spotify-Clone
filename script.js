console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let masterSongImage = document.getElementById('masterSongImage');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
        {songName: "Jai Shri Ram-Adipurush",filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
        {songName: "Na Roja Nuvve-Kushi",filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
        {songName: "Krishna Trance- Karthikeya2",filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
        {songName: "Time Ivvu Pilla-18Pages",filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
        {songName: "Inthandam-SeetaRamam",filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
        {songName: "Gulebakavali-Bimbisara",filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
        {songName: "PulsarBike-Dhamaka",filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
        {songName: "DandaKadiyal-Dhamaka",filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
        {songName: "Pranam Potunna-LoveToday",filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
        {songName: "Tillu anna DJ pedite-DJ Tillu",filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

const makeAllTrendPlays = ()=>{
    Array.from(document.getElementsByClassName('play-button')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        makeAllTrendPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        masterSongImage.setAttribute('src',`covers/${songIndex+1}.jpg`);
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterSongImage.setAttribute('src',`covers/${songIndex+1}.jpg`);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterSongImage.setAttribute('src',`covers/${songIndex+1}.jpg`);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

//Trending Card Effect

var swiper1 = new Swiper("#swiper1", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: false,
    fade: true,
    centerSlider: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: "#swiper1 .swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    },
  });

  let trendSongIndex = 0;
  let cardImage = Array.from(document.getElementsByClassName('card-image'));
  let cardTitle = Array.from(document.getElementsByClassName('card-content'));

  let trendSongs = [
    {songName: "Jai Shri Ram-Adipurush",filePath: "trendSongs/1.mp3", coverPath: "covers/TrendCovers/1.jpg"},
    {songName: "Na Roja Nuvve-Kushi",filePath: "trendSongs/2.mp3", coverPath: "covers/TrendCovers/2.jpg"},
    {songName: "Krishna Trance- Karthikeya2",filePath: "trendSongs/3.mp3", coverPath: "covers/TrendCovers/3.jpg"},
    {songName: "Ooru palleturu -Balagam",filePath: "trendSongs/4.mp3", coverPath: "covers/TrendCovers/4.jpg"},
    {songName: "OriVari-Dasara",filePath: "trendSongs/5.mp3", coverPath: "covers/TrendCovers/5.jpg"},
    {songName: "Gulebakavali-Bimbisara",filePath: "trendSongs/6.mp3", coverPath: "covers/TrendCovers/6.jpg"},
    {songName: "PulsarBike-Dhamaka",filePath: "trendSongs/7.mp3", coverPath: "covers/TrendCovers/7.jpg"},
    {songName: "Pyaar Lona Pagal -Ravanasura",filePath: "trendSongs/8.mp3", coverPath: "covers/TrendCovers/8.jpg"},
    {songName: "Chamkeela Angeelesi- Dasara",filePath: "trendSongs/9.mp3", coverPath: "covers/TrendCovers/9.jpg"},
    {songName: "Gundellona- OriDevuda",filePath: "trendSongs/10.mp3", coverPath: "covers/TrendCovers/10.jpg"},
]

cardImage.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = trendSongs[i].coverPath; 
     
})
cardTitle.forEach((element, i)=>{ 
    element.getElementsByClassName("card-title")[0].innerText = trendSongs[i].songName;
     
})

Array.from(document.getElementsByClassName('play-button')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllTrendPlays();
        makeAllPlays();
        trendSongIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `trendSongs/${trendSongIndex+1}.mp3`;
        masterSongName.innerText = trendSongs[trendSongIndex].songName;
        masterSongImage.setAttribute('src',`covers/TrendCovers/${trendSongIndex+1}.jpg`);
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


// Artist Card-Effect
  var swiper2 = new Swiper("#swiper2", {
    slidesPerView: 5,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: false,
    fade: true,
    centerSlider: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: "#swiper2 .swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    },
  });

  let artistImage = Array.from(document.getElementsByClassName('artist-image'));
  let artistNames = Array.from(document.getElementsByClassName('artist-name'));

  let Artists = [
    {artistName: "Sid SriRam", picPath: "artists/Sid_sriram.jpg"},
    {artistName: "Devi Sri Prasad", picPath: "artists/dsp1.png"},
    {artistName: "Geeta Maduri", picPath: "artists/Geeta-Maduri.jpg"},
    {artistName: "Harika", picPath: "artists/Harika-Narayan.jpg"},
    {artistName: "Rahul sipligunj", picPath: "artists/Rahul-sipligunj.jpg"},
    {artistName: "SS Thaman", picPath: "artists/Thaman.jpg"},
    {artistName: "Mangali", picPath: "artists/Mangali.jpg"},
    {artistName: "Bala Subramanyam", picPath: "artists/balu5.png"},
    {artistName: "Anup Rubens", picPath: "artists/anuprubens.jpg"},
    {artistName: "Anudeep",picPath: "artists/anudeep.jpg"},
]

artistImage.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = Artists[i].picPath; 
})
artistNames.forEach((element, i)=>{ 
    element.getElementsByTagName("h3")[0].innerText = Artists[i].artistName;   
})

