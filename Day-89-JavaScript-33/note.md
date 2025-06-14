# 🚀 Day 89: JavaScript Day-33 - JavaScript Modules 💪

## 📦 JavaScript Modules

Modules in JavaScript help **organize code** into reusable files. By using `export` and `import`, you can share variables, functions, or classes between files without polluting the global scope.

---

## ❌ Problem (Without Modules)

**HTML:**

```html
<script src="script.js"></script>
<script src="data.js"></script>
```

**script.js:**

```javascript
const data = "This is a some data";
console.log(data);
```

**data.js:**

```javascript
const data = "This is my new data";
console.log(data);
```

### ❗ Output:

```
This is a some data
Uncaught SyntaxError: Identifier 'data' has already been declared
```

This error occurs because both files declare a variable `data` in the global scope.

---

## ✅ Solution: Use JavaScript ES Modules

## 🛠️ Step 1: Use `type="module"` in HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Day-33 - JavaScript Modules 💪</title>
    <link rel="stylesheet" href="style.css" />

    <!-- Load your module file -->
    <script src="data.js" type="module"></script>
  </head>
  <body></body>
</html>
```

---

## 🛠️ Step 2: Export from `script.js`

```javascript
// script.js
export const data = "This is a some data";
```

You define and export a variable from this file using `export`.

---

## 🛠️ Step 3: Import in `data.js`

```javascript
// data.js
import { data as data2 } from "./script.js";

const data = "This is some new data";

console.log(data); // Output: This is some new data
console.log(data2); // Output: This is a some data
```

Here:

- `data2` is the imported value from `script.js`
- `data` is locally defined in `data.js`
- The `as` keyword helps avoid naming conflicts

---

## 📌 Why Use Modules?

| Benefit                      | Description                        |
| ---------------------------- | ---------------------------------- |
| ✅ Scoped Variables          | No global variable clashes         |
| 📦 Reusable Code             | Import/export logic as needed      |
| 🛠️ Cleaner Project Structure | Organize by features or components |
| 🌐 Native Browser Support    | Supported in all modern browsers   |

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
