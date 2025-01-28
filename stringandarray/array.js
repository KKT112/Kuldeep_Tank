console.log("*********************");

let arr1 = ["a", "b", "c", "d"];
let arr2 = [1, 3, 4];

//CONCATE
console.log(arr1.concat(arr2));

//PUSH
console.log(arr1.push("g"));

//shift
console.log(arr1.shift());

//unshift
console.log(arr1.unshift("h"));

console.log(arr1);

//join
console.log(arr1.join(";"));

//at method
console.log(arr1.at(2));

//splice =>position,remove elemet,and add
let a3 = [3,4,6,2,3];

let a4 = a3.splice(2,1,9,8);
console.log(a3);
console.log(a4);
  //slice give new array that will be created

  console.log(a3.slice(2, 4));


  //ARRAY_REDUCE

let a1=[2,4,6,8,10,12];

let newarr = a1.map((e)=>{
    return e*2;
} 
)
console.log(newarr);

//array_filter

let a23=[1,2,3,4,5,6,7,8,9,10];

let newarr2 = a23.filter((e)=>{
    return e%2==0;
})

console.log(newarr2);


const example = ["ab","bc","cd","de"];
let a2 = example.filter((e=>{

    return(e.match(/ab/g));

}))
console.log(a2);

//array_reduce

let a5=[3,5,6];

let newa6 = a5.reduce((e,s)=>{
    return e+s ;
})

console.log(newa6);

const app = [1,2,2,1,4];

const new_app=app.reduce(function(total,e1){
    
    return total*e1;

},1)
console.log(new_app);