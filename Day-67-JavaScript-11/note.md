# 🚀 Day 67: JavaScript Day-11 - JavaScript Objects

JavaScript objects are collections of key–value pairs that help group related data and functions together.

---

## 📦 JavaScript Object Basics

```js
let personName = "Nirmit";
let personAge = 25;
let profession = "Software Engineer";

const person = {
  name: personName,
  age: personAge,
  profession: profession,
};

console.log(person); // Entire object
```

---

## 🔍 Accessing Object Properties

```js
console.log(person.name); // "Nirmit"
console.log(person.age); // 25
console.log(person.profession); // "Software Engineer"
```

---

## 🔄 Updating Properties

```js
person.name = "Nirmit Kotadiya";
person.age = 26;
person.profession = "Full Stack Developer";
```

---

## ❌ Deleting a Property

```js
delete person.profession;
console.log(person);
```

---

## 📌 Data Type Check

```js
console.log(typeof person); // "object"
```

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
