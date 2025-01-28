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

 mainPlain.book("abc",23); //function call
 mainPlain.book("our",27);

 console.log(mainPlain); //object print

 console.log("*******")


 let childplain = {
    airline:"child plain",
    iatacode:220,
    booking:[],
 };

 let book = mainPlain.book;

 //function return 

const t = book.bind(childplain,"xyz",577);
t();
console.log(childplain);

  
 

