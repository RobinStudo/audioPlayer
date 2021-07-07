const button = document.querySelector('.player-play');
const player = document.querySelector('.player-source');
const icon = button.querySelector('i');
const textCurrentTime = document.querySelector('.player-time__current');
const textTotalTime = document.querySelector('.player-time__total');

player.addEventListener('loadedmetadata', function(){
    textTotalTime.textContent = convertSecondsToTime(player.duration);
});

button.addEventListener('click', function(){
    if(player.paused === true){
        player.play();
        icon.classList.replace('fa-play', 'fa-pause');
    }else{
        player.pause();
        icon.classList.replace('fa-pause', 'fa-play');
    }
});

const progress = document.querySelector('.player-progress progress');
// setInterval(function(){
//     const percent = player.currentTime * 100 / player.duration;
//     progress.setAttribute('value', Math.round(percent));
// }, 1000);

player.addEventListener('timeupdate', function(){
    const percent = player.currentTime * 100 / player.duration;
    progress.setAttribute('value', Math.round(percent));

    textCurrentTime.textContent = convertSecondsToTime(player.currentTime);
});

progress.addEventListener('click', function(event){
    const progression = event.offsetX * 100 / progress.offsetWidth;
    const time = progression * player.duration / 100;
    player.currentTime = Math.round(time);
});

function convertSecondsToTime(totalSeconds){
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.round(totalSeconds % 60);
    return minutes + ':' + seconds;
}