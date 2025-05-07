# 🚀 Day 65: JavaScript Day-09 - JavaScript Functions

## 📌 What are Functions?

Functions in JavaScript are **reusable blocks of code** that perform a specific task. You define them once and can execute (call) them as many times as needed.

---

## 🔧 Syntax Example

```javascript
// Function Declaration
function test() {
  console.log("Hello World!");
  console.log("This is a test function.");
  console.log("It's running!");
  console.log("Let's see what happens next.");
}

// Function Execution (Calling)
test();
test();
```

---

## ➕ Function with Return Value

```javascript
function sum() {
  let num1 = 10;
  let num2 = 20;
  let sum = num1 + num2;
  return sum;

  // Unreachable code
  console.log("This won't be printed.");
}

console.log(sum()); // Output: 30
```

---

## 🧠 Naming Rules for Functions

- Must start with a letter, `$`, or `_`
- Can contain numbers but not start with them
- Use camelCase for readability: `getUserData()`, `calculateTotal()`

---

## 📖 Key Notes

- Functions improve **code reusability** and **organization**
- Use `return` to send back results from functions
- Anything after `return` won't execute
- Functions can also accept parameters to handle dynamic inputs (coming soon)

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
