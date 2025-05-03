# 🚀 Day 62: JavaScript Day-06 - JS Boolean

Today we explored **Boolean values** and how to use **comparison operators** in JavaScript.

---

## 📘 What Is Boolean?

- A **Boolean** is a primitive data type in JavaScript.
- It can only have **two possible values**: `true` or `false`.
- Booleans are often the result of **comparison expressions**.

---

## ⚙️ Comparison Operators

| Operator | Description                    | Example       | Output  |
| -------- | ------------------------------ | ------------- | ------- |
| `>`      | Greater than                   | `10 > 5`      | `true`  |
| `<`      | Less than                      | `10 < 5`      | `false` |
| `>=`     | Greater than or equal          | `10 >= 5`     | `true`  |
| `<=`     | Less than or equal             | `10 <= 5`     | `false` |
| `==`     | Equal (loose equality)         | `10 == "10"`  | `true`  |
| `===`    | Strict equality (type + value) | `10 === "10"` | `false` |
| `!=`     | Not equal (loose)              | `10 != 5`     | `true`  |
| `!==`    | Strict not equal               | `10 !== "10"` | `true`  |

---

## 📜 Code Highlights

```js
console.log(10 > 5); // true
console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(10 !== "10"); // true
console.log(10 === 5 + 5); // true
```

---

## 🔎 `typeof` Operator

You can use `typeof` to check the data type of a value:

```js
let a = 10;
let b = "10";
let c = true;
let d = false;

console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // boolean
console.log(typeof d); // boolean
```

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
