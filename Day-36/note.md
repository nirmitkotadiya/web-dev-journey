## 🚀 Day 36 : Border

Borders in CSS help define the edges of an element. They can be styled to make content stand out and add structure to a page.

### 📐 Key Concepts:

- `border`: Shorthand for setting width, style, and color.
- `border-width`, `border-style`, `border-color`: Set individually for more customization.
- `border-radius`: Rounds the corners of the border.
- Accepts values in units like `px`, `em`, `%`, etc.
- **Borders add to the element’s size** when set.

---

### 🧪 Example Code:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Border</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="content">This is a div with a border</div>
    <button class="btn login">Login</button>
    <button class="btn signup">Sign Up</button>
</body>

</html>
```

```css
.content {
    border: 10px solid red;  /* Solid red border around the content */
    color: #22333b;
    padding: 10px;
}

.btn {
    padding: 7px 12px;
}

.login {
    border: 3px solid #669bbc;
    background-color: #669bbc;
    color: #003049;
}

.signup {
    border: 3px solid #669bbc;
    background-color: transparent;
    color: #003049;
}
```

> 🎯 **Tip**: A border is different from a margin or padding; it goes around the element and is visible.

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
