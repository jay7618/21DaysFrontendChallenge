# 📱 Day 3: Responsive Navbar with Hamburger Menu

## 📝 Description
A fully responsive navigation bar that adapts to different screen sizes. On desktop, it displays full navigation links horizontally. On mobile/tablet, it transforms into a hamburger menu with smooth sliding animation.

## ✨ Features
- Responsive design (mobile-first approach)
- Hamburger menu for mobile devices
- Smooth slide-in/slide-out animation
- Icon toggle (Menu ↔ Close)
- Bootstrap 5 integration
- Remix Icons for beautiful icons
- Touch-friendly interface
- Clean and modern design

## 🛠 Tech Used
- HTML5
- CSS3 (Flexbox, Media Queries, Transitions)
- JavaScript (ES6)
- Bootstrap 5.3
- Remix Icon CDN

## 🔄 How It Works
1. On desktop (≥992px): Full navigation links visible
2. On mobile (<992px): Hamburger icon appears
3. Click hamburger → Menu slides in from left
4. Click close icon → Menu slides out
5. Menu links are vertically stacked on mobile

## 📱 Breakpoints

| Screen Size | Navigation Style |
|-------------|------------------|
| < 992px | Hamburger menu (hidden by default) |
| ≥ 992px | Full horizontal navigation |

## 🚧 Challenges Faced
- Making the slide animation smooth without flickering
- Toggling between hamburger and close icons correctly
- Handling menu display property with CSS transitions
- Preventing body scroll when menu is open
- Ensuring proper z-index so menu appears above content
