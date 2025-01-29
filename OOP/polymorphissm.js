class Animal{
    speak(){
        console.log(".....speking....")
    }
}
class Cat extends Animal{
    speak(){
        console.log("..maw maw..");
    }
}
    
let animal = [new Animal(),new Cat()];

animal.forEach(animal => animal.speak());

