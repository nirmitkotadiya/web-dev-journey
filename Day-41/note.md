## 🚀 Day 41: CSS Reset

### 📌 Description
CSS Reset is a CSS technique used to remove the default styling provided by different browsers to ensure consistency across all browsers. It eliminates inconsistencies in margin, padding, font-size, etc., by providing a clean slate.

### 🧾 Why Use CSS Reset?
- Different browsers apply different default styles to elements.
- Resetting these styles makes your layout consistent across browsers.
- Often used in combination with `normalize.css`.

### 🧰 Files Used:
- `style.css`: Custom styles
- `normalize.css`: CSS normalization

### 🧪 HTML Structure:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Reset</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="normalize.css" />
  </head>
  <body>
    <h1>Heading</h1>
    <p>This is para</p>
  </body>
</html>
```

### 🎨 CSS Reset (style.css)
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### 📦 Normalize.css
Normalize.css makes elements render more consistently and in line with modern standards. Unlike CSS resets, it doesn’t remove all default styles but preserves useful defaults.

[normalize.css](./normalize.css) — Full normalize.css source included in this file.

---

### 💡 **Pro Tip**
> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**