//js event

let button = document.querySelector(".event");

button.addEventListener("click", function () {
  console.log("clicked me");
});

//all element event

let b = document.querySelectorAll("li");

b.forEach(function (element) {
  element.addEventListener("click", (e) => {
    console.log(e.target);
    //e.target.remove();
    e.target.style.textDecoration = "line-through";
  });
});

//create element in html

let ul = document.querySelector("ul");

button.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent= "new";
  ul.append(li);
  //ul.prepend(li);
});
