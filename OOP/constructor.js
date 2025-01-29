// we can create constructor by using new key word
//access the property by using this keyword

let Cars = function (color, model) {
  this.firstcarcolor = color;
  this.model = model;
};

//let instance = new Cars("black", 2022);
//console.log(instance);

//let instance2 = new Cars("blue",2013);
//console.log(instance2);

//function in oop
//method
console.log(Cars.prototype);  //blank constructor call
let instance = new Cars("black", 2022); //give the propert to the object
let instance2 = new Cars("blue", 2013);  

Cars.prototype.startEngine = function () {
  console.log("start engine");               //property in object give method
};

instance.startEngine();  //object ka instance ka method call

Cars.prototype.startEngine="honda";  // set property of prototype

console.log(Cars.prototype);
console.log(instance.__proto__);
console.log(instance2.__proto__.isPrototypeOf(instance2));
console.log(instance)