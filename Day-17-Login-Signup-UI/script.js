
let users = JSON.parse(localStorage.getItem('users')) || [];

function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

function showError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

function clearError(elementId) {
    document.getElementById(elementId).innerText = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function switchToSignup() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.remove('hidden');
    document.getElementById('loginTab').classList.remove('active');
    document.getElementById('signupTab').classList.add('active');
    clearAllErrors();
    document.getElementById('signupName').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
    document.getElementById('signupConfirm').value = '';
}

function switchToLogin() {
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('signupTab').classList.remove('active');
    document.getElementById('loginTab').classList.add('active');
    clearAllErrors();
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
}

function clearAllErrors() {
    const errorIds = [
        'loginEmailError', 'loginPasswordError',
        'signupNameError', 'signupEmailError',
        'signupPasswordError', 'signupConfirmError'
    ];
    errorIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.innerText = '';
    });
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    let isValid = true;

    if (!email) {
        showError('loginEmailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('loginEmailError', 'Enter a valid email address');
        isValid = false;
    } else {
        clearError('loginEmailError');
    }

    if (!password) {
        showError('loginPasswordError', 'Password is required');
        isValid = false;
    } else {
        clearError('loginPasswordError');
    }

    if (!isValid) return;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify({ name: user.name, email: user.email }));
        alert(`✅ Welcome back, ${user.name}!`);
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
        console.log('Logged in user:', user);
    } else {
        showError('loginPasswordError', 'Invalid email or password');
    }
}

function handleSignup() {
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirm').value;

    let isValid = true;

    if (!name) {
        showError('signupNameError', 'Full name is required');
        isValid = false;
    } else if (name.length < 2) {
        showError('signupNameError', 'Name must be at least 2 characters');
        isValid = false;
    } else {
        clearError('signupNameError');
    }

    if (!email) {
        showError('signupEmailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('signupEmailError', 'Enter a valid email address');
        isValid = false;
    } else if (users.some(u => u.email === email)) {
        showError('signupEmailError', 'Email already registered');
        isValid = false;
    } else {
        clearError('signupEmailError');
    }

    if (!password) {
        showError('signupPasswordError', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showError('signupPasswordError', 'Password must be at least 6 characters');
        isValid = false;
    } else {
        clearError('signupPasswordError');
    }

    if (!confirm) {
        showError('signupConfirmError', 'Please confirm your password');
        isValid = false;
    } else if (password !== confirm) {
        showError('signupConfirmError', 'Passwords do not match');
        isValid = false;
    } else {
        clearError('signupConfirmError');
    }

    if (!isValid) return;

    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers();

    alert(`🎉 Account created successfully! Welcome, ${name}!`);

    document.getElementById('signupName').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
    document.getElementById('signupConfirm').value = '';

    switchToLogin();
}

function setupToggleButtons() {
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');

    if (loginTab) {
        loginTab.addEventListener('click', switchToLogin);
    }

    if (signupTab) {
        signupTab.addEventListener('click', switchToSignup);
    }
}

function addEnterKeyListeners() {
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

    if (loginEmail) {
        loginEmail.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleLogin();
        });
    }

    if (loginPassword) {
        loginPassword.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleLogin();
        });
    }

    const signupInputs = ['signupName', 'signupEmail', 'signupPassword', 'signupConfirm'];
    signupInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') handleSignup();
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    setupToggleButtons();
    addEnterKeyListeners();
});