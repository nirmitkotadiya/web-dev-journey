# 🚀 Day 59: JavaScript Day-03 - JavaScript Strings

Today we dove into how **strings work in JavaScript**, covering everything from quotes to type coercion and template literals.

---

## 📚 JavaScript Strings

Strings are used to store and manipulate text.  
They are defined using:

- **Single quotes** `' '`
- **Double quotes** `" "`
- **Backticks (Template literals)** `` ` ` ``

---

## 🧪 Code Examples

### ✅ Using Quotes

```js
console.log("Single quotes");
console.log("Double quotes");
console.log(`Backticks with interpolation`);
```

---

### ✅ String Concatenation

```js
console.log("Hello" + " " + "World"); // Hello World
```

---

### ✅ String + Variable

```js
const name = "John";
console.log("Hello " + name); // Hello John
```

---

### ✅ String + Number (Type Coercion)

```js
console.log("Hello" + 3); // Hello3
console.log(3 + 3); // 6
console.log("3" + "3"); // 33
```

---

### ✅ Coercion Order (Left to Right)

```js
console.log("sum = " + 3 + 3); // sum = 33
console.log("sum = " + (3 + 3)); // sum = 6
```

---

### ✅ Template Literals (Backticks)

```js
console.log(`I'm a software developer`); // I'm a software developer
console.log(`sum = ${3 + 3}`); // sum = 6
```

---

## 🧠 Key Concepts

| Concept               | Description                                                                 |
| --------------------- | --------------------------------------------------------------------------- |
| **Concatenation**     | Joining strings using the `+` operator.                                     |
| **Type Coercion**     | JS automatically converts types during operations (e.g., number to string). |
| **Template Literals** | Use backticks `` ` `` and `${}` to embed expressions or variables.          |

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
