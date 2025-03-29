# 🚀 **Day 16: Login and Register Form**

## Login Form
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Login Form</title>
</head>

<body>
    <h1>Login</h1>
    <hr>
    <form>
        <label for="username">Username:</label>
        <input type="text" id="username" required>
        <br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" required minlength="8" title="Minimum length: 8 characters">
        <br>
        <br>
        <button type="submit">Login</button>
    </form>
</body>

</html>
```

## Register Form
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Register Form</title>
</head>

<body>
    <h1>Register</h1>
    <hr>
    <form>
        <label>First Name: <input type="text"></label>
        <br><br>

        <label>Last Name: <input type="text"></label>
        <br><br>

        <label>Email: <input type="email"></label>
        <br><br>

        <label>Password: <input type="password"></label>
        <br><br>

        <label>Address: <textarea rows="10"></textarea></label>
        <br><br>

        Gender:
        <label><input type="radio" name="gender"> Male</label>
        <label><input type="radio" name="gender"> Female</label>
        <br><br>

        <label>
            <select>
                <option disabled selected>Education</option>
                <option>BTech</option>
                <option>MTech</option>
                <option>PhD</option>
            </select>
        </label>
        <br><br>

        <label><input type="checkbox"> Terms</label>
        <br>
        <label><input type="checkbox"> Newsletter</label>
        <br><br>

        <button type="reset">Reset</button>
        <button type="submit">Register</button>
    </form>
</body>

</html>
``` 

---

## 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**