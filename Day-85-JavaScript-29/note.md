# 🚀 Day 85: JavaScript Day-29 – clearInterval, break, continue, forEach 💪

This project is part of a JavaScript learning series and demonstrates important control flow and timer methods in JavaScript. It includes:

- Using `setInterval` with `clearInterval`
- Loop control using `break` and `continue`
- Iterating over an array using `forEach`

---

## 🔍 Features

### ⏱️ Timed Counter Using `setInterval` and `clearInterval`

Logs numbers from 1 to 10 at 1-second intervals, then stops automatically.

```js
let counter = 0;
const interval = setInterval(function () {
  counter++;
  console.log(counter);
  if (counter === 10) {
    clearInterval(interval);
  }
}, 1000);
```

---

### 🛑 Loop with `break`

This loop stops execution entirely once the counter reaches 5.

```js
for (let i = 0; i < 10; i++) {
  console.log("break", i);
  if (i === 5) break;
}
```

---

### ⏭️ Loop with `continue`

This loop skips the number 5 and continues with the rest.

```js
for (let j = 0; j < 10; j++) {
  if (j === 5) continue;
  console.log("continue", j);
}
```

---

### 📝 To-Do List with `forEach`

Prints each item from an array along with its index.

```js
let list = ["item 1", "item 2", "item 3", "item 4", "item 5"];
list.forEach(function (item, index) {
  console.log(index + " : " + item);
});
```

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
