# 🚀 **Day 10: Understanding the `id` Attribute in HTML**

The `id` attribute assigns a **unique identifier** to an element, making it powerful for **styling (CSS)** and **manipulation (JavaScript).** Let's explore! 🔥

## 🏗 **Why Use the `id` Attribute?**

✅ **Unique Identification** – Each `id` should be unique within a page.  
✅ **CSS Styling** – Directly target elements with `#id`.  
✅ **JavaScript Manipulation** – Quickly access and modify elements using `getElementById()`.

---

## 🎨 **Styling with CSS**

Use `#id` to apply styles to a specific element.

```html
<div id="highlight">
  <p>This paragraph is highlighted.</p>
</div>
```

```css
#highlight {
  background-color: yellow;
  padding: 10px;
  border-radius: 5px;
}
```

---

## 🛠 **Manipulating with JavaScript**

Access elements and dynamically change content using `getElementById()`.

```html
<div id="message">
  <p>Hello, Developer! 👨‍💻👩‍💻</p>
</div>
<button onclick="changeText()">Click Me</button>
```

```js
function changeText() {
  document.getElementById("message").innerHTML = "<p>You've changed me! 🎉</p>";
}
```

👉 **Try it out** – Click the button and see the magic happen! 🎩✨

---

## 📌 **Learning Goals**

🔹 Understand how `id` helps with **styling and JavaScript**.  
🔹 Learn when to use `id` vs. `class`.  
🔹 Build dynamic web pages with `getElementById()`.

---

## 💡 **Pro Tip:**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
