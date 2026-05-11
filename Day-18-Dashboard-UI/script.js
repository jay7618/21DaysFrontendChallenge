
let allOrdersList = [
    { id: '#ORD-001', customer: 'Alice Johnson', amount: 245, status: 'paid', date: '2024-01-15' },
    { id: '#ORD-002', customer: 'Bob Smith', amount: 189, status: 'pending', date: '2024-01-15' },
    { id: '#ORD-003', customer: 'Carol Davis', amount: 567, status: 'paid', date: '2024-01-14' },
    { id: '#ORD-004', customer: 'David Wilson', amount: 123, status: 'pending', date: '2024-01-14' },
    { id: '#ORD-005', customer: 'Emma Brown', amount: 892, status: 'paid', date: '2024-01-13' },
    { id: '#ORD-006', customer: 'Frank Miller', amount: 432, status: 'paid', date: '2024-01-12' },
    { id: '#ORD-007', customer: 'Grace Lee', amount: 298, status: 'pending', date: '2024-01-11' }
];

let recentActivities = [
    { text: 'New order #ORD-001', time: '2 minutes ago' },
    { text: 'User john@example.com registered', time: '15 minutes ago' },
    { text: 'Product rating updated', time: '1 hour ago' },
    { text: 'Invoice #INV-003 sent', time: '3 hours ago' },
    { text: 'Support ticket resolved', time: '5 hours ago' }
];

let weeklySales = [4200, 5800, 3500, 7900, 6200, 8900, 4600];
let weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function drawBarChart() {
    let maxVal = Math.max(...weeklySales);
    let chartDiv = document.getElementById('barChart');
    if (!chartDiv) return;

    let barsHtml = '';
    for (let i = 0; i < weeklySales.length; i++) {
        let heightPercent = (weeklySales[i] / maxVal) * 140;
        barsHtml += `
                <div class="bar-item">
                    <div class="bar" style="height: ${heightPercent}px; min-height: 4px;"></div>
                    <div class="bar-label">${weekDays[i]}</div>
                    <div style="font-size: 10px; margin-top: 5px;">$${Math.round(weeklySales[i] / 1000)}k</div>
                </div>
            `;
    }
    chartDiv.innerHTML = barsHtml;
}

function showActivities() {
    let activityDiv = document.getElementById('activityFeed');
    if (!activityDiv) return;

    let html = '';
    for (let act of recentActivities) {
        html += `
                <li class="activity-item">
                    <div class="activity-icon"><i class="ri-notification-3-line"></i></div>
                    <div class="activity-text">
                        <div class="activity-title">${act.text}</div>
                        <div class="activity-time">${act.time}</div>
                    </div>
                </li>
            `;
    }
    activityDiv.innerHTML = html;
}

function showRecentOrders() {
    let recentOrders = allOrdersList.slice(0, 5);
    let tbody = document.getElementById('ordersTableBody');
    if (!tbody) return;

    let rows = '';
    for (let order of recentOrders) {
        let statusClass = order.status === 'paid' ? 'status-paid' : 'status-pending';
        rows += `
                <tr>
                    <td>${order.id}</td>
                    <td>${order.customer}</td>
                    <td>$${order.amount}</td>
                    <td><span class="status-badge ${statusClass}">${order.status}</span></td>
                </tr>
            `;
    }
    tbody.innerHTML = rows;
}

function showAllOrdersPage() {
    let tbody = document.getElementById('allOrdersBody');
    if (!tbody) return;

    let rows = '';
    for (let order of allOrdersList) {
        let statusClass = order.status === 'paid' ? 'status-paid' : 'status-pending';
        rows += `
                <tr>
                    <td>${order.id}</td>
                    <td>${order.customer}</td>
                    <td>$${order.amount}</td>
                    <td><span class="status-badge ${statusClass}">${order.status}</span></td>
                    <td>${order.date}</td>
                </tr>
            `;
    }
    tbody.innerHTML = rows;
}

