# 🚀 Day 70: JavaScript Day-14 - JavaScript Object Part 3

Dive deeper into how **JavaScript objects** work, memory reference behavior, destructuring, and value vs reference types.

---

## 📚 Topics Covered

- Object reference in memory
- Primitive vs reference types
- Object modification through references
- String value behavior
- Object comparison
- Object destructuring

---

## 📌 Code Highlights

### 🧠 Value vs Reference

```js
let a = 10;
let b = a;
console.log(a === b); // true (primitive values are compared by value)
```

```js
const person = { name: "Nirmit" };
const anotherPerson = person;
person.name = "Nirmit Kotadiya";
console.log(anotherPerson.name); // "Nirmit Kotadiya" (reference updated)
```

### 🎯 Object Destructuring

```js
let person_obj = {
  name1: "Nirmit",
  age2: 25,
  job1: "Frontend Developer",
};

let { name1, age2, job1 } = person_obj;
console.log(name1, age2, job1);
```

### ❓ Object vs Object Comparison

```js
let person1 = { name: "Nirmit" };
let person2 = { name: "Nirmit" };
console.log(person1 === person2); // false (different memory reference)
```

---

## 🧠 Key Concepts

- Objects in JavaScript store memory **references**, not values.
- Primitives like numbers or strings are stored and compared by **value**.
- Comparing two objects directly checks **memory reference**, not content.
- Use **destructuring** to simplify access to object properties.

---

> _"Understand memory references—it's the foundation of how data flows in JavaScript."_ 🧠

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
