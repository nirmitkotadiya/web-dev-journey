## 🚀 Day 30: Pseudo Selectors

### 🎯 What are Pseudo Selectors?
Pseudo selectors in CSS allow you to apply styles to elements based on their state or position. They help create interactive and dynamic designs without additional JavaScript.

### 🔹 Commonly Used Pseudo Selectors

1. **State-Based Selectors:**
   - `:hover` – Applies styles when an element is hovered.
   - `:focus` – Targets an element when it gains focus (e.g., input fields).
   - `:active` – Styles an element when it is actively clicked.

2. **Structural Selectors:**
   - `:first-child` – Targets the first child of a parent element.
   - `:last-child` – Targets the last child of a parent element.
   - `:nth-child(n)` – Styles the nth child of a parent.
   - `:nth-of-type(n)` – Selects the nth element of a specific type.

3. **Form-Related Selectors:**
   - `:checked` – Styles checkboxes or radio buttons when checked.
   - `:disabled` – Targets disabled form elements.
   - `:required` – Applies styles to required input fields.

### 🛠️ Example Code:
```css
/* Change button color on hover */
button:hover {
    background-color: blue;
    color: white;
}

/* Style the first paragraph inside a div */
div p:first-child {
    font-weight: bold;
}

/* Style even table rows */
tr:nth-child(even) {
    background-color: #f2f2f2;
}
```

### 🎨 Why Use Pseudo Selectors?
 ✅ Improve user experience with hover effects.

 ✅ Reduce JavaScript dependency for simple UI interactions.

 ✅ Enhance readability and design consistency.

---

## 💡 **Pro Tip**  
> _"Keep learning and keep building—practice makes progress!"_ 💪  

🚀 **Stay curious, explore, and start coding today!**

