let number=32;

let car ={
    "car_name" : "bmw",
    "car_price" : 2000,
    "model" :2013,
    ["number"] :32,
}
console.log(car.number);

for(let key in car){
    console.log(key);
    console.log(car[key]);
}

