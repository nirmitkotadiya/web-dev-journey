# 🚀 **Day 49: Flexbox**

Flexbox is a powerful layout module in CSS used for designing responsive and efficient layout structures. It allows you to align, distribute, and space elements inside a container—even when their sizes are unknown.

---

## 🧩 **What is Flexbox?**

- Flexbox is activated by setting `display: flex` on a container.
- It provides flexibility for aligning items both horizontally and vertically.
- Great for building responsive layouts with minimal code.

---

## ⚙️ **Key Concepts**

- **Main Axis** (default: horizontal)
- **Cross Axis** (perpendicular to main axis)
- **Properties**:
  - `display: flex`
  - `justify-content`
  - `align-items`
  - `flex-direction`
  - `flex-wrap`
  - `gap`

---

## 🧪 **Demo Code**

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flex Box</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="parent">
      <div class="item-1">
        <div class="one">one</div>
        <div class="two">two</div>
      </div>
      <div class="item-2">2</div>
      <div class="item-3">3</div>
      <div class="item-4">4</div>
      <div class="item-5">5</div>
    </div>
  </body>
</html>
```

### CSS

```css
.parent {
  height: 500px;
  background-color: aqua;
  display: flex;
}

.item-1,
.item-2,
.item-3,
.item-4,
.item-5 {
  width: 100px;
  height: 100px;
}

.item-1 {
  background-color: red;
  display: flex;
}

.item-2 {
  background-color: blue;
}

.item-3 {
  background-color: green;
}

.item-4 {
  background-color: yellow;
}

.item-5 {
  background-color: orange;
}

.one {
  background-color: antiquewhite;
}

.two {
  background-color: aquamarine;
}
```

---

### 💡 **Pro Tip**
> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
