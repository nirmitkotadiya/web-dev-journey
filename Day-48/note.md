# 🚀 Day 48: CSS Variables 

CSS Variables allow you to define reusable values across your stylesheet, making your code more **maintainable**, **scalable**, and **easier to update**. They're especially useful when dealing with themes or design systems.

---

## ✅ **What are CSS Variables?**

- CSS Variables are declared within a scope using the `--` prefix.
- They can be reused using the `var()` function.

```css
:root {
  --primary: red;
  --text-sm: 20px;
}
```

---

## 🧠 **How to Use**

```css
.btn {
  background-color: var(--primary);
  font-size: var(--text-sm);
}
```

---

## 🧪 **Demo Code**

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Variables</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <button class="btn">Button</button> 
    <button class="btn1">Login</button> 
    <button class="btn2">Sign Up</button>
  </body>
</html>
```

### CSS

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: red;
  --text-sm: 20px;
}

.btn {
  background-color: var(--primary);
  font-size: var(--text-sm);
  padding: 20px; 
}

.btn1 {
  background-color: var(--primary);
  font-size: var(--text-sm);
  padding: 30px; 
}

.btn2 {
  background-color: var(--primary);
  font-size: var(--text-sm);
  padding: 40px;
}
```

---

### 💡 **Pro Tip**
> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
