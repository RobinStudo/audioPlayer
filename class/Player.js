import TimeUtil from "./TimeUtil.js";

class Player{
    constructor(id){
        this.container = document.getElementById(id);
        this.timeUtil = new TimeUtil();
        this.buildElements();
        this.bindEvents();
    }

    buildElements(){
        this.elements = {
            audio: this.container.querySelector('.player-source'),
            button: this.container.querySelector('.player-play'),
            progress: this.container.querySelector('.player-progress progress'),
            textCurrentTime: this.container.querySelector('.player-time__current'),
            textTotalTime: this.container.querySelector('.player-time__total'),
        };

        this.elements.icon = this.elements.button.querySelector('i');
    }

    bindEvents(){
        this.elements.audio.addEventListener('loadedmetadata', () => {
            const time = this.timeUtil.convertSecondsToTime(this.elements.audio.duration);
            this.elements.textTotalTime.textContent = time;
        });

        this.elements.audio.addEventListener('timeupdate', () => this.progress());

        this.elements.button.addEventListener('click', () => {
            if(this.elements.audio.paused === true){
                this.play();
            }else{
                this.pause();
            }
        });

        this.elements.progress.addEventListener('click', event => {
            const progression = event.offsetX * 100 / this.elements.progress.offsetWidth;
            this.goTo(progression);
        });
    }

    play(){
        this.elements.audio.play();
        this.elements.icon.classList.replace('fa-play', 'fa-pause');
    }

    progress(){
        const percent = this.elements.audio.currentTime * 100 / this.elements.audio.duration;
        this.elements.progress.setAttribute('value', Math.round(percent));
    
        const time = this.timeUtil.convertSecondsToTime(this.elements.audio.currentTime);
        this.elements.textCurrentTime.textContent = time;
    }

    goTo(percent){
        const time = percent * this.elements.audio.duration / 100;
        this.elements.audio.currentTime = Math.round(time);
    }

    pause(){
        this.elements.audio.pause();
        this.elements.icon.classList.replace('fa-pause', 'fa-play');
    }
}

export default Player;

