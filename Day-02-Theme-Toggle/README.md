# 🌓 Day 2: Dark/Light Mode Toggle

## 📝 Description
A theme toggle switch that allows users to switch between dark and light modes. User preference is saved in localStorage and persists even after page reload or browser restart.

## ✨ Features
- Smooth dark/light mode toggle
- Persistent theme preference using localStorage
- Animated toggle switch with icons
- Smooth CSS transitions
- Clean and modern UI
- Responsive design

## 🛠 Tech Used
- HTML5
- CSS3 (Flexbox, Transitions)
- JavaScript (ES6)
- Remix Icon CDN
- LocalStorage API


## 🔄 How It Works
1. User clicks on the toggle switch
2. JavaScript detects the change event
3. CSS class is added/removed from body element
4. Theme preference is saved to localStorage
5. On page load, saved preference is retrieved and applied

## 🎨 Color Scheme

| Mode | Background | Text Color |
|------|------------|------------|
| Light | #f5f5f5 | #222 |
| Dark | #121212 | #eee |

## 🚧 Challenges Faced
- Ensuring the toggle switch position correctly reflects the saved theme on page load
- Synchronizing checkbox state with localStorage value
- Making smooth transitions between themes
- Icon colors adapting properly in both modes