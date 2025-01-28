let person = {

    agecalculation:function(birthyear=2004){
        let age=2025-birthyear;
        return age;
    }
}
console.log(`current age is${person.agecalculation()}`);


