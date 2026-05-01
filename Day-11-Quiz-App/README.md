# 📝 Day 11: CodeQuiz App with Timer & Score Tracking

## 📝 Description
CodeQuiz is an interactive quiz application that tests users' knowledge of HTML, CSS, and JavaScript. Features include personalized user entry, a 30-second countdown timer per question, real-time score tracking, 2x2 grid options layout, and detailed results with personalized feedback.

## ✨ Features
- **Personalized Quiz** - User enters name before starting
- **10 Tech Questions** - HTML, CSS, and JavaScript topics
- **30-Second Timer** - Countdown timer for each question
- **Auto-Submit on Timeout** - Automatically shows correct answer when time runs out
- **2x2 Grid Options** - Clean grid layout for answer choices
- **Instant Feedback** - Green (correct) / Red (wrong) visual feedback
- **Score Tracking** - Real-time score updates
- **Question Progress** - Shows current question number
- **Personalized Results** - Name-specific feedback messages
- **Play Again Option** - Restart quiz without page reload
- **Enter Key Support** - Submit name with Enter key
- **Responsive Design** - Stacked layout on mobile (1 column)
- **Paper Texture Background** - Unique vintage aesthetic
- **Smooth Animations** - Fade-in slide effects for options

## 🛠 Tech Used
- HTML5
- CSS3 (CSS Grid, Flexbox, Animations, Keyframes)
- JavaScript (ES6+)
- Google Fonts (Inter)

## 🚀 Live Demo
[Add Netlify/Vercel link after deployment]

## 📸 Screenshot
![CodeQuiz App](./screenshot.png)

## 🧠 Flow Planning
See [flow.md](./flow.md)

## 📋 Question Bank (10 Questions)

| # | Question | Correct Answer |
|---|----------|----------------|
| 1 | What does HTML stand for? | Hyper Text Markup Language |
| 2 | Which CSS property changes text color? | color |
| 3 | Which keyword declares a variable in JS? | All of the above |
| 4 | What does CSS stand for? | Cascading Style Sheets |
| 5 | Which HTML tag displays an image? | `<img>` |
| 6 | Which CSS property adds space INSIDE an element? | padding |
| 7 | Correct way to write a JS function? | function myFunc() {} |
| 8 | Which HTML attribute defines inline styles? | style |
| 9 | Which method writes to console? | console.log() |
| 10 | Which CSS unit is relative to root font-size? | rem |

## 🔄 How It Works

### Game Flow:
1. User enters name → Click Start Quiz or press Enter
2. Question appears with 30-second timer
3. User selects an answer → Shows correct/wrong feedback
4. Timer reaches zero → Auto-shows correct answer
5. Click Next Question → Loads next question
6. After 10 questions → Results screen shows score
7. Personalized feedback message based on percentage
8. Click Play Again → Restart from beginning

### Scoring System:
- Each correct answer = +1 point
- No negative marking
- Maximum score = 10
- Percentage = (Score / 10) × 100

### Feedback Messages:
| Percentage | Message |
|------------|---------|
| 100% | Perfect! [Name], you're a coding master! 🏆 |
| 70-99% | Great job, [Name]! You know your code well! 🎉 |
| 50-69% | Good effort, [Name]! Keep practicing! 👍 |
| Below 50% | Keep learning, [Name]! Review and try again! 💪 |

## 🎨 UI Features

| Feature | Description |
|---------|-------------|
| Paper Texture | Radial gradient dot pattern background |
| 2x2 Grid Options | Clean grid layout for answer choices |
| Timer Display | Large centered number (52px) |
| Correct Answer | Green background (#d4e2d0) + ✓ icon |
| Wrong Answer | Red background (#e8cfcf) + ✗ icon |
| Option Hover | Lift effect with shadow |
| Smooth Animations | Fade-slide entrance for options |
| Responsive | 1 column grid on mobile |

## 🚧 Challenges Faced
- **Timer Management** - Properly clearing intervals between questions to prevent multiple timers running simultaneously
- **Auto-submit on Timeout** - Showing correct answer and enabling Next button when timer hits zero without user selection
- **State Management** - Preventing double answers (user can't answer after timeout or after already answering)
- **2x2 Grid Layout** - Making options display in 2 columns on desktop, 1 column on mobile
- **Answer Locking** - Disabling all options after selection to prevent changes
- **Visual Feedback** - Adding correct/wrong classes without messing up grid layout
- **Play Again Reset** - Resetting all variables (score, currentQ, answered flag, timer)

## 💡 Key Learning
- **clearInterval()** is crucial - always clean up intervals before starting new ones
- **State flags** (answered boolean) prevent race conditions between timer and user clicks
- **CSS Grid with `grid-template-columns: 1fr 1fr`** creates perfect 2x2 layouts
- **Personalized feedback** makes the app feel more engaging
- **Animation delays** (`animation-delay`) create staggered entrance effects
- **Timer auto-submit** is essential for fair quiz completion
- **Visual feedback** (green/red) helps users learn immediately

## 📂 GitHub Repo
[Main Repository Link]

## 🙏 Credit
Guidance: @Keyur Gohil  
Learning at: Red & White Skill Education