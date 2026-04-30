
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

let allCategories = [...new Set(products.map(p => p.category))];
allCategories.sort();
const categoriesList = ['all', ...allCategories];

const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const resetBtn = document.getElementById('resetFilterBtn');
const categoryContainer = document.getElementById('categoryChipsContainer');

let activeCategory = 'all';
let searchQuery = '';

function renderCategoryChips() {
    categoryContainer.innerHTML = '';
    categoriesList.forEach(cat => {
        const chip = document.createElement('div');
        chip.className = `cat-chip ${activeCategory === cat ? 'active' : ''}`;
        let iconHtml = '';
        if (cat === 'all') iconHtml = '<i class="fas fa-grid-2"></i>';
        else if (cat === 'smartphone') iconHtml = '<i class="fas fa-mobile-alt"></i>';
        else if (cat === 'tv') iconHtml = '<i class="fas fa-tv"></i>';
        else if (cat === 'monitor') iconHtml = '<i class="fas fa-desktop"></i>';
        else if (cat === 'mouse') iconHtml = '<i class="fas fa-mouse"></i>';
        else if (cat === 'keyboard') iconHtml = '<i class="fas fa-keyboard"></i>';
        else if (cat === 'gpu') iconHtml = '<i class="fas fa-microchip"></i>';
        else if (cat === 'cpu') iconHtml = '<i class="fas fa-cpu"></i>';
        else if (cat === 'ram') iconHtml = '<i class="fas fa-memory"></i>';
        else iconHtml = '<i class="fas fa-tag"></i>';

        chip.innerHTML = `${iconHtml} ${cat.charAt(0).toUpperCase() + cat.slice(1)}`;
        chip.addEventListener('click', (e) => {
            e.stopPropagation();
            activeCategory = cat;
            renderCategoryChips();
            filterAndRenderProducts();
        });
        categoryContainer.appendChild(chip);
    });
}

function getFilteredProducts() {
    let filtered = [...products];

    if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (searchQuery.trim() !== '') {
        const queryLower = searchQuery.trim().toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(queryLower) ||
            p.description.toLowerCase().includes(queryLower) ||
            p.category.toLowerCase().includes(queryLower)
        );
    }
    return filtered;
}

function renderProducts() {
    const filtered = getFilteredProducts();

    if (filtered.length === 0) {
        productsGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-box-open"></i>
                    <h3 style="margin-top: 1rem; color:#334155;">No products found</h3>
                    <p style="color:#5b6e8c;">Try a different category or search term ✨</p>
                </div>
            `;
        return;
    }

    productsGrid.innerHTML = filtered.map(product => {
        let catIcon = '';
        switch (product.category) {
            case 'smartphone': catIcon = 'fas fa-mobile-alt'; break;
            case 'tv': catIcon = 'fas fa-tv'; break;
            case 'monitor': catIcon = 'fas fa-desktop'; break;
            case 'mouse': catIcon = 'fas fa-mouse'; break;
            case 'keyboard': catIcon = 'fas fa-keyboard'; break;
            case 'gpu': catIcon = 'fas fa-microchip'; break;
            case 'cpu': catIcon = 'fas fa-cpu'; break;
            case 'ram': catIcon = 'fas fa-memory'; break;
            default: catIcon = 'fas fa-box';
        }

        return `
                <div class="product-card">
                    <div class="img-container">
                        <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://placehold.co/600x600/334155/eeeeee?text=📦+Device'">
                    </div>
                    <div class="product-info">
                        <div class="product-title">
                            ${product.name}
                            <span class="product-category"><i class="${catIcon}" style="font-size:0.7rem;"></i> ${product.category}</span>
                        </div>
                        <div class="product-price">$${product.price} <span>USD</span></div>
                        <div class="product-desc">${product.description.length > 70 ? product.description.slice(0, 70) + '…' : product.description}</div>
                        <div class="buy-badge">
                            <i class="fas fa-shopping-cart"></i> explore now
                        </div>
                    </div>
                </div>
            `;
    }).join('');
}

function filterAndRenderProducts() {
    renderProducts();
}

function handleSearch() {
    searchQuery = searchInput.value;
    filterAndRenderProducts();
}

function resetFilters() {
    activeCategory = 'all';
    searchQuery = '';
    searchInput.value = '';
    renderCategoryChips();
    filterAndRenderProducts();
}

let debounceTimer;
searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        handleSearch();
    }, 280);
});

resetBtn.addEventListener('click', resetFilters);

function init() {
    renderCategoryChips();
    filterAndRenderProducts();
}

init();