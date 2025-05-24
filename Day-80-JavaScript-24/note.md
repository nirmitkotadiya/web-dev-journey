# 🚀 Day 80: JavaScript Day-24 - JavaScript Completing Todo List ✅

A simple and interactive **To-Do List** project using **HTML, CSS, and JavaScript** that lets users add and track their tasks dynamically.

---

### 🔍 Features

- ✅ Add new tasks with one click
- 🚫 Prevents empty inputs
- 📜 Tasks dynamically added to the list
- 💡 User-friendly interface

---

### 🧠 Concepts Covered

- DOM Manipulation with `document.querySelector`
- Handling user input and events
- Dynamic rendering of `<li>` elements in an unordered list
- Using JavaScript arrays to store data

---

### 🧾 Sample Code

```javascript
function addItem() {
  let input = document.querySelector(".todo-input");
  let value = input.value;

  if (value.trim() === "") {
    alert("Please enter a task to add!");
    return;
  }

  list.push(value);
  input.value = "";

  const taskList = document.querySelector("#taskList");
  taskList.innerHTML += `<li>${value}</li>`;
}
```

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
