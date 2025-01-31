"usestrict"

let mainPlain = {
    airline:"Fly Ind",
    iatanum:202,
    booking:[],
  

    book:function(name,book_num){
        console.log(`here airline is ${this.airline} and iatanum is ${this.iatanum} and booking
             name is ${name} and book_no is ${book_num}`); 
             this.booking.push({flight:`${this.airline}`},{name:name});
              
    }
};

 mainPlain.book("jadu",23); //function call
 mainPlain.book("tony",27);

 console.log(mainPlain); //object print

 console.log("*******")


 let childplain = {
    airline:"child plain",
    iatanum:220,
    booking:[],
 };

 let book2 = mainPlain.book; //pass the value of key in obj1

 //call method
 book2.call(childplain,"xyz",77);  //provide to another obj to acess the array

 console.log("****************");

 //apply method

 book2.apply(childplain,["kkt",54]);

 //bind method 

const t = book2.bind(childplain,"thor",577);
t();
console.log(childplain); //that create a object and we can call further that object


  
 

