# 🚀 Day 60: JavaScript Day-04 - Running HTML, CSS, and JS Together

Today, we learned how to **run HTML, CSS, and JavaScript together** in a single project. This marks the foundation of building fully functional and styled web pages.

---

## 📂 Project Structure

```plaintext
/ (root)
├── index.html    # Structure
├── style.css     # Styling
├── script.js     # Behavior
```

---

## 🧠 What You’ll Learn

- How to **link CSS and JS** files in an HTML document.
- How to write basic **JavaScript logic** and **CSS styling**.
- How all three technologies **work together** in a simple project.

---

## 📜 Code Highlights

### ✅ `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Day-04 : Running HTML, CSS, JS together</title>
    <link rel="stylesheet" href="style.css" />
    <script src="script.js"></script>
  </head>

  <body>
    <button>Click Me</button>
  </body>
</html>
```

---

### ✅ `style.css`

```css
body {
  background-color: black;
}
```

---

### ✅ `script.js`

```js
console.log(2 + 2); // 4
console.log("Hello World"); // Hello World
console.log("hello " + 3); // hello 3
```

---

## 🛠️ Tech Stack

- **HTML5** — Markup and structure
- **CSS3** — Styling and presentation
- **JavaScript (ES6)** — Behavior and logic

---

## 🧩 How It Works

| File         | Role                                  |
| ------------ | ------------------------------------- |
| `index.html` | Acts as the backbone of the web page. |
| `style.css`  | Adds visual design and layout.        |
| `script.js`  | Adds interactivity and functionality. |

---

## ✅ Best Practices

- Keep HTML, CSS, and JS **separate** for clean code organization.
- Link external CSS using `<link rel="stylesheet">`.
- Link external JS using `<script src="..."></script>`.
- Place the script tag at the end of the `<body>` or with `defer` for performance (optional).

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
