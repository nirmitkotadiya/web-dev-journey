class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

}

const person = new Person("Nirmit");
person.greet();

const person1 = new Person("John");
person1.greet();