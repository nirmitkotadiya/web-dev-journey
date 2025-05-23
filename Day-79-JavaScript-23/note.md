# 🚀 Day 79: JavaScript Day-23 - JavaScript Array Practice Time 💪

## 📌 What You’ll Practice

All tasks are performed using **loops** (no advanced methods like `map`, `filter`, or `reduce`—just raw logic).

### 🔁 Array Tasks

1. ✅ **Sum of All Numbers**
2. 🔍 **Find Maximum Number**
3. 🔎 **Find Minimum Number**
4. 🧮 **Count Even Numbers**
5. 🔢 **Count Occurrences of a Number**
6. 🔄 **Reverse an Array**
7. ❌ **Remove Duplicates**
8. ❓ **Check if Array Contains a Value**
9. ✖️ **Double All Values**
10. 🚫 **Filter Out Odd Numbers**

---

## 🔍 Sample Array

```javascript
let arr = [4, 2, 7, 4, 9, 2, 1, 6];
```

---

### 1️⃣ **Sum of All Numbers**

```javascript
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("Sum:", sum);
```

---

### 2️⃣ **Find Maximum Number**

```javascript
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}
console.log("Max:", max);
```

---

### 3️⃣ **Find Minimum Number**

```javascript
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) min = arr[i];
}
console.log("Min:", min);
```

---

### 4️⃣ **Count Even Numbers**

```javascript
let evenCount = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) evenCount++;
}
console.log("Even Numbers Count:", evenCount);
```

---

### 5️⃣ **Count Occurrences of a Number** (e.g., 2)

```javascript
let target = 2;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) count++;
}
console.log(`${target} occurs ${count} times`);
```

---

### 6️⃣ **Reverse an Array**

```javascript
let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}
console.log("Reversed Array:", reversed);
```

---

### 7️⃣ **Remove Duplicates**

```javascript
let unique = [];
for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < unique.length; j++) {
    if (arr[i] === unique[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    unique.push(arr[i]);
  }
}
console.log("Array without duplicates:", unique);
```

---

### 8️⃣ **Check if Array Contains a Value** (e.g., 9)

```javascript
let valueToFind = 9;
let found = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === valueToFind) {
    found = true;
    break;
  }
}
console.log(`${valueToFind} found?`, found);
```

---

### 9️⃣ **Double All Values**

```javascript
let doubled = [];
for (let i = 0; i < arr.length; i++) {
  doubled.push(arr[i] * 2);
}
console.log("Doubled Array:", doubled);
```

---

### 🔟 **Filter Out Odd Numbers**

```javascript
let evenOnly = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenOnly.push(arr[i]);
  }
}
console.log("Even Numbers Only:", evenOnly);
```

---

## ✅ Learning Goals

- Reinforce basic array manipulations
- Sharpen loop logic
- Improve debugging and console tracing
- Get comfortable using `for` and `while` loops with arrays

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
