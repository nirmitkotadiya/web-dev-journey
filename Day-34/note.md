## 🚀 Day 34 : Height and Width

In CSS, controlling the height and width of elements is essential for creating responsive and well-structured layouts.

### 📐 Key Concepts:
- `width`: Defines the horizontal space an element occupies.
- `height`: Defines the vertical space an element occupies.
- Units: `px`, `%`, `em`, `rem`, `vh`, `vw` etc.
- Block-level elements respect width/height by default.
- Inline elements like `<span>` **do not** respect `width`/`height` unless converted to block or inline-block.

---

### 🧪 Example Code:
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Height and Width</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h2>This is a heading</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam mollitia illo possimus rerum provident...</p>
    <span>This is a span</span>
    <img src="https://www.w3schools.com/css/img_fjords.jpg" alt="fjords">
</body>
</html>
```

```css
h2 {
    background-color: #669bbc;
    color: #1b263b;
}

p {
    width: 300px;
    background-color: #fca311;
    color: #22333b;
}

span {
    display: inline-block; /* Needed to apply width/height */
    width: 500px;
    height: 500px;
    background-color: #669bbc;
    color: #44413b;
}

img {
    width: 200px;
}
```

> 🎯 **Tip**: Always remember, height/width works differently for block and inline elements.

---

### 💡 **Pro Tip**  
> _"Keep learning and keep building—practice makes progress!"_ 💪  

🚀 **Stay curious, explore, and start coding today!**

