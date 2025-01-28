/*function ready(){
    console.log("you are strong of all them");
}

setTimeout(ready,2000);

//setInterval(ready,3000);*/


/*setTimeout(function ready(){
    console.log("ready to");
},3000);*/


setTimeout(function sum(x,y){
    console.log(x+y);
},1000,5,4);

setInterval(function mul(x,y){
    console.log(x*y);
},2000,3,4);

setTimeout(function str(){
    console.log("good");
},3000)