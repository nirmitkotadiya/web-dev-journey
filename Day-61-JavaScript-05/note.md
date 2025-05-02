# 🚀 Day 61: JavaScript Day-05 - JS Variables

Today we learned about **JavaScript variables** — the building blocks for storing and manipulating data in your programs.

---

## 📘 What Are Variables?

- Variables are **containers for storing data values**.
- In JavaScript, you can declare variables using:
  - `var` (function-scoped, avoid using in modern code)
  - `let` (block-scoped, recommended for reassignable variables)
  - `const` (block-scoped, for constants)

---

## 📜 Code Highlights

### ✅ Declaring and Using Variables

```js
let gender = "Male";
console.log(gender); // Male

let num = 3;
console.log(num); // 3

let sum = num + 5;
console.log(sum); // 8

// Changing the value of a variable
num = 10;
console.log(num); // 10
```

---

### ❌ Invalid Variable Names

```js
// let 123 = "abc";  // ❌ Starts with a number
// let !@# = "abc";  // ❌ Uses invalid characters

let _23 = "abc"; // ✅ Underscore is valid
```

---

## ✅ Best Practices

- Use `let` and `const` — avoid `var`.
- Start variable names with a letter, `_`, or `$`.
- Variable names **cannot start with numbers** or contain special characters except `_` and `$`.

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
