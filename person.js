class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`Hello, I am ${this.name} and am ${this.age} years old.`);
    }
}

module.exports = Person;