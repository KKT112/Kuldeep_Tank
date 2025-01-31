/*let n1=0;
let n2=1;
let n=6;
let n3;
console.log("the fibbonacci series is");
for(let i=1;i<=n;i++){
    console.log(n1);
    n3=n1+n2;
    n1=n2;
    n2=n3;
}
let n=5;
function fact(n){
    if(n==0){
        return 1;
    }
    else if(n==1){
       return 1;
    }
    else{
       return n*fact(n-1);
    }
}
console.log(fact(n));


let a=[11,2,34,56,12];

for(let i=0;i<=a.length-1;i++){
    for(let j=0;j<=a.length-i-1;j++){
        if(a[j]>a[j+1]){
            let temp=a[j];
            a[j]=a[j+1];
            a[j+1]=temp;
        }
    }
}
console.log(a);



let i=3;
let j=4;
let temp;
 temp= (i**j);
console.log(temp);


console.log("good")


function fibbo(n){
    let n2=1;
    let n1=0;

    for(let i=1;i<=n;i++){
        console.log(n1);
        n3=n1+n2;
        n1=n2;
        n2=n3;
    }
 
}
fibbo(6);
*/

function secondmax(a){

    for(let i=0;i<=a.length-1;i++){
        for(let j=0;j<=a.length-i-1;j++){
            if(a[j]>a[j+1]){
                let temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
           
        }
       
    }
    console.log(a);

    for(let k=0;k<=a.length-1;k++){
        if(a[k]>a[k+1]){
            console.log(a[k]);
        }
    }
    console.log(a.length-1);
}
    let a=[2,4,6,1,23,6,23,7,8,2];
    secondmax(a);
