let person = {
    fname : "kuldeep",
    lname : "tank",
    city : "rajkot",
    age : "21",
    detail : function(){
        console.log(`my name is ${this.fname} ${this.lname}. my city name  is ${this.city}.`);
    }
}
console.log(person.detail());

