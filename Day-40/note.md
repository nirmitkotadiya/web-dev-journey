## 🚀 Day 40 : Display

Understanding the `display` property in CSS is crucial for layout and structure. It defines how elements are visually represented on the web page.

### 🔹 Block Elements (`display: block`)
- Examples: `<div>`, `<h1>`, `<p>`
- Takes full width (100%) by default
- Starts on a new line
- Respects all box model properties (width, height, margin, padding, border)

### 🔹 Inline Elements (`display: inline`)
- Examples: `<span>`, `<a>`
- Takes only as much width as content
- Does **not** start on a new line
- Ignores `width` and `height`
- Margin, padding, and border may not behave as expected

### 🔹 Inline-Block (`display: inline-block`)
- Behaves like inline (stays in line with others)
- Allows `width`, `height`, `padding`, and `margin` to apply

---

### 🧪 Example Code:
```html
<div style="display: block; background-color: lightblue;">Block Element</div>
<span style="display: inline; background-color: lightgreen;">Inline Element</span>
<span style="display: inline-block; width: 200px; height: 100px; background-color: lightcoral;">Inline-Block</span>
```

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**

