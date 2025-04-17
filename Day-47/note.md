# 🚀 Day 47: `em`, `vw`, and `vh` in CSS

CSS offers several **relative units** to build flexible and responsive layouts. Today, we explore three commonly used ones: `em`, `vw`, and `vh`.

---

## 📏 Units Overview

### 🔹 `em` — Relative to the Parent Element's Font Size
- `1em = font-size of the parent`
- Inherits and multiplies based on its parent’s font size.
```css
.btn {
  font-size: 10px;
  padding: 0.5em 1em; /* 5px top/bottom, 10px left/right */
}
```

### 🔹 `vw` — Viewport Width
- `1vw = 1% of the viewport width`
- Scales with the width of the browser window.
```css
.hero {
  width: 80vw; /* 80% of the viewport width */
}
```

### 🔹 `vh` — Viewport Height
- `1vh = 1% of the viewport height`
- Scales with the height of the browser window.
```css
.hero {
  height: 80vh; /* 80% of the viewport height */
}
```

---

## 🧪 Example

```html
<div class="hero"></div>
```

```css
.hero {
  width: 80vw;
  height: 80vh;
  background-color: aqua;
}
```

---

## ✅ When to Use

| Unit | Use Case |
|------|----------|
| `em` | Padding/margin relative to text size |
| `vw` | Width-based responsive designs |
| `vh` | Full-screen sections or hero banners |


---

> _"Mastering relative units helps you create scalable and responsive UIs with minimal media queries."_ 💪


🚀 **Design smarter, not harder—use em, vw, and vh like a pro!**

---

### 💡 **Pro Tip**
> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
