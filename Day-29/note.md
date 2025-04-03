## 🚀 Day 29: CSS Selector 🎯  

### 🔍 **What are CSS Selectors?**  
CSS selectors are used to **select HTML elements** and apply styles to them.  

### 🏷️ **Types of CSS Selectors**  

#### 1️⃣ **Element Selector**  
Targets all elements of a specific type.  
```css
p {
    color: red;
}
```

#### 2️⃣ **Class Selector (`.`)**  
Targets elements with a specific class.  
```css
.special {
    color: blue;
}
```
```html
<p class="special">This is a special paragraph.</p>
```

#### 3️⃣ **ID Selector (`#`)**  
Targets an element with a unique ID.  
```css
#main-title {
    font-size: 24px;
}
```
```html
<h1 id="main-title">Welcome</h1>
```

#### 4️⃣ **Group Selector (`,`)**  
Applies the same style to multiple elements.  
```css
h1, h2, p {
    color: green;
}
```

#### 5️⃣ **Child Selector (`>`)**  
Selects **direct** child elements only.  
```css
div > p {
    color: orange;
}
```

#### 6️⃣ **Descendant Selector (Whitespace)**  
Selects **all** nested elements.  
```css
div p {
    color: purple;
}
```

#### 7️⃣ **Pseudo-classes (`:`)**  
Targets elements in a specific state.  
```css
a:hover {
    color: red;
}
```

#### 8️⃣ **Pseudo-elements (`::`)**  
Styles part of an element.  
```css
p::first-letter {
    font-size: 30px;
    color: brown;
}
```

---

## 💡 **Pro Tip**  
> _"Keep learning and keep building—practice makes progress!"_ 💪  

🚀 **Stay curious, explore, and start coding today!**  