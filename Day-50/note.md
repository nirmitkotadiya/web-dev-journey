# 🚀 **Day 50: Main and Cross Axis**

Understanding the **Main Axis** and **Cross Axis** is essential for mastering CSS Flexbox layouts. These two axes determine how flex items are placed inside a flex container.

---

## 🔀 **Main Axis**

- The **main axis** is defined by the `flex-direction` property.
- It is the primary direction in which flex items are laid out.
- Default is **row** (horizontal), so items go left to right.

| `flex-direction`     | Main Axis        |
|----------------------|------------------|
| `row`                | Horizontal (left → right) |
| `row-reverse`        | Horizontal (right → left) |
| `column`             | Vertical (top → bottom)   |
| `column-reverse`     | Vertical (bottom → top)   |

---

## 🎯 **Cross Axis**

- The **cross axis** is perpendicular to the main axis.
- It determines the alignment of items across the secondary direction.
- Controlled by properties like `align-items` and `align-self`.

---

## 🧠 Example Use

```css
.parent {
  display: flex;
  flex-direction: row; /* Main Axis: Horizontal */
  justify-content: center; /* Align on main axis */
  align-items: center; /* Align on cross axis */
}
```

---

### 💡 **Pro Tip**
> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
