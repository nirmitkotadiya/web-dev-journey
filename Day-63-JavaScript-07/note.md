# 🚀 Day 63: JavaScript Day-07 - Condition

Today we learned how to use **conditional statements** in JavaScript using `if`, `else if`, and `else`, along with logical operators.

---

## 🧠 What You’ll Learn

- Conditional logic using `if-else` statements
- Logical operators: `!` (NOT), `||` (OR), `&&` (AND)
- Real-world condition example: age classification

---

## 🔤 Syntax: `if-else` Statements

```js
if (condition) {
  // Executes if the condition is true
} else if (anotherCondition) {
  // Executes if the previous condition is false and this one is true
} else {
  // Executes if none of the above conditions are true
}
```

---

## 🔁 Logical Operators

| Operator | Meaning | Example           | Result  |
| -------- | ------- | ----------------- | ------- |
| `!`      | NOT     | `!true`           | `false` |
| `\|\|`   | OR      | `true \|\| false` | `true`  |
| `&&`     | AND     | `true && false`   | `false` |

---

## ✅ Real-Life Example: Age Classifier

```js
let age = 2025 - 1997; // Calculate age

if (age < 18) {
  console.log("You are a kid");
} else if (age > 18 && age < 60) {
  console.log("You are an adult");
} else {
  console.log("You are a senior");
}
```

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
