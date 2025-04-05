## 🚀 Day 32: Pseudo Element

Pseudo-elements in CSS allow you to style specific parts of an element's content without adding extra HTML. They are written with a double colon `::`.

### Common Pseudo-Elements:
- `::before` – Inserts content **before** an element's content.
- `::after` – Inserts content **after** an element's content.
- `::first-letter` – Targets the **first letter** of a block element.
- `::first-line` – Targets the **first line** of a block element.

### Example:
```css
p::first-letter {
  font-size: 2rem;
  color: red;
}

h1::after {
  content: " 🚀";
  color: gold;
}
```

These are useful for adding decorations or effects without modifying the HTML structure.

---

## 💡 **Pro Tip**  
> _"Keep learning and keep building—practice makes progress!"_ 💪  

🚀 **Stay curious, explore, and start coding today!**