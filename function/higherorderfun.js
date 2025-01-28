

let voterCheker = function (age, fn) {
return fn(age)

};

const isEligible =(age)=>{

    return age >= 18 ? "Yes it is valid" : "It is not valid";

}

//console.log(compliment("you are good")("carrey"));
 const check = voterCheker(12, isEligible);

 console(check);


