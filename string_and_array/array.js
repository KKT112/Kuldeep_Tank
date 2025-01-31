console.log("*********************");

let arr1 = ["a", "b", "c", "d"];
let arr2 = [1, 3, 4];

//CONCATE
console.log(arr1.concat(arr2));
console.log();

//PUSH
console.log(arr1.push("g"));
let newarr1 = arr1;
console.log(newarr1);
console.log();

//shift
console.log(arr1.shift());
console.log();

//unshift
console.log(arr1.unshift("h"));
console.log(arr1);
console.log();

//join
console.log(arr1.join(";"));
console.log();

//at method
console.log(arr1.at(2));
console.log();

//splice =>position,remove elemet,and add
let a3 = [3, 4, 6, 2, 3];

let a4 = a3.splice(2, 1, 9, 8);
console.log(a3);
console.log(a4);
console.log();

//slice give new array that will be created

console.log(a3.slice(2, 4));
console.log();

//ARRAY_REDUCE

let a1 = [2, 4, 6, 8, 10, 12];

let newarr = a1.map((e) => {
  return e * 2;
});
console.log(newarr);
console.log();

//array_filter

let a23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newarr2 = a23.filter((e) => {
  return e % 2 == 0;
});

console.log(newarr2);
console.log();

const example = ["ab", "bc", "cd", "de"];
let a2 = example.filter((e) => {
  return e.match(/ab/g);
});
console.log(a2);
console.log();

//array_reduce

let a5 = [3, 5, 6];

let newa6 = a5.reduce((e, s) => {
  return e + s;
});

console.log(newa6);

const app = [1, 2, 2, 1, 4];

const new_app = app.reduce(function (total, e1) {
  return total * e1;
}, 1);
console.log(new_app);
console.log();

//array retrive element

let fruit = ["apple",'orange','guavava','stroberray','banana'];

fruit.forEach((e)=>{
console.log(e);    
})

//array entries method

 const list = fruit.entries();

let anotherr_array="";

for(let e of list){
    anotherr_array = anotherr_array + e;
    
}
 console.log(anotherr_array);

//fill method

let a233=[3,4,5];
console.log(a233.fill(6,1));

//flatmap method

let x=[1,2,3,4];

const new_arr = x.flatMap(x =>[x,x*10]);
console.log(new_arr);

let y=[5,6,7,8];

//reverse + flatmap

let z = x.reverse();
const abc =y.flatMap(y=>[y,z]);
console.log(abc);

//reduceright

let a = [1,2,3];
let reduceright = a.reduceRight((total,current)=>{
     return total-current;
},0)
console.log(reduceright);

//indexof method

let football = ["sunil","messi","ronaldo","neymar"];

console.log(football.lastIndexOf("messi")); //SAME AS INDEXOF


//join 

let new1=[2,3,4];
console.log(new1.join("A"));

//pop
console.log(new1.pop());
console.log(new1.push(6));
console.log(new1.unshift(112));
 



