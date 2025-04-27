# 🚀 Day 56: YouTube Layout - Navbar Design

This project is a part of the _Daily Frontend Practice Series_.  
Today, we started creating a **YouTube-style Navbar**, starting with the **left side** (`nav-left`) and preparing the structure for the **center** and **right** sections.

---

## ✨ Features

- **Navbar Layout** using Flexbox
- **Left Navbar (`nav-left`)** contains:
  - Hamburger menu icon (bars icon from Unicons)
  - Placeholder for YouTube logo (currently as "Logo" text)
- **Center Navbar (`nav-center`)** and **Right Navbar (`nav-right`)** sections are placeholders for future expansion
- Dark background theme inspired by YouTube
- Responsive basic flex behavior

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (Flexbox)
- Unicons (for icons)

---

## 📜 Code Highlights

### HTML

```html
<nav class="navbar">
  <div class="nav-left">
    <div>
      <i class="uil uil-bars"></i>
    </div>
    <div>Logo</div>
  </div>
  <div class="nav-center">center</div>
  <div class="nav-right">right</div>
</nav>
```

### CSS

```css
* {
  padding: 0;
  margin: 0;
}

body {
  background-color: #0f0f0f;
}

.navbar {
  height: 50px;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left {
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  gap: 10px;
}
```

---

## 📌 Notes

- Used **Unicons** version `v4.0.8` for the hamburger (`uil-bars`) icon.
- Flexbox makes it easy to align all three main sections: left, center, and right.
- Background is set to YouTube's dark mode base color (`#0f0f0f`).

---

## 📈 What's Next?

- Designing the **Center section**: Search bar and search button.
- Designing the **Right section**: Upload, Notification, and User Profile icons.

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
