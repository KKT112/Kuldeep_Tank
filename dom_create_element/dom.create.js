let ul= document.querySelector("ul");
let btn = document.querySelector(".add");



btn.addEventListener('click',function(){
    let lii = document.createElement("li");
    lii.textContent="good";
    ul.append(lii);
});

