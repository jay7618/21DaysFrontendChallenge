
const products = [
    { id: 1, name: "Wireless Mouse", price: 29.99, image: "https://m.media-amazon.com/images/I/51hZtBRUFBL._SL1500_.jpg" },
    { id: 2, name: "Mechanical Keyboard", price: 89.99, image: "https://m.media-amazon.com/images/I/61Cj6RHI5GL._SX679_.jpg" },
    { id: 3, name: "USB-C Cable", price: 12.99, image: "https://m.media-amazon.com/images/I/518k7BtBZCL._SL1024_.jpg" },
    { id: 4, name: "Laptop Stand", price: 45.99, image: "https://m.media-amazon.com/images/I/61i05gGBl3L._SX679_.jpg" },
    { id: 5, name: "Noise Canceling Headphones", price: 199.99, image: "https://assets.myntassets.com/w_200,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2025/AUGUST/14/IhDTipCj_8aa88def13354c4297ef32464554e48f.jpg" },
    { id: 6, name: "Smart Watch", price: 149.99, image: "https://m.media-amazon.com/images/I/71wgrC1xc3L._SL1500_.jpg" },
    { id: 7, name: "Gaming Chair", price: 299.99, image: "https://m.media-amazon.com/images/I/515lN3Ed52L._SL1156_.jpg" },
    { id: 8, name: "Webcam HD", price: 79.99, image: "https://m.media-amazon.com/images/I/61nTmIUB0LL._SL1500_.jpg" },
    { id: 9, name: "Portable SSD 1TB", price: 129.99, image: "https://microless.com/cdn/products/7323a888fe7a80e85a79328f91d6bf7f-hi.jpg" },
    { id: 10, name: "USB Microphone", price: 59.99, image: "https://m.media-amazon.com/images/I/71k6li+9vFL._SL1500_.jpg" }
];

let cart = [];

function displayProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(product => `
                <div class="product-card">
                    <div class="product-img-container">
                        <img class="product-image" src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/400x400/e2e8f0/64748b?text=No+Image'">
                    </div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCartUI();
    showToast(`${product.name} added to cart!`);
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        const newQuantity = item.quantity + change;
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            updateCartUI();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showToast('Item removed from cart');
}

function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    updateCartUI();
    showToast('Cart cleared');
}

function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updateCartUI() {
    const cartItemsDiv = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotalSpan = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartFooter.style.display = 'none';
        return;
    }

    cartFooter.style.display = 'block';

    cartItemsDiv.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-img-container">
                        <img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/70x70/e2e8f0/64748b?text=No'">
                    </div>
                    <div class="item-info">
                        <div class="item-name">${item.name}</div>
                        <div class="item-price">$${item.price.toFixed(2)} each</div>
                    </div>
                    <div class="item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span style="min-width: 30px; text-align: center;">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <div class="item-total">
                        $${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
                </div>
            `).join('');

    const total = calculateTotal();
    cartTotalSpan.innerText = `$${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        showToast('Cart is empty!');
        return;
    }
    const total = calculateTotal();
    alert(`✅ Order placed!\n\nTotal: $${total.toFixed(2)}\n\nThank you for shopping!`);
    cart = [];
    updateCartUI();
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 1500);
}

displayProducts();