# 🚀 Day 55: Position

Understanding how elements are positioned and layered on a web page is key to crafting modern, responsive layouts. Today’s focus is on `position` and `z-index`—the duo behind stacking, overlapping, and element placement control.

---

## 📚 **Key Concepts**

### ✅ CSS `position` values:

| Value      | Description                                                      |
| ---------- | ---------------------------------------------------------------- |
| `static`   | Default. Elements follow the normal flow.                        |
| `relative` | Element is positioned relative to its normal position.           |
| `absolute` | Positioned relative to the nearest positioned ancestor.          |
| `fixed`    | Positioned relative to the viewport (always stays in place).     |
| `sticky`   | Acts like `relative` until it crosses a threshold, then `fixed`. |

---

### 🧭 `z-index`

`z-index` controls the **stacking order** of positioned elements. Higher values sit "on top."

```css
.box {
  position: absolute;
  z-index: 10;
}
```

> ✅ Only works on elements with `position` set to something **other than** `static`.

---

## 💻 **Example Setup**

```html
<div class="wrapper">
  <div class="box one">One</div>
  <div class="box two">Two</div>
  <div class="box three">Three</div>
</div>
```

```css
.wrapper {
  position: relative;
}

.box {
  width: 100px;
  height: 100px;
  position: absolute;
}

.one {
  top: 0;
  left: 0;
  background: red;
  z-index: 1;
}

.two {
  top: 20px;
  left: 20px;
  background: blue;
  z-index: 2;
}

.three {
  top: 40px;
  left: 40px;
  background: green;
  z-index: 3;
}
```

---

## 🛠️ **Use Cases**

- Creating dropdowns, modals, and overlays
- Custom tooltips
- Fixing navigation bars on scroll
- Animations and layering effects

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
