# 🚀 Day 69: JavaScript Day-13 - JavaScript LocalStorage

Learn how to store, retrieve, and manage data in the browser using **LocalStorage** along with concepts of JSON conversion.

---

## 📚 Topics Covered

- `localStorage.setItem()` – store data
- `localStorage.getItem()` – retrieve data
- `localStorage.removeItem()` – delete data
- JavaScript Object vs JSON
- `JSON.stringify()` – convert object to string
- `JSON.parse()` – convert string to object

---

## 📌 Code Snippets

### ✅ Store a string value

```js
localStorage.setItem("message", "hello world");
```

### 📥 Get the stored value

```js
let msg = localStorage.getItem("message");
console.log(msg); // hello world
```

### 🧠 Store an object (convert to JSON)

```js
let person = { name: "Nirmit" };
localStorage.setItem("person", JSON.stringify(person));
```

### 🔍 Retrieve and parse object

```js
let data = localStorage.getItem("person");
let result = JSON.parse(data);
console.log(result.name); // Nirmit
```

### ❌ Remove item

```js
localStorage.removeItem("message");
```

---

> _Always use `JSON.stringify()` and `JSON.parse()` when storing and retrieving objects in LocalStorage!_ 💾

---

## 🧠 Keep Exploring

- Try building a simple **to-do list** with LocalStorage persistence.
- Learn the difference between `localStorage` and `sessionStorage`.

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
