# 🚀 Day 52 : Justify Content

`justify-content` is a powerful property in CSS Flexbox that controls how items are positioned along the **main axis** of a flex container.

This exercise demonstrates different values of `justify-content` with visual examples.

---

## 📚 **Key Concepts**

### ✅ `justify-content` Values:

| Value           | Behavior                                        |
| --------------- | ----------------------------------------------- |
| `flex-start`    | Items align to the start of the main axis       |
| `flex-end`      | Items align to the end of the main axis         |
| `center`        | Items are centered along the main axis          |
| `space-between` | Items are evenly distributed; no space at edges |
| `space-around`  | Items have equal space around them              |
| `space-evenly`  | Items have equal space between and around them  |

---

## 🧩 **Live Code Preview**

```html
<h2>Flex Start</h2>
<div class="parent" style="justify-content: flex-start;">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
</div>
```

```html
<h2>Flex End</h2>
<div class="parent" style="justify-content: flex-end;">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
</div>
```

```html
<h2>Center</h2>
<div class="parent" style="justify-content: center;">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
</div>
```

```html
<h2>Space Between</h2>
<div class="parent" style="justify-content: space-between;">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
</div>
```

```html
<h2>Space Around</h2>
<div class="parent" style="justify-content: space-around;">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
</div>
```

```html
<h2>Space Evenly</h2>
<div class="parent" style="justify-content: space-evenly;">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
</div>
```

```css
.parent {
  background-color: aqua;
  display: flex;
}

.one {
  height: 100px;
  width: 100px;
  background-color: blue;
}

.two {
  height: 100px;
  width: 300px;
  background-color: red;
}

.three {
  height: 100px;
  width: 50px;
  background-color: green;
}
```

---

## 🧠 **Use Cases**

- Centering navigation links horizontally
- Spacing buttons evenly in a container
- Aligning elements with flexible widths

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
