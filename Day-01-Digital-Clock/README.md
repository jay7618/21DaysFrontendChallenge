# Day 01 — Digital Clock

🎯 **Goal:**  
Create a real-time digital clock using JavaScript that shows hours, minutes, seconds, and the current date with a visually appealing design.

---

## **Features**
- Real-time digital clock (hours, minutes, seconds)
- Date display (day, date, month, year)
- Blinking colon animation for better clock effect
- Dark-themed UI with neon-style styling
- Responsive and centered layout using Bootstrap

---

## **Tech Used**
- HTML  
- CSS (with animations and custom styling)  
- JavaScript  
- Bootstrap 5 (for layout and responsive design)

---

## **Flow / Logic**
1. Designed HTML structure with containers for hours, minutes, seconds, and date.
2. Styled the clock using CSS, including neon glow and blinking colon effect.
3. JavaScript fetches the current time and date using `Date()` object.
4. Hours, minutes, and seconds are dynamically updated every second.
5. Day name, month, date, and year are displayed based on the current date.
6. `setInterval()` ensures the clock updates in real-time.

---

## **Edge Cases Handled**
- Single-digit hours, minutes, seconds will display correctly (JavaScript numbers are rendered directly)
- Month and day names are displayed as full strings instead of numbers
- Layout remains centered and readable on different screen sizes

---

## **Usage**
1. Clone the repo:
```bash
git clone https://github.com/jay7618/21DaysFrontendChallenge.git
