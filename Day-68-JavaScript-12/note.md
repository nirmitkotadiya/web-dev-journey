# 🚀 Day 68: JavaScript Day-12 - More About JavaScript Objects 💪

Today we explored deeper into JavaScript objects: accessing properties, nesting, adding methods, and using built-in functions.

---

## 🧱 Object Property Access

### Dot Notation

```js
console.log(person.name); // "Nirmit"
```

### Bracket Notation

```js
console.log(person["age-gap"]); // 18
let key = "name";
console.log(person[key]); // "Nirmit"
```

---

## 🏠 Nested Objects

```js
console.log(person.address.city); // "xyz"
```

---

## 🧠 Object Methods

```js
const person = {
  name: "Nirmit",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

person.greet(); // "Hello Nirmit"
```

---

## ⚠️ Built-in Functions & Objects

```js
console.log(typeof console); // "object"
alert(`Hello ${person.name}`);
```

### Math Example

```js
let res = Math.sqrt(9);
console.log(res); // 3
```

---

## 🎮 Mini Challenge: Number Guessing Game

> Build a simple number guessing game using objects and built-in methods.

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
