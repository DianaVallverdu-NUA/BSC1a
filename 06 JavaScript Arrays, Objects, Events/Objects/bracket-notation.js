const person = {
    name: ["Hannah-Louise", "Batt"],
    age: 29,
    isMarried: false,
};

const logInfo = function(propertyName){
    console.log(person[propertyName]);
}

logInfo("name");
logInfo("age");
logInfo("isMarried");

person.isRetired = function(){
   return (person.age >= 65) ? true : false;
};

console.log(person.isRetired());