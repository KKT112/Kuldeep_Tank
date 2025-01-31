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

animal.forEach(animal => 
               animal.speak()); //dynamic


//dynamic multiple dxtend class available
//parameter
//subtype => all consider as object.property
//adhoc =>in this polymorphism that provide multiple argument and provide if conditionn in argument..,


