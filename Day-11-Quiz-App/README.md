# 📝 Day 11: Quiz App with Timer & Score Tracking

## 📝 Description
An interactive quiz application that tests users with multiple-choice questions. Features include a countdown timer, score tracking, question navigation, and detailed results with explanations.

## ✨ Features
- **Multiple Choice Questions** - 10 tech-themed questions
- **Countdown Timer** - 15 seconds per question
- **Score Tracking** - Real-time score calculation
- **Question Counter** - Shows current question number
- **Next/Previous Navigation** - Move between questions
- **Results Screen** - Final score with percentage
- **Answers Review** - See correct/incorrect answers with explanations
- **Restart Option** - Play again without page reload
- **Progress Bar** - Visual progress indicator
- **Auto-next on Answer** - Automatically moves to next question
- **Timer Auto-submit** - Auto-submits when time runs out
- **Responsive Design** - Works on all devices

## 🛠 Tech Used
- HTML5
- CSS3 (Flexbox, Grid, Gradients, Animations)
- JavaScript (ES6+)
- Google Fonts (Poppins)
- Font Awesome 6


## 📋 Question Bank (10 Questions)

| # | Question | Options | Correct Answer |
|---|----------|---------|----------------|
| 1 | What does HTML stand for? | 4 options | Hyper Text Markup Language |
| 2 | Which CSS property changes text color? | 4 options | color |
| 3 | What does CSS stand for? | 4 options | Cascading Style Sheets |
| 4 | Which JavaScript keyword declares a variable? | 4 options | var/let/const (all correct) |
| 5 | Which HTML tag creates a hyperlink? | 4 options | `<a>` |
| 6 | Which built-in method adds elements to array end? | 4 options | push() |
| 7 | Which CSS property makes text bold? | 4 options | font-weight |
| 8 | What does DOM stand for? | 4 options | Document Object Model |
| 9 | Which symbol is used for single-line comments in JS? | 4 options | // |
| 10 | Which HTML tag displays an image? | 4 options | `<img>` |

## 🔄 How It Works

### Game Flow:
1. User loads page → Question 1 appears with 15-second timer
2. User selects an answer → Answer saved, auto-move to next
3. Timer reaches zero → Auto-submit with no answer
4. After last question → Results screen shows score
5. User clicks "Restart Quiz" → Reset everything, start over

### Scoring System:
- Each correct answer = +1 point
- No negative marking
- Maximum score = 10
- Percentage = (Score / 10) × 100

## 🎨 UI Features

| Feature | Description |
|---------|-------------|
| Gradient Background | Purple to Blue gradient |
| Glassmorphism Card | Blur effect on quiz container |
| Progress Bar | Fills as user progresses |
| Timer Animation | Countdown with color change |
| Option Hover | Smooth scale effect |
| Correct/Incorrect Review | Green/Red indicators in results |

## 🚧 Challenges Faced
- **Timer Management** - Clearing intervals between questions
- **Auto-next Logic** - Moving to next question after answer selection
- **Timer + User Answer Race** - Ensuring timer doesn't override user selection
- **State Management** - Tracking answers and visited questions
- **Results Calculation** - Comparing user answers with correct answers
- **Restart Functionality** - Resetting all variables and UI
- **Progress Bar Sync** - Updating progress with question navigation

## 💡 Key Learning
- **setInterval/setTimeout** needs careful cleanup with clearInterval
- **State management** is crucial for multi-step applications
- **Visual feedback** (progress bar, timer color) improves UX
- **Auto-submit on timer** prevents stuck states
- **Object arrays** are perfect for storing question banks
- **Review screen** helps users learn from mistakes
