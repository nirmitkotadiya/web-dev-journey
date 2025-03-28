# 🚀 **Day 13: Forms in HTML**

Forms are a crucial part of web development, allowing users to input and submit data. Whether it's for login pages, search bars, or contact forms, mastering HTML forms is essential!

## 📌 **What You'll Learn**

✅ How to create an HTML form  
✅ Input types and attributes  
✅ Form validation  
✅ Submitting data with GET & POST

---

## 🏗 **Basic HTML Form Structure**

Here's a simple example of an HTML form:

```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <button type="submit">Submit</button>
</form>
```

📌 **Key Elements:**

- `<form>`: Defines the form
- `<input>`: Various input fields (text, email, password, etc.)
- `<label>`: Describes the input field
- `<button>`: Submits the form

---

## 🎯 **Key Form Attributes**

| Attribute     | Description                             |
| ------------- | --------------------------------------- |
| `action`      | Defines where the form data is sent     |
| `method`      | Specifies HTTP method (`GET` or `POST`) |
| `required`    | Makes an input field mandatory          |
| `placeholder` | Displays a hint inside the input field  |
| `disabled`    | Disables input field                    |

---

## 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
