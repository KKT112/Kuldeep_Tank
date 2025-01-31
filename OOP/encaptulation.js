//create a function with argument
//important item maek in private variable
//this.getvariable=give function and return the getting argument value
//this.setvariable(newargu)=give function and return newarg=old argu;
//this.getany=give fun and return stored variable
//make object outside function
//call the object method

function Person(name, age)
{
    let privateName = name; // private variable
    this.getAge = function()
    {
        return age; //public method accessing private variable
    };
    this.setAge = function(newAge)
    {
        age = newAge; // public method modifying private variable
    };
    this.getName = function()
    {
        return privateName; // public method accessing private variable
    };
}
// Creating an instance of Person
var person = new Person("John", 25);
console.log(person.getName()); // Output: John
console.log(person.getAge()); // Output: 25
person.setAge(30);
console.log(person.getAge()); // Output: 30



//encapulation =>binding the data in captual,controling and managing data in method and property in object..,


   function Bank(money,branch){

    let private_branch = branch ;
    
    this.getmoney2 = function(){
        return money;
    }
    this.setmoney = function(money2){
        return money2=money
    }
    this.getBranch = function(){
        return private_branch;
    }

   }
let customer1 = new Bank("5000","rajkot");
console.log(customer1.getmoney2());
console.log(customer1.setmoney("8000"));
console.log(customer1.getBranch());

