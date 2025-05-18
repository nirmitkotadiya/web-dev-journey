# 🚀 Day 72: JavaScript Day-16 - Login and Register Form

A beginner-friendly **JavaScript project** that builds a simple **Login and Register Form** using HTML, CSS, and JavaScript with `localStorage` for basic credential handling. This project helps you understand form validation, event handling, and storing/retrieving data locally.

---

## 🧠 Concepts Covered

- ✅ DOM Manipulation
- ✅ `localStorage` for basic data persistence
- ✅ Form validation using JavaScript
- ✅ Using `onclick` as an event listener
- ✅ Event types: `click`, `keydown`, `keyup`, `keypress` (conceptual)

---

## 🔐 Functionality

### ✅ Registration

- Collects `username` and `password`
- Validates non-empty inputs
- Saves user data as a JSON object in `localStorage`

### 🔑 Login

- Reads user credentials from `localStorage`
- Compares input credentials with stored data
- Displays success or error message accordingly

---

## 🧩 JavaScript Logic

```js
// 🚀 Login and Register Form Logic using localStorage

// ✅ Register function
function register() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  if (username !== "" && password !== "") {
    const userData = {
      username,
      password,
    };

    // Save user data as JSON in localStorage
    localStorage.setItem("user", JSON.stringify(userData));
    alert("✅ Registered successfully");
  } else {
    alert("⚠️ Please fill in all fields");
  }
}

// 🔐 Login function
function login() {
  let username = document.getElementById("loginusername").value.trim();
  let password = document.getElementById("loginpassword").value.trim();

  if (username !== "" && password !== "") {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const userData = JSON.parse(storedUser);

      if (userData.username === username && userData.password === password) {
        alert("🎉 Logged in successfully");
      } else {
        alert("❌ Invalid username or password");
      }
    } else {
      alert("⚠️ No user found. Please register first.");
    }
  } else {
    alert("⚠️ Please fill in all fields");
  }
}
```

---

## 🚧 Limitations

- This is a frontend-only project.
- No password encryption — credentials are stored in plain text.
- Not suitable for production use — **for learning purposes only**.

---

## 📌 Future Improvements (Ideas 💡)

- 👁 Add a password visibility toggle
- ✔️ Use form validation with regular expressions
- ⚠️ Display inline error messages under each input
- 🔁 Replace `onclick` with `addEventListener`
- 🔒 Add session storage or auto-expiry for login

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
