
const products = [
    { id: 1, name: "Galaxy S23 Ultra", category: "smartphone", price: 1199, image: "https://m.media-amazon.com/images/I/71goZuIha-L.jpg", description: "200MP camera, Snapdragon 8 Gen 2, dynamic AMOLED" },
    { id: 2, name: "iPhone 15 Pro", category: "smartphone", price: 1099, image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png", description: "A17 Pro, titanium design, USB-C" },
    { id: 3, name: "Xiaomi 13 Pro", category: "smartphone", price: 899, image: "https://www.giztop.com/media/catalog/product/cache/97cc1143d2e20f2b0c8ea91aaa12053c/p/m/pms_1670747135.10194785.png", description: "Leica lens, 120W charging" },
    { id: 4, name: "Samsung QLED 4K TV", category: "tv", price: 1299, image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Entertainment/Television/Images/319852_0_uFYO7INSY.png?updatedAt=1765369896876?tr=w-640", description: "55 inch, 120Hz, Quantum HDR" },
    { id: 5, name: "LG C3 OLED", category: "tv", price: 1799, image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Entertainment/Television/Images/315785_0_zwsocq.png?tr=w-640", description: "Perfect black, G-Sync, 120Hz" },
    { id: 6, name: "Sony Bravia XR", category: "tv", price: 1999, image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Entertainment/Television/Images/308089_0_wnKGmS9ay.png?updatedAt=1762491242136?tr=w-640", description: "Cognitive processor XR" },
    { id: 7, name: "ASUS ROG Swift 32\"", category: "monitor", price: 749, image: "https://dlcdnwebimgs.asus.com/gain/B6C7913A-2EF9-4096-9B09-3505E103E5D2", description: "4K 144Hz, HDMI 2.1, G-Sync" },
    { id: 8, name: "Dell UltraSharp 27\"", category: "monitor", price: 549, image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u2724d/media-gallery/monitor-ultrasharp-u2724d-qhd-gy-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3306&hei=2907&qlt=100,1&resMode=sharp2&size=3306,2907&chrss=full&imwidth=5000", description: "IPS panel, USB-C hub" },
    { id: 9, name: "LG UltraGear 34\"", category: "monitor", price: 899, image: "https://m.media-amazon.com/images/I/61+48zFNZ7L._AC_UF1000,1000_QL80_.jpg", description: "Curved 160Hz, Nano IPS" },
    { id: 10, name: "Razer DeathAdder V3", category: "mouse", price: 79, image: "https://m.media-amazon.com/images/I/61f9z+Cw7aL._SL1500_.jpg", description: "Optical switches, 59g ultra-light" },
    { id: 11, name: "Logitech MX Master 3S", category: "mouse", price: 99, image: "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/2025-update/mx-master-3s-bluetooth-edition-top-view-graphite-new-1.png", description: "8K DPI, MagSpeed wheel" },
    { id: 12, name: "Keychron K2 Pro", category: "keyboard", price: 119, image: "https://keychron.in/wp-content/uploads/2023/02/Keychron-K2-Pro-QMK-VIA-Wireless-Mechanical-Keyboard-for-Mac-Windows-RGB-Aluminum-frame-PBT-keycaps-PCB-screw-in-stabilizer-hot-swappable-red-switch.jpg", description: "Hot-swappable, RGB, wireless" },
    { id: 13, name: "Corsair K70 RGB", category: "keyboard", price: 169, image: "https://m.media-amazon.com/images/I/71Cy-uweiJL._AC_UF1000,1000_QL80_.jpg", description: "Cherry MX, aluminum frame" },
    { id: 14, name: "Logitech G715", category: "keyboard", price: 199, image: "https://www.logitechg.com/content/dam/gaming/en/products/keyboards/g715-wireless-keyboard/gallery/g715-gallery-2.png", description: "Wireless, cloud-soft wrist rest" },
    { id: 15, name: "NVIDIA RTX 4090", category: "gpu", price: 1599, image: "https://m.media-amazon.com/images/I/514QPBuqGyL.jpg", description: "24GB GDDR6X, DLSS 3" },
    { id: 16, name: "AMD Radeon RX 7900 XTX", category: "gpu", price: 999, image: "https://m.media-amazon.com/images/I/81XuERNL9eL.jpg", description: "24GB, ray tracing, 4K gaming" },
    { id: 17, name: "Intel Core i9-14900K", category: "cpu", price: 589, image: "https://m.media-amazon.com/images/I/619ytLAytAL.jpg", description: "24 cores, 6.0GHz, LGA1700" },
    { id: 18, name: "AMD Ryzen 9 7950X", category: "cpu", price: 549, image: "https://m.media-amazon.com/images/I/5116zdA9uyL.jpg", description: "16 cores, 5.7GHz, AM5" },
    { id: 19, name: "Corsair Vengeance DDR5", category: "ram", price: 189, image: "https://swapnainfotech.com/cdn/shop/files/CMH32GX5M2B6000Z30W.png?v=1751459212", description: "32GB (2x16) 6000MHz RGB" },
    { id: 20, name: "G.Skill Trident Z5", category: "ram", price: 219, image: "https://www.gskill.com/_upload/images/2110201626450.png", description: "64GB kit, CL30, extreme performance" }
];

let cart = [];

function displayProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(product => `
                <div class="product-card">
                    <img class="product-image" src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/400x400/e2e8f0/64748b?text=No+Image'">
                    <div class="product-info">
                        <div class="product-name">${product.name}</div>
                        <div class="product-category">${product.category}</div>
                        <div class="product-price">$${product.price} <span>USD</span></div>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItemsDiv = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotalSpan = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartFooter.style.display = 'none';
        return;
    }

    cartFooter.style.display = 'block';

    cartItemsDiv.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/60x60/e2e8f0/64748b?text=No'">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price}</div>
                        <div class="cart-item-quantity">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <div class="remove-item" onclick="removeFromCart(${item.id})">Remove</div>
                    </div>
                </div>
            `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalSpan.innerText = `$${total}`;
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function openCart() {
    document.getElementById('cartOverlay').classList.add('open');
    document.getElementById('cartSidebar').classList.add('open');
}

function closeCart() {
    document.getElementById('cartOverlay').classList.remove('open');
    document.getElementById('cartSidebar').classList.remove('open');
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert(`Thank you for your purchase! Total: $${cart.reduce((sum, i) => sum + (i.price * i.quantity), 0)}`);
    cart = [];
    updateCartUI();
    closeCart();
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 1500);
}

displayProducts();