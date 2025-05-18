# 🚀 Day 74: JavaScript Day-18 - JavaScript Array

Today’s practice dives into **JavaScript Arrays**, one of the most essential data structures for working with lists of values. Arrays in JS are flexible and can hold mixed data types—including objects!

---

## 🧠 Concepts Covered

- ✅ How to **create** an array
- 🔄 How to **change values** in an array
- 🔍 How to **access elements** by index
- 🆚 Difference between **Array vs Object**
- 📏 Using `.length` property
- 🔠 Using `typeof` on arrays
- ✅ Checking if a variable is an array with `Array.isArray()`

---

## 💻 Code Walkthrough

```javascript
// ✅ Creating an array
let arr = [100, 200, 300, 400];
console.log(arr); // [100, 200, 300, 400]
console.log(arr.length); // 4
console.log(arr[0]); // 100
console.log(arr[arr.length - 1]); // 400

// 🔄 Updating array value
arr[0] = "Nirmit";
console.log(arr); // ["Nirmit", 200, 300, 400]

// 💡 Mixed value array
let arr2 = [
  "Nirmit",
  200,
  {
    name: "Nirmit",
    age: 25,
    city: "Bangalore",
  },
  400,
];

console.log(arr2[2].name); // Nirmit
console.log(arr2[2].city); // Bangalore

// 🔎 Type checks
let arr3 = [1, 2, 3, 4, 5];
console.log(typeof arr3); // object
console.log(Array.isArray(arr3)); // true
```

---

## 🆚 Array vs Object (at a glance)

| Feature           | Array             | Object                    |
| ----------------- | ----------------- | ------------------------- |
| Ordered values    | ✅ Yes            | ❌ No                     |
| Access by index   | ✅ Yes (`arr[0]`) | ❌ No (`obj.key` instead) |
| `typeof` result   | `object`          | `object`                  |
| `Array.isArray()` | `true`            | `false`                   |

---

## 🛠 Pro Tips

- Arrays are **indexed collections** while objects are **key-value pairs**.
- `typeof []` returns `'object'` — use `Array.isArray()` to confirm it's an array.
- Arrays can store **any data type**, even objects or functions.

---

## 🔮 Future Practice Ideas

- Loop through arrays using `for`, `for...of`, and `forEach`.
- Try array methods like `.push()`, `.pop()`, `.map()`, `.filter()`.
- Build dynamic UI components with arrays in JavaScript frameworks.

---

> _"Practice using arrays with real data—like to-do lists, scores, or user inputs."_ 🔁

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
