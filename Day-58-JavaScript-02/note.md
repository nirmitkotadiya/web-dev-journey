# 🚀 Day 58: JavaScript Day-02 - JavaScript Numbers

Today, we explored how **JavaScript handles numeric operations** and the **importance of operator precedence**.

---

## 📚 JavaScript Numbers

JavaScript uses a single **`Number`** type to handle both:

- **Integers** (e.g. `1`, `100`)
- **Decimals** / Floating-point numbers (e.g. `0.1`, `5.75`)

---

## 🔢 Basic Arithmetic Operations

```javascript
console.log(1 + 1); // Addition => 2
console.log(1 - 1); // Subtraction => 0
console.log(1 * 1); // Multiplication => 1
console.log(1 / 1); // Division => 1
```

---

## 🎯 Floating-Point Precision

JavaScript uses **floating-point arithmetic**, which can lead to **precision errors**:

```javascript
console.log(0.1 + 0.1); // 0.2
console.log(0.1 + 0.2); // 0.30000000000000004 (Not exactly 0.3)
```

---

## 🧠 Operator Precedence

JavaScript follows a strict **order of operations** (like math):

1. **Parentheses**
2. **Exponents**
3. **Multiplication / Division / Modulus**
4. **Addition / Subtraction**

➡️ If operators share the same precedence, execution is **left-to-right**.

### ✅ Examples:

```javascript
console.log(1 + 1 * 5); // 6 → Multiplication first, then addition
console.log((1 + 1) * 5); // 10 → Parentheses first
```

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
