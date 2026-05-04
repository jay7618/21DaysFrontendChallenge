# 🛒 Day 15: E-commerce Product Page

## 📝 Description
A fully functional e-commerce product page with 20 products, add-to-cart functionality, cart sidebar with quantity management, real-time total price calculation, and checkout feature. Built with vanilla HTML, CSS, and JavaScript.

## ✨ Features
- **Product Grid** - 20 products displayed in responsive grid
- **Add to Cart** - One-click add with toast notification
- **Cart Sidebar** - Sliding panel from right with smooth animation
- **Quantity Management** - Increase/decrease product quantity
- **Remove Items** - Delete items from cart individually
- **Cart Counter** - Shows total number of items in cart icon
- **Real-time Total** - Auto-calculates cart total on every change
- **Checkout** - Order summary alert with cart reset
- **Toast Notifications** - Visual feedback when adding items
- **Product Categories** - Smartphones, TVs, Monitors, Mice, Keyboards, GPUs, CPUs, RAM
- **Responsive Design** - Works on desktop and mobile
- **Sticky Header** - Fixed header with cart access at all times
- **Image Fallback** - Placeholder for broken images

## 🛠 Tech Used
- HTML5
- CSS3 (Grid, Flexbox, Transitions, Sticky positioning)
- JavaScript (ES6+)

## 📋 Product Catalog (20 Products)

| Category | Products |
|----------|----------|
| Smartphones | Galaxy S23 Ultra, iPhone 15 Pro, Xiaomi 13 Pro |
| TVs | Samsung QLED 4K, LG C3 OLED, Sony Bravia XR |
| Monitors | ASUS ROG Swift, Dell UltraSharp, LG UltraGear |
| Mice | Razer DeathAdder V3, Logitech MX Master 3S |
| Keyboards | Keychron K2 Pro, Corsair K70 RGB, Logitech G715 |
| GPUs | NVIDIA RTX 4090, AMD Radeon RX 7900 XTX |
| CPUs | Intel Core i9-14900K, AMD Ryzen 9 7950X |
| RAM | Corsair Vengeance DDR5, G.Skill Trident Z5 |

## 🔄 How It Works

### Add to Cart Flow:
1. User clicks "Add to Cart" on any product
2. `addToCart(productId)` checks if product exists in cart
3. If exists → increments quantity
4. If not exists → adds new item with quantity = 1
5. `updateCartUI()` refreshes cart display and counter
6. `showToast()` displays success message for 1.5 seconds

### Cart Sidebar Flow:
1. User clicks cart icon → `openCart()` adds 'open' class
2. Cart slides in from right with overlay backdrop
3. Click overlay or close button → `closeCart()` removes 'open' class

### Quantity Management Flow:
1. Click + button → `updateQuantity(id, 1)` increases quantity
2. Click - button → `updateQuantity(id, -1)` decreases quantity
3. If quantity reaches 0 → `removeFromCart(id)` deletes item
4. Total price recalculates automatically

### Checkout Flow:
1. User clicks "Checkout" button
2. If cart empty → alert "Your cart is empty!"
3. If cart has items → alert shows order total
4. Cart array resets to empty
5. Cart UI updates, sidebar closes

## 💾 Data Structure

```javascript
// Product Object
{
    id: 1,
    name: "Galaxy S23 Ultra",
    category: "smartphone",
    price: 1199,
    image: "https://...",
    description: "200MP camera..."
}

// Cart Item Object (extends product)
{
    id: 1,
    name: "Galaxy S23 Ultra",
    price: 1199,
    image: "https://...",
    quantity: 2
}


# 🛒 Shopping Cart UI

## 🎨 UI Features

| Feature | Description |
|--------|------------|
| Sticky Header | Header stays at top on scroll |
| Product Cards | Hover effect with lift and shadow |
| Cart Sidebar | Slides from right (400px width) |
| Overlay | Dark backdrop with blur |
| Toast | Green popup that fades out |
| Quantity Buttons | +/- buttons with border |
| Remove Link | Red text to delete item |

---

## 🚧 Challenges Faced

- **Cart State Management**  
  Tracking items with quantities instead of separate entries.

- **Quantity Updates**  
  Preventing negative quantities and auto-removing at zero.

- **Total Calculation**  
  Summing `price × quantity` for all cart items.

- **Image Error Handling**  
  Providing fallback for broken product images.

- **Cart Counter**  
  Summing all quantities across cart items.

- **Duplicate Products**  
  Checking existing items before adding a new entry.

---

## 💡 Key Learning

- `find()` method is perfect for checking if a product exists in the cart.
- Spread operator (`{ ...product, quantity: 1 }`) clones objects cleanly.
- `reduce()` is ideal for calculating cart totals.
- `classList.add/remove` creates smooth slide animations.
- Sticky header (`position: sticky`) keeps cart accessible.
- Toast notifications provide better UX than alerts.
- `onerror` attribute handles broken images gracefully.
