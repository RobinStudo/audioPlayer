class Vehicle{
    engine = false;
    speed = 0;
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
}