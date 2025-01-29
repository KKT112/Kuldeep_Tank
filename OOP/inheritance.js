//inheritance by using extends keyword

class Vehicle{
    constructor(color,model){
        this.color=color;
        this.model=model;
    }
    engine_capacity(model){
        console.log("good")

    }

}

class bike extends Vehicle{
    constructor(color,model,capacity){
        super(color,model);
        this.capacity=capacity;
    }
}

let honda = new Vehicle("green",2025);
console.log(honda);

let hero_honda = new bike("brown",2000);
console.log(hero_honda); 
let devidputra  = new bike("red",2020,"cc2z");
console.log(devidputra);

let honda2= new bike("black",2021,"2000cc");
console.log(honda2);