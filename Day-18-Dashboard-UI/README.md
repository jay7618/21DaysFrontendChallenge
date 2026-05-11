# 📊 Day 18: Dashboard UI

## 📝 Description
A complete admin dashboard with sidebar navigation, statistics cards, bar chart, recent activity feed, orders tables, settings page, and localStorage persistence. Features animated counting numbers, responsive design, and mobile hamburger menu.

## ✨ Features
- **Sidebar Navigation** - Fixed sidebar with 3 pages (Dashboard, Orders, Settings)
- **Statistics Cards** - 4 cards with animated counting numbers
- **Bar Chart** - Weekly sales visualization with dynamic bars
- **Recent Activity** - Activity feed with timestamps
- **Recent Orders Table** - Shows latest 5 orders
- **All Orders Page** - Complete orders list with all data
- **Settings Page** - User profile settings with localStorage
- **Mobile Responsive** - Hamburger menu for mobile devices
- **Active Page Highlight** - Current page highlighted in sidebar
- **Animated Numbers** - Smooth counter animation on stats
- **Status Badges** - Paid/Pending status with colors
- **Data Persistence** - Settings saved to localStorage

## 🛠 Tech Used
- HTML5
- CSS3 (Grid, Flexbox, Media Queries)
- JavaScript (ES6+)
- LocalStorage API
- Remix Icon CDN

## 📊 Dashboard Components

### Statistics Cards
| Card | Value | Icon |
|------|-------|------|
| Total Revenue | $48,295 | 💰 |
| Total Orders | 1,284 | 🛒 |
| Active Users | 3,592 | 👥 |
| Avg Rating | 4.8 | ⭐ |

### Weekly Sales Data
| Day | Sales |
|-----|-------|
| Monday | $4,200 |
| Tuesday | $5,800 |
| Wednesday | $3,500 |
| Thursday | $7,900 |
| Friday | $6,200 |
| Saturday | $8,900 |
| Sunday | $4,600 |

### Recent Orders (7 orders)
| Order ID | Customer | Amount | Status |
|----------|----------|--------|--------|
| #ORD-001 | Alice Johnson | $245 | Paid |
| #ORD-002 | Bob Smith | $189 | Pending |
| #ORD-003 | Carol Davis | $567 | Paid |
| #ORD-004 | David Wilson | $123 | Pending |
| #ORD-005 | Emma Brown | $892 | Paid |
| #ORD-006 | Frank Miller | $432 | Paid |
| #ORD-007 | Grace Lee | $298 | Pending |

## 🔄 How It Works

### Page Navigation Flow:
1. User clicks sidebar link (Dashboard/Orders/Settings)
2. switchPage() hides all pages
3. Shows selected page
4. Updates active class on sidebar links
5. On mobile: auto-closes sidebar after navigation

### Animated Numbers Flow:
1. Page loads or stats come into view
2. setInterval runs every 30ms
3. Increments numbers until target reached
4. Clears interval when done
5. Rating shows instantly (no animation)

### Settings Flow:
1. User navigates to Settings page
2. Loads saved data from localStorage
3. User edits name, email, notification preference
4. Click Save Changes
5. Data saved to localStorage
6. Shows success alert

### Bar Chart Flow:
1. weeklySales array contains 7 values
2. Find maximum value for scaling
3. Calculate height percentage for each bar
4. Render bars with dynamic heights
5. Display day labels and values

# 📊 Dashboard UI Project

## 🎨 UI Features

| Feature | Description |
|---------|-------------|
| 📑 Sidebar | Fixed left sidebar with dark gradient background |
| 🃏 Cards | White cards with hover lift effect |
| 📊 Bar Chart | Purple gradient bars with proportional heights |
| 🟢🟡 Status Badges | Green for paid / Yellow for pending |
| 📱 Mobile Menu | Hamburger icon with sliding sidebar |
| 🎯 Active Link | Purple background highlight for active page |

---

## 🚧 Challenges Faced

### 🔢 Animated Numbers
- Using `setInterval()` with proper cleanup for smooth animations

### 📏 Bar Chart Scaling
- Calculating bar heights dynamically based on maximum values

### 📱 Mobile Responsive Design
- Sidebar toggle functionality with outside click detection

### 🧭 Page Navigation
- Showing and hiding pages correctly on navigation

### 💾 Data Persistence
- Saving and loading settings using `localStorage`

### 🎯 Active State Management
- Updating active classes dynamically during navigation

---

## 💡 Key Learnings

- `setInterval()` with `clearInterval()` creates smooth counter animations
- `Math.max(...array)` finds the maximum value for chart scaling
- CSS transforms with media queries help create responsive hamburger menus
- `classList.toggle()`, `add()`, and `remove()` manage page visibility effectively
- `localStorage` persists user settings across sessions
- Dataset attributes like `data-page` simplify navigation logic
