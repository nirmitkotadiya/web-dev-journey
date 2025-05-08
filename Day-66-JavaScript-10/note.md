# 🚀 Day 66: JavaScript Day-10 - JavaScript Function Parameters

## 📌 What Are Function Parameters?

Function **parameters** allow you to pass values to functions so they can work dynamically instead of being hardcoded.

---

## 🔧 Example 1: Single Parameter

```javascript
function sum(a) {
  let b = 10;
  console.log(a + b);
}

sum(); // Output: NaN (a is undefined)
sum(20); // Output: 30
```

---

## 🔧 Example 2: Parameters with Default Values

```javascript
function sum1(a, b = 10) {
  return a + b;
}

console.log(sum1()); // Output: NaN (a is undefined)
console.log(sum1(30)); // Output: 40 (b uses default value)
console.log(sum1(100, 20)); // Output: 120
```

---

## 📘 Notes

- If a parameter is **not passed**, it becomes `undefined`.
- You can provide a **default value** for parameters using `=` syntax.
- Always validate inputs when working in real-world apps.

---

## ✅ Best Practices

- Use default parameters to make your functions flexible and safe.
- Name parameters clearly: `price`, `quantity`, `userId`, etc.
- Keep functions focused and readable.

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
