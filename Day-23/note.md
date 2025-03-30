# 🚀 Day 23: HTML Tables

## 📌 Overview
HTML tables are used to display data in a structured, grid format. They consist of rows and columns, making it easier to organize and present information in a readable way.

---

## 🏗 **Basic Table Structure**
```html
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>
```
✅ `<table>` – Defines the table.
✅ `<tr>` – Defines a table row.
✅ `<th>` – Defines a table header cell.
✅ `<td>` – Defines a table data cell.

---

## 🎨 **Table Styling with CSS**
```css
table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    border: 1px solid black;
    padding: 10px;
    text-align: left;
}
th {
    background-color: #f4f4f4;
}
```

---

## 🔥 **Advanced Table Elements**

- `<thead>` – Groups the header content.
- `<tbody>` – Groups the body content.
- `<tfoot>` – Groups the footer content.
- `colspan` – Merges multiple columns.
- `rowspan` – Merges multiple rows.

## Example:

```html
<table>
    <thead>
        <tr>
            <th colspan="2">Merged Header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
</table>
```
---

## 💡 **Pro Tip**
> _"Keep learning and keep building—practice makes progress!"_ 💪
## 
🚀 **Stay curious, explore, and start coding today!**
