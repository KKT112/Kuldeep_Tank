let arr1=[{name:"john",blocked:"abust"},{name:"kkt",blocked:"copyright"}];

for(let i=0;i<arr1.length;i++){
  console.log(arr1[i]);  
}

let blocklist=[{name:"paul",blocked:"don't_know"},{name:"walker",blocked:"copyright"}];

for(let i=0;i<blocklist.length;i++){
    console.log(`blocklist in user ${blocklist[i].name} and reason ${blocklist[i].blocked}`)
}