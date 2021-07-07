class Car{
    engine = false;
    speed = 0;
    lock = false;
    color;

    start(){
        this.engine = true;
    }

    stop(){
        this.engine = false;
    }

    accelerate(){
        this.speed = this.speed * 2;
    }

    lock(){
        this.lock = true;
    }
}

const ford = new Car();
const tesla = new Car();