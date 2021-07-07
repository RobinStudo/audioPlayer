class Car extends Vehicle{
    lock = false;

    lock(){
        this.lock = true;
    }
}

const ford = new Car();
const tesla = new Car();