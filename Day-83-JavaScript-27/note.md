# 🚀 Day 83: JavaScript Day-27 - JavaScript Callback Functions

## 🔍 Overview

Today’s focus was on **callback functions**, a core concept in JavaScript used to handle asynchronous behavior and functional programming patterns.

### ✅ Concepts Covered

#### 1. **Anonymous Functions**

```javascript
let greet = function () {
  console.log("hello");
};
greet(); // Output: hello
```

- Assigned to a variable
- No name, but can still be called through the variable

#### 2. **Callback Functions - Basic Example**

```javascript
function test(param) {
  param();
}

test(function () {
  console.log("hello User!");
});
```

- A **callback** is a function passed as an argument to another function
- It gets **called inside** the main function

#### 3. **Callback with Arguments**

```javascript
function test(param) {
  param("User");
}

test(function (name) {
  console.log("hello " + name);
});
```

- Callback functions can receive arguments from the parent function
- Helpful for customizing behavior inside reusable functions

---

## 📌 Why Callbacks Matter

Callbacks allow you to:

- **Defer execution** of a function
- **Customize behavior** of functions
- **Handle asynchronous tasks** (like API calls, file reading, etc.)

---

## 🧠 Summary

- Anonymous functions are function expressions without names.
- Callback functions are passed into other functions and executed within them.
- Callbacks are essential in event-driven programming and asynchronous tasks.

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
