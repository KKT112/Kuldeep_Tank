//inheritance by using extends keyword

/*class Vehicle{
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
*/

class Movie{
    constructor(rate,value){
        this.rate=rate;
        this.value=value;
    }

    Defined(rate){

        return  `${rate}good job`;
    }
}

class Amount extends Movie{
         constructor(rate,story,time){
            super(rate);
            this.story=story;
            this.time=time;
           
         }
}

let movie1 = new Amount(8.8,"nice","154_min");
console.log(movie1.Defined(78.8));