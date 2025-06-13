# 🚀 Day 87: JavaScript Day-31 - Git 💪

Welcome to **Day 31** of our dev journey! Today we step into the world of **Git**—the essential tool for version control, team collaboration, and project management.

---

## 📌 What is Git?

Git is a **distributed version control system** that helps developers:

- Track changes in source code
- Collaborate with teams
- Revert to previous versions when something breaks
- Manage code branches for new features or experiments

---

## ⚙️ Basic Git Workflow

```bash
# Initialize a new Git repository
git init

# Check current status
git status

# Add files to staging area
git add filename     # or use . to add all files

# Commit changes with a message
git commit -m "Your commit message"

# Link to remote repository
git remote add origin <repository-url>

# Push changes to remote
git push origin main
```

---

## 🔄 Use Case Example

Let’s say your project crashes after a new deployment.

With Git, you can:

✅ Revert to a previous **working commit**

✅ Debug incrementally

✅ Maintain history and accountability

---

## 👥 Collaboration with Git

```bash
# Clone a remote repo
git clone <repo-url>

# Pull the latest changes
git pull origin main

# Push your own updates
git push origin main
```

Working in a team? Use **branches**:

```bash
git checkout -b feature-login
# make changes
git commit -m "Added login button"
git push origin feature-login
```

---

### 💡 **Pro Tip**

> _"Keep learning and keep building—practice makes progress!"_ 💪

🚀 **Stay curious, explore, and start coding today!**
