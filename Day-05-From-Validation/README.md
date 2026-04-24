# ✅ Day 5: Form Validation with Registration & Login

## 📝 Description
A complete authentication system with registration and login forms featuring real-time validation. User data is stored in localStorage with SweetAlert2 for beautiful notifications.

## ✨ Features
- User registration with validation
- Login authentication system
- Real-time form validation
- Email format validation (regex)
- Password length validation (6-16 characters)
- Confirm password matching
- Phone number validation (9-10 digits)
- Duplicate email prevention
- SweetAlert2 beautiful notifications
- localStorage user persistence
- Responsive gradient design
- Register/Login page navigation

## 🛠 Tech Used
- HTML5
- CSS3 (Flexbox, Gradients)
- JavaScript (ES6)
- Bootstrap 5.3
- SweetAlert2 CDN
- LocalStorage API
- Regex for validation


## 🔄 How It Works

### Registration Flow:
1. User fills all form fields
2. Click Register button
3. Validation checks each field:
   - First/Last Name: not empty
   - Email: valid format using regex
   - Phone: 9-10 digits
   - Password: 6-16 characters
   - Confirm Password: matches password
4. If validation fails → SweetAlert error
5. If validation passes → save to localStorage
6. Clear form and show success message

### Login Flow:
1. User enters email and password
2. Click Login button
3. Check credentials against localStorage
4. If match → Welcome message with user name
5. If not match → Error message

## 📋 Validation Rules

| Field | Validation Rule |
|-------|-----------------|
| First Name | Cannot be empty |
| Last Name | Cannot be empty |
| Email | Valid email format (regex) |
| Phone Number | 9-10 digits only |
| Password | 6-16 characters |
| Confirm Password | Must match password |

## 🚧 Challenges Faced
- Implementing regex for email validation
- Password length validation with proper messages (min 6, max 16)
- Preventing duplicate email registration
- Matching confirm password with password field
- Using SweetAlert2 instead of boring alert()
- Storing multiple users in localStorage array
- Finding existing user by email in the array
