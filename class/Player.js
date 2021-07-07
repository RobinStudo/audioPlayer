class Player{
    constructor(id){
        this.container = document.getElementById(id);
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
        this.elements.audio.addEventListener('loadedmetadata', function(){
            
        });

        this.elements.audio.addEventListener('timeupdate', function(){

        });

        this.elements.button.addEventListener('click', () => {
            if(this.elements.audio.paused === true){
                this.play();
            }else{
                this.pause();
            }
        });

        this.elements.progress.addEventListener('click', function(){

        });
    }

    play(){
        this.elements.audio.play();
        this.elements.icon.classList.replace('fa-play', 'fa-pause');
    }

    progress(){

    }

    pause(){
        this.elements.audio.pause();
        this.elements.icon.classList.replace('fa-pause', 'fa-play');
    }
}

const player = new Player('player');
const player2 = new Player('player2');

