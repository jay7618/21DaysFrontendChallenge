# 🔐 Day 12: Password Generator

## 📝 Description
A simple yet powerful password generator that creates secure, random passwords based on user-selected criteria. Features include character type toggles (uppercase, lowercase, numbers, symbols), one-click copy functionality, and visual toast notifications.

## ✨ Features
- **Password Generation** - Creates 16-character secure passwords
- **Character Options** - Toggle each character type on/off:
  - Uppercase (A-Z) - excluding similar characters (I, O)
  - Lowercase (a-z) - excluding similar characters (l, o)
  - Numbers (2-9) - excluding similar digits (0,1)
  - Symbols (!@#$%^&*)
- **One-Click Copy** - Copy generated password to clipboard
- **Toast Notifications** - Visual feedback when copying
- **Auto-Generate** - Password updates when toggling options
- **Fallback Protection** - Automatically enables lowercase if no options selected
- **Glassmorphism UI** - Modern blur effect design
- **Responsive Design** - Works on all devices

## 🛠 Tech Used
- HTML5
- CSS3 (Glassmorphism, Gradients, Flexbox)
- JavaScript (ES6+)
- Clipboard API


## 🔄 How It Works

### Password Generation Flow:
1. User selects desired character types (checkboxes)
2. Click "Generate Password" OR toggle any checkbox
3. JavaScript builds availableChars string from checked options
4. Loop 16 times, randomly select characters from availableChars
5. Display generated password in the password area

### Character Sets (Similar character exclusion):

| Type | Characters | Excluded |
|------|------------|----------|
| Uppercase | A B C D E F G H J K L M N P Q R S T U V W X Y Z | I, O |
| Lowercase | a b c d e f g h i j k m n p q r s t u v w x y z | l, o |
| Numbers | 2 3 4 5 6 7 8 9 | 0, 1 |
| Symbols | ! @ # $ % ^ & * | - |

### Copy to Clipboard Flow:
1. User clicks "Copy" button
2. Check if password is generated or still says "Click Generate"
3. Use Clipboard API to copy password text
4. Show success/failure toast notification
5. Toast auto-hides after 1.5 seconds

## 🎨 UI Features

| Feature | Description |
|---------|-------------|
| Glassmorphism Card | Blur effect on dark gradient background |
| Password Display | Monospace font, yellow color for contrast |
| Copy Button | Purple tint with hover effect |
| Checkbox Options | Purple accent color with hover background |
| Generate Button | Purple to Pink gradient with lift effect |
| Toast Notification | Green popup that fades in/out |

## 🚧 Challenges Faced
- **Similar Character Exclusion** - Removing confusing characters (I, O, 0, 1, l, o) for better readability
- **Fallback Logic** - Ensuring at least one character type is always selected
- **Clipboard API** - Handling promises and errors for copy functionality
- **Toast Timing** - Making notification appear and disappear smoothly
- **Auto-Generate** - Updating password when checkboxes change without extra button click
- **Empty State** - Showing "Click Generate" before any password is created

## 💡 Key Learning
- **Clipboard API** (`navigator.clipboard.writeText()`) is modern and secure
- **Character exclusions** make passwords more user-friendly (no I vs l confusion)
- **Toast notifications** provide better UX than alert() popups
- **Auto-generation** on checkbox change saves user clicks
- **Fallback validation** prevents generating empty passwords
- **setTimeout()** with class toggling creates smooth toast animations
