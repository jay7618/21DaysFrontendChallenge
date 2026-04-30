# 🛍️ Day 10: Product Filter UI — NebulaStore

## 📝 Description
NebulaStore is a modern, interactive product filtering UI that allows users to search and filter through a collection of tech products. Features include real-time search with debouncing, category filtering, dynamic product cards, and a beautiful glassmorphism design.

## ✨ Features
- **Product Catalog** - 20+ tech products (smartphones, TVs, monitors, mice, keyboards, GPUs, CPUs, RAM)
- **Category Filtering** - Filter products by category (8 categories + "All")
- **Real-time Search** - Search by product name, description, or category
- **Search Debouncing** - 280ms delay for optimal performance
- **Dynamic Product Cards** - Beautiful cards with images, prices, descriptions
- **Reset Filters** - One-click reset to show all products
- **Responsive Grid** - Auto-adjusting grid layout
- **Category Icons** - Visual icons for each category
- **Active State Highlight** - Shows which filter is currently active
- **Empty State Handling** - Friendly message when no products match
- **Lazy Loading Images** - Performance optimized image loading
- **Fallback Images** - Placeholder for broken image URLs

## 🛠 Tech Used
- HTML5
- CSS3 (Grid, Flexbox, Glassmorphism, Backdrop-filter)
- JavaScript (ES6+)
- Font Awesome 6
- Google Fonts (Inter)
- Debouncing Technique


## 🔄 How It Works

### Filtering Logic:

| Filter Type | Method | Behavior |
|-------------|--------|----------|
| Category | Click chip | Shows only selected category |
| Search | Type in input | Filters by name/desc/category |
| Combined | Both active | Applies both filters (AND logic) |
| Reset | Click reset button | Clears all filters, shows all |

### Data Structure:
```javascript
products = [
    { 
        id: 1, 
        name: "Galaxy S23 Ultra", 
        category: "smartphone", 
        price: 1199, 
        image: "url", 
        description: "200MP camera..." 
    },
    // ... 20 products total
]

categories = ['all', 'smartphone', 'tv', 'monitor', 'mouse', 'keyboard', 'gpu', 'cpu', 'ram']

# 🎨 Product Categories & Filters

## 📦 Product Categories

| Category   | Icon | Products Count |
| ---------- | ---- | -------------- |
| Smartphone | 📱   | 3              |
| TV         | 📺   | 3              |
| Monitor    | 🖥️  | 3              |
| Mouse      | 🖱️  | 2              |
| Keyboard   | ⌨️   | 3              |
| GPU        | 🎮   | 2              |
| CPU        | ⚡    | 2              |
| RAM        | 💾   | 2              |

---

## ⚙️ Filter Implementation

### 📂 Category Filter

```javascript
if (activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === activeCategory);
}
```

### 🔍 Search Filter (with Debouncing)

```javascript
searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        handleSearch();
    }, 280); // 280ms delay
});
```

### 🔗 Combined Filter

```javascript
let filtered = [...products];

if (activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === activeCategory);
}

if (searchQuery.trim() !== '') {
    filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(queryLower) ||
        p.description.toLowerCase().includes(queryLower) ||
        p.category.toLowerCase().includes(queryLower)
    );
}
```

---

## 🚧 Challenges Faced

* ⚡ **Debouncing Implementation**
  Preventing excessive re-renders on every keystroke

* 🧩 **Category State Management**
  Keeping active category highlighted while search is active

* 🔗 **Combined Filters**
  Applying both category AND search filters correctly

* 🖼️ **Image Error Handling**
  Fallback when product images fail to load

* 📱 **Responsive Grid**
  Making cards look good on all screen sizes

* 🚀 **Performance Optimization**
  Re-rendering only when filters change

---

## 💡 Key Learnings

* Debouncing is essential to avoid unnecessary API calls or renders
* Use `[...new Set(array)]` to extract unique categories
* Apply AND logic when chaining filters
* Glassmorphism using `backdrop-filter: blur()` creates modern UI
* Empty states improve UX when no results are found
* Category chips with active states give clear visual feedback

