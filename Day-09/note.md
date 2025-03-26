# Day 9: Hyperlinks in HTML 🔗

Reference to another resource, example a webpage.

## **Anchor Tag**
The `<a>` tag is used to create hyperlinks in HTML.

```html
<a>Click Me</a>
```

### Example:
```html
<a href="https://www.example.com">Click Me</a>
```
This creates a clickable link that redirects to `https://www.example.com`.

---

## **Attributes**
HTML anchor tags support several attributes that provide additional functionality:

| Attribute | Description |
|-----------|-------------|
| `href` | Specifies the URL of the link |
| `target` | Defines where to open the link (`_blank`, `_self`, `_parent`, `_top`) |
| `title` | Adds a tooltip when hovering over the link |
| `rel` | Specifies the relationship between the current and linked document |

Example with attributes:
```html
<a href="https://www.example.com" target="_blank" title="Go to Example">Visit Example</a>
```

---

## **Types of Paths**
Hyperlinks can be created using different types of paths:

### 1️⃣ **Absolute Path** 📍
- A full URL that includes the protocol (`http://` or `https://`).
- Example:
  ```html
  <a href="https://www.example.com">Go to Example</a>
  ```

### 2️⃣ **Relative Path** 🔄
- Links to a file relative to the current location.
- Example:
  ```html
  <a href="/about.html">About Us</a>
  ```
- If the current page is `index.html`, clicking this link will navigate to `about.html` within the same directory.

---

## 💡 **Pro Tip:**  
> _"Keep learning and keep building—practice makes progress!"_ 💪  

🚀 **Stay curious, explore, and start coding today!**