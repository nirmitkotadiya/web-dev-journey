# 🚀 Day 71: JavaScript Day-15 - Instagram Follow Button

Build a simple **Instagram-like Follow/Following button** using JavaScript and the **DOM (Document Object Model)**.

---

## 📚 Topics Covered

- DOM Manipulation using `querySelector`
- Handling button click events
- Toggling UI state dynamically with JavaScript
- Conditional rendering of button text

---

## 🔧 What We Did

### 📌 HTML

```html
<button onclick="followBtn()">Follow</button>
```

### 🧠 JavaScript Logic

```js
function followBtn() {
  let btn = document.querySelector("button");
  if (btn.innerHTML === "Follow") {
    btn.innerHTML = "Following";
  } else {
    btn.innerHTML = "Follow";
  }
}
```

> Alternatively, using the ternary operator:

```js
btn.innerHTML = btn.innerHTML === "Follow" ? "Following" : "Follow";
```

---

## 🔍 Key Concepts

- `document.querySelector()` to target DOM elements
- `innerHTML` for modifying content dynamically
- Event handling using `onclick`
- Conditional logic to toggle states (Follow ↔ Following)

---

> _"Understanding the DOM is essential—it's how your JavaScript talks to the page."_ 🧠

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
