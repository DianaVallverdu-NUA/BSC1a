const person = {
    name: ["Hannah","Louise"], //Add your name here
    age: 29, //Add your age here
    bio(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
    },
    introduceSelf(){
        console.log(`Hi! My name is ${this.name[0]}.`)
    },
};