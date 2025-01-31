
/*let a=parseInt(prompt("enter your number :"));*/
const n=100;
let Isprime = true;

if(n===1){
    console.log("the number is not prime");
}
else if(n>1){
    for(let i=2;i<=n;i++){
        if(n%i==0){
            Isprime=false;
            break;
        }
    }
    if(Isprime){
        console.log("the number is prime");
    }
    else{
        console.log("the number is not prime");
    }
}
else{
    console.log("the number is not prime");
}