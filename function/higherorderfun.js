

let voterCheker = function (age, fn) {  //function
return fn(age);  //function
}

const isEligible =(age)=>{

    return age >= 18 ? "Yes it is valid" : "It is not valid";

}


 const check = voterCheker(22, isEligible);

 console.log(check);


