# ✅ Day 6: To-Do App (Basic)

## 📝 Description
A clean and modern to-do list application that allows users to add, complete, and delete tasks. Features a beautiful glassmorphism UI with a loading screen animation and persistent storage using localStorage.

## ✨ Features
- Add new tasks to the list
- Mark tasks as complete (click on task text)
- Delete tasks from the list
- Loading screen with spinner animation
- Persistent storage (tasks survive page reload)
- Glassmorphism UI design
- Responsive layout for all devices
- Keyboard support (Enter key to add task)
- Smooth animations and transitions

## 🛠 Tech Used
- HTML5
- CSS3 (Glassmorphism, Flexbox, Keyframe Animations)
- JavaScript (ES6)
- Bootstrap 5.3
- Remix Icon CDN
- LocalStorage API

## 🔄 How It Works

### Loading Flow:
1. Page loads → Show loading screen with spinner
2. 3-second delay (simulates loading)
3. Loading screen hides → App container appears
4. Load existing tasks from localStorage

### Task Management Flow:
1. User types task in input field
2. Click Add button OR press Enter key
3. JavaScript creates new task element
4. Task is added to UI and saved to localStorage
5. Click on task text → Toggle complete status
6. Click delete icon → Remove task and update storage

## 💾 Data Structure

```javascript
// localStorage stores tasks array
tasks = [
    { text: "Buy groceries", completed: false },
    { text: "Learn JavaScript", completed: true }
]

## 🚧 Challenges Faced
- Implementing loading screen with proper timing
- Toggling task completion state without affecting other tasks
- Saving updated task states back to localStorage
- Deleting specific task from array while keeping others
- Handling Enter key press for adding tasks
- Glassmorphism effect working across different browsers

## 💡 Key Learning
- `setTimeout()` creates realistic loading experiences
- `classList.toggle()` is perfect for switching states
- `localStorage` can store entire task arrays as JSON
- Event delegation is important for dynamic elements
- Glassmorphism requires `backdrop-filter` with fallbacks
- Always trim input values before adding to prevent empty tasks
