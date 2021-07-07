class Player{
    constructor(id){
        this.container = document.getElementById(id);

        this.elements = {
            audio: this.container.querySelector('.player-source'),
            button: this.container.querySelector('.player-play'),
        };

        this.elements.icon = this.elements.button.querySelector('i');
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