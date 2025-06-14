# 🚀 Day 91: JavaScript Day-35 - JavaScript Classes 💪

JavaScript ES6 introduced **classes** as a more readable and elegant way to work with **constructor functions** and **prototypes**.

---

## 📘 Overview

A `class` in JavaScript is a blueprint for creating objects with shared methods and properties.

---

## 🧪 Code Example

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person("Nirmit");
person.greet(); // Hello, my name is Nirmit

const person1 = new Person("John");
person1.greet(); // Hello, my name is John
```

---

## 🔍 Explanation

- **`class Person`**: Defines a new class named `Person`.
- **`constructor(name)`**: Called automatically when a new object is created with `new Person(...)`.
- **`this.name = name`**: Assigns the `name` argument to the object.
- **`greet()`**: A method shared by all instances of the class.

---

## 🔧 Why Use Classes?

✅ Cleaner syntax over prototype-based inheritance
✅ Easier to understand and organize OOP logic
✅ Supports inheritance with `extends`
✅ Consistent with OOP in other languages

---

## 🧰 Real-World Use Cases

- Modeling users, products, tasks, etc.
- Game entities (Player, Enemy, Weapon)
- API response wrappers
- Reusable logic for UI components (in frameworks like React)

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
