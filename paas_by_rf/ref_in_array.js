let arr=[3,4,67,8];

let refarr=arr;

refarr[6]=880;
console.log("original_array:",arr);
console.log("refarray :",refarr);

//pass by value


 refarr=[...arr];
 refarr.shift();
 arr.unshift(344);
console.log("original_array:",arr);
console.log("refarray :",refarr);

