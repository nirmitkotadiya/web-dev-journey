## 🚀 Day 31 : Inheritance

### Specificity:
Specificity in CSS determines which style rule is applied to an element when multiple rules could match. It's calculated based on the type of selectors used.

**Order of Specificity (Low → High):**
1. Type selectors (e.g., `div`, `p`)
2. Class selectors, attribute selectors, pseudo-classes (e.g., `.box`, `:hover`)
3. ID selectors (e.g., `#main`)
4. Inline styles (e.g., `style="..."`)

> The more specific the selector, the higher its priority in applying styles.

### Inheritance:
Inheritance means that some CSS properties automatically pass from parent elements to child elements. It helps reduce redundancy in CSS.

**Common Inherited Properties:**
- `color`
- `font-family`
- `line-height`
- `visibility`

**Not Inherited by Default:**
- `margin`
- `padding`
- `border`
- `width`, `height`

**Example:**
```css
body {
  color: #333;
  font-family: 'Segoe UI', sans-serif;
}
```
All child elements inside `<body>` will inherit these styles unless overridden.

---

## 💡 **Pro Tip**  
> _"Keep learning and keep building—practice makes progress!"_ 💪  

🚀 **Stay curious, explore, and start coding today!** 