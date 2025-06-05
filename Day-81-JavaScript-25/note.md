# 🚀 Day 81: JavaScript Day-25 - To-Do List with Delete Button

A simple JavaScript-based **To-Do List** app that allows users to:

- Add tasks with a title and priority
- Display them in a list
- Delete individual tasks

---

## 🛠️ Features

- ✅ Add a new task with a title and priority
- 🗑️ Delete a specific task using the delete button
- 🧹 Input fields reset after task submission
- 🔁 Real-time list rendering after add/delete

---

## 🔧 How It Works

### HTML

- Two input fields: one for the task, one for its priority
- Add button to trigger `addItem()`
- Tasks are displayed as an unordered list with delete buttons

### JavaScript

#### `addItem()`

- Reads values from the input fields
- Pushes a task object (`{ title, priority }`) into the `list` array
- Resets the input fields
- Calls `renderList()` to update the UI

#### `renderList()`

- Loops through `list` array
- Creates list items dynamically with title, priority, and a delete button
- Injects the list into the DOM

#### `deleteItem(index)`

- Removes task at the given index
- Re-renders the updated list

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
