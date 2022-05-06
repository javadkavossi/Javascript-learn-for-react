class Vehicle{

    constructor(color,model){
this.color= color,
this.model=model

    }
    speed(){

        console.log("i go fast")
    }
}
const car1 = new Vehicle("red" , "ferrari");
console.log(car1)

const car2 = new Vehicle("belu", "benz");
console.log(car2)
console.log(car1.speed)