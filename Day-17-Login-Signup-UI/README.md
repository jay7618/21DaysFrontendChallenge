# 🔐 Day 17: Login/Signup UI with Validation

## 📝 Description
A complete authentication UI system with Login and Signup forms featuring real-time validation, password confirmation, duplicate email detection, and localStorage persistence. Includes glassmorphism design, toggle tabs, and Enter key support.

## ✨ Features
- **Dual Forms** - Login and Signup with smooth toggle
- **Real-time Validation** - Instant error messages for all fields
- **Email Validation** - Regex pattern for valid email format
- **Password Requirements** - Minimum 6 characters
- **Confirm Password** - Matching password validation
- **Duplicate Email Check** - Prevents existing email registration
- **User Storage** - localStorage persistence for users
- **Welcome Message** - Personalized login greeting
- **Enter Key Support** - Press Enter to submit forms
- **Glassmorphism Design** - Modern blur effect UI
- **Form Switching** - Toggle between Login and Signup
- **Auto Clear** - Clears fields on form switch
- **Error Clearing** - Errors disappear on next input

## 🛠 Tech Used
- HTML5
- CSS3 (Glassmorphism, Flexbox, Backdrop-filter)
- JavaScript (ES6+)
- LocalStorage API
- Regex for email validation

## 🔄 How It Works

### Signup Flow:
1. User fills: Full Name, Email, Password, Confirm Password
2. Click Sign Up OR press Enter
3. Validation checks:
   - Name: not empty, minimum 2 characters
   - Email: valid format, not already registered
   - Password: minimum 6 characters
   - Confirm: matches password
4. If validation fails → show error messages
5. If validation passes → save user to localStorage
6. Show success alert → switch to Login form

### Login Flow:
1. User enters: Email, Password
2. Click Login OR press Enter
3. Validation checks:
   - Email: not empty, valid format
   - Password: not empty
4. If validation fails → show error messages
5. If validation passes → check credentials
6. If user exists → welcome alert, clear form
7. If invalid → show error message

### Validation Rules:

| Field | Rule | Error Message |
|-------|------|---------------|
| Name | Not empty, ≥2 chars | Name must be at least 2 characters |
| Email | Valid format | Enter a valid email address |
| Email (Signup) | Not already used | Email already registered |
| Password | ≥6 characters | Password must be at least 6 characters |
| Confirm | Matches password | Passwords do not match |

# 🔐 Authentication UI Project

## 🎨 UI Features

| Feature | Description |
|---------|-------------|
| 🌌 Gradient Background | Dark purple to deep blue |
| 🪟 Glassmorphism Card | Backdrop blur with transparency |
| 🔘 Toggle Buttons | Pill-shaped with gradient active state |
| ✨ Input Fields | Glow effect on focus |
| ❌ Error Messages | Red text below each field |
| 🚀 Submit Button | Gradient purple with hover lift |

---

## 🚧 Challenges Faced

### 📧 Email Validation Regex
- Ensuring all valid email formats pass correctly

### 👥 Duplicate Email Check
- Using `some()` method to check existing users

### 🔄 Form Switching
- Clearing errors and input fields when switching forms

### ⌨️ Enter Key Support
- Adding event listeners to multiple input fields

### 🔑 Password Confirmation
- Comparing password and confirm password fields

### 💾 Current User Storage
- Saving session data separately for logged-in users

---

## 💡 Key Learnings

- Regex pattern  
  ```js
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  ```  
  validates email properly

- `some()` method checks if email already exists in users array
- `Date.now()` creates unique user IDs
- `toISOString()` stores timestamps in standard format
- Enter key listeners improve form usability significantly
- Clearing errors on form switch provides a cleaner UX
