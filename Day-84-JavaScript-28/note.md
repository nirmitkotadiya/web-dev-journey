# 🚀 Day 84: JavaScript Day-28 - Arrow Functions & Async Timers 👨‍💻

This project demonstrates the usage of **JavaScript Arrow Functions** along with **asynchronous behavior** using `setTimeout()` and `setInterval()`.

---

## 🧠 Concepts Covered

### ⚡ Arrow Functions

Arrow functions offer a concise syntax to write functions in JavaScript.

```js
// Traditional Function
function greet(name) {
  return `Hello, ${name}`;
}

// Arrow Function
const greet = (name) => `Hello, ${name}`;
```

---

### ⏳ `setTimeout()`

Schedules a one-time function execution **after** a delay (in milliseconds):

```js
setTimeout(() => {
  console.log("Hello Timer!");
}, 3000);
```

🧠 Even if the delay is `0`, it’s queued and runs **after** the current call stack.

---

### 🔁 `setInterval()`

Repeatedly executes a function at fixed time intervals:

```js
setInterval(() => {
  console.log("Hello Interval!");
}, 3000);
```

---

### 🧪 Code Execution Example

```js
setTimeout(() => {
  console.log("Hello Timer!");
}, 3000);

console.log("This is normal code");

setInterval(() => {
  console.log("Hello Interval!");
}, 3000);

setTimeout(() => {
  console.log("Hello Timer 2!");
}, 0);

console.log("This is normal code 2");
```

#### 🖥️ Expected Output:

```
This is normal code
This is normal code 2
Hello Timer 2!
Hello Timer!
Hello Interval!
Hello Interval!
...
```

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
