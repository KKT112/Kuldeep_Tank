//class hosting is not available
//we can create method in class,
//

class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  startEngine() {
    console.log("run.....");
  }
}
let honda = new Car("black", 2022);
console.log(honda);
honda.startEngine();

//getter and setter in constructor

class Movie {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
  get moviename() {
    console.log("i gave new movie");
  }

  set movierating(rating) {
   console.log(this.rating = rating); 
  }

}
let movie1 = new Movie("deadpool", 6.7);
movie1.moviename;
movie1.movierating = "no idea";

//static method
//direct class not use a instance in this method
//class use as variable & direct call the method..,

Movie.review = function(){
    console.log("here is rating");
}

Movie.review();






