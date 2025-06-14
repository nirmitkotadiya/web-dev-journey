# 🚀 Day 90: JavaScript Day-34 - JavaScript `this` keyword 💪

### 🧠 Overview

The `this` keyword in JavaScript refers to the **object** that is executing the current function. Its value depends on how a function is **called**, not where it’s defined.

---

### 🧪 Code Example

```js
const person = {
  name: "Nirmit",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
  greet1() {
    console.log("This is greet1");
  },
};

person.greet(); // Hello, my name is Nirmit
person.greet1(); // This is greet1
```

---

### 🧩 Explanation

- `person.greet()`
  → Here, `this` refers to the `person` object.
  → So, `this.name` is `"Nirmit"`.

- `person.greet1()`
  → Regular method with no use of `this`, just logs a static message.

---

### ⚠️ Important Notes

- In **object methods**, `this` usually refers to the object itself.
- If you assign a method to a variable and call it separately, `this` can become `undefined` (or refer to `window` in non-strict mode).
- Use **arrow functions** cautiously — they do **not** bind their own `this`, but inherit it from the parent scope.

---

### 🧰 Tip for Developers

```js
const greetOutside = person.greet;
greetOutside(); // undefined in strict mode, or "Hello, my name is undefined"
```

To fix it, bind the correct context:

```js
const boundGreet = person.greet.bind(person);
boundGreet(); // "Hello, my name is Nirmit"
```

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