function animateNumbers() {
    let revenueTarget = 48295;
    let ordersTarget = 1284;
    let usersTarget = 3592;
    let ratingTarget = 4.8;

    let revenueEl = document.getElementById('revenueNum');
    let ordersEl = document.getElementById('ordersNum');
    let usersEl = document.getElementById('usersNum');
    let ratingEl = document.getElementById('ratingNum');

    if (!revenueEl) return;

    let revenueCurrent = 0;
    let ordersCurrent = 0;
    let usersCurrent = 0;

    let revenueInterval = setInterval(() => {
        if (revenueCurrent >= revenueTarget) {
            clearInterval(revenueInterval);
            revenueEl.innerText = '$' + revenueTarget.toLocaleString();
        } else {
            revenueCurrent += Math.ceil(revenueTarget / 50);
            if (revenueCurrent > revenueTarget) revenueCurrent = revenueTarget;
            revenueEl.innerText = '$' + revenueCurrent.toLocaleString();
        }
    }, 30);

    let ordersInterval = setInterval(() => {
        if (ordersCurrent >= ordersTarget) {
            clearInterval(ordersInterval);
            ordersEl.innerText = ordersTarget.toLocaleString();
        } else {
            ordersCurrent += Math.ceil(ordersTarget / 50);
            if (ordersCurrent > ordersTarget) ordersCurrent = ordersTarget;
            ordersEl.innerText = ordersCurrent.toLocaleString();
        }
    }, 30);

    let usersInterval = setInterval(() => {
        if (usersCurrent >= usersTarget) {
            clearInterval(usersInterval);
            usersEl.innerText = usersTarget.toLocaleString();
        } else {
            usersCurrent += Math.ceil(usersTarget / 50);
            if (usersCurrent > usersTarget) usersCurrent = usersTarget;
            usersEl.innerText = usersCurrent.toLocaleString();
        }
    }, 30);

    ratingEl.innerText = ratingTarget;
}

function switchPage(pageName) {
    document.getElementById('dashboardPage').classList.add('hidden');
    document.getElementById('ordersPage').classList.add('hidden');
    document.getElementById('settingsPage').classList.add('hidden');

    if (pageName === 'dashboard') {
        document.getElementById('dashboardPage').classList.remove('hidden');
    } else if (pageName === 'orders') {
        document.getElementById('ordersPage').classList.remove('hidden');
        showAllOrdersPage();
    } else if (pageName === 'settings') {
        document.getElementById('settingsPage').classList.remove('hidden');
        loadSavedSettings();
    }

    let allLinks = document.querySelectorAll('.nav-links a');
    allLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });
}

function loadSavedSettings() {
    let savedName = localStorage.getItem('user_fullname');
    let savedEmail = localStorage.getItem('user_email');
    let savedNotify = localStorage.getItem('user_notify');

    if (savedName) document.getElementById('userName').value = savedName;
    if (savedEmail) document.getElementById('userEmail').value = savedEmail;
    if (savedNotify) document.getElementById('userNotify').value = savedNotify;
}

function saveUserSettings() {
    let nameVal = document.getElementById('userName').value;
    let emailVal = document.getElementById('userEmail').value;
    let notifyVal = document.getElementById('userNotify').value;

    localStorage.setItem('user_fullname', nameVal);
    localStorage.setItem('user_email', emailVal);
    localStorage.setItem('user_notify', notifyVal);

    alert('Settings saved successfully!');
}

function setupMobileMenu() {
    let menuBtn = document.getElementById('mobileMenuBtn');
    let sidebar = document.getElementById('sidebar');

    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
                    sidebar.classList.remove('open');
                }
            }
        });
    }
}

function setupNavigation() {
    let navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            let pageName = link.getAttribute('data-page');
            switchPage(pageName);

            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('open');
            }
        });
    });
}

function init() {
    drawBarChart();
    showActivities();
    showRecentOrders();
    animateNumbers();
    setupNavigation();
    setupMobileMenu();

    let saveBtn = document.getElementById('saveSettingsBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', saveUserSettings);
    }
}

init();