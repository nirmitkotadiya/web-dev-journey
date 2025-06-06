# 🚀 Day 82: JavaScript Day-26 - JavaScript Scope & Hoisting 👨‍💻

Welcome to Day 26 of your JavaScript journey! Today’s focus is on two core JavaScript concepts: **Scope** and **Hoisting**. Understanding these will help you write more predictable and bug-free code.

---

## 📚 Topics Covered

### ✅ JavaScript Scope

- **Global Scope**: Variables declared outside functions or blocks are accessible anywhere in the code.
- **Local/Block Scope** (`let`, `const`): Variables are only accessible within the block they are defined in.
- **Function Scope** (`var`): `var` is function-scoped, which can lead to unexpected behavior.

```js
// Example: Block Scope with let
if (true) {
  let x = 10;
  console.log(x); // ✅ Accessible here
}
console.log(x); // ❌ ReferenceError: x is not defined
```

---

### ✅ JavaScript Hoisting

- **Hoisting** is JavaScript’s behavior of moving **declarations** to the top of the current scope during compilation.
- `var` declarations are hoisted and initialized with `undefined`.
- `let` and `const` declarations are hoisted but not initialized, leading to a **Temporal Dead Zone (TDZ)**.

```js
// Example: var hoisting
console.log(a); // undefined
var a = 5;

// Example: let hoisting
console.log(b); // ❌ ReferenceError
let b = 10;
```

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
