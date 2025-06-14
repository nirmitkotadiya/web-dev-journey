const person = {
    name: "Nirmit",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
    greet1() {
        console.log("This is greet1");
    }
}

person.greet();
person.greet1();