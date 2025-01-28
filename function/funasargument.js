 let lowercase= function (str){
    return str.toLowerCase();

 }
 let uppercase= function(str){
    return str.toUpperCase();
 }

 let transform=function(str,fun){
    return fun(str);
 }

 let r=transform("heLlO",uppercase);
 console.log(r);

let num=5;
 let m1=function(num){
    return num*num;
 }
 let m2=function(num2){
    return num/num;
 }
 let j=function(num,fun){
    return fun(num);
 }

 let k=j(num,m1);
 console.log(k);

 