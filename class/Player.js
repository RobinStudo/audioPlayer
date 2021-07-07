class Player{
    constructor(id){
        this.container = document.getElementById(id);

        this.elements = {
            audio: this.container.querySelector('.player-source'),
            button: this.container.querySelector('.player-play'),
            progress: this.container.querySelector('.player-progress progress'),
            textCurrentTime: this.container.querySelector('.player-time__current'),
            textTotalTime: this.container.querySelector('.player-time__total'),
        };

        this.elements.icon = this.elements.button.querySelector('i');
    
        this.elements.audio.addEventListener('loadedmetadata', function(){
            
        });

        this.elements.audio.addEventListener('timeupdate', function(){

        });

        this.elements.button.addEventListener('click', function(){

        });

        this.elements.progress.addEventListener('click', function(){
            
        })
    }

    play(){

    }

    progress(){

    }

    pause(){

    }
}

const player = new Player('player');
const player2 = new Player('player2');