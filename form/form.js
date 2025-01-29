let form = document.querySelector(".form-final");
console.log(form);
//let button = document.querySelector("#submit");

let email2 = document.querySelector("#email");
let password2 = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("good");
  console.log(email2.value,password2.value);
  console.log(form.email.value,form.password.value);
});
