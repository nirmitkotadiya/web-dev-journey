# 🚀 **Day 51: Flex vs Block vs Inline-Block**

Understanding how `block`, `inline`, `inline-block`, and `flex` elements behave is key to mastering layout design in CSS.

---

### 🧩 **What’s Happening in the Code**

- **Parent Container**  
  `display: flex` with `flex-direction: column` makes all direct children stack vertically as flex items.  
  `text-align: center` aligns inline content inside those flex items.

- **Child `<div>` Elements**  
  These default to `display: block`:

  - Occupy 100% of the container width.
  - Start on a new line.

- **Child `<a>` Element (Anchor)**  
  Normally `inline`, so it doesn't accept height/width.  
  As a **flex item**, it's stretched across 100% width automatically!

---

### 💡 **Visual Comparison**

| Element | Default Behavior  | Behavior as Flex Item                    |
| ------- | ----------------- | ---------------------------------------- |
| `<div>` | Block (100% wide) | Remains block-level inside flex          |
| `<a>`   | Inline            | Acts like block (100% width) due to flex |

---

### ✅ **Code Preview**

```html
<div class="parent">
  <div>Text</div>
  <div>Text</div>
  <a href="">Click</a>
</div>
```

```css
.parent {
  background-color: aqua;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.parent div {
  background-color: red;
}

a {
  background-color: yellow;
}
```

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
