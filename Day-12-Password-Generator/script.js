
let bigLetters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
let smallLetters = 'abcdefghijkmnpqrstuvwxyz';
let digits = '23456789';
let specialChars = '!@#$%^&*';
let passLength = 16;

let passDisplay = document.getElementById('generatedPass');
let genBtn = document.getElementById('makePasswordBtn');
let copyBtn = document.getElementById('copyPassBtn');
let toastMsg = document.getElementById('popupMsg');

let checkBig = document.getElementById('includeUppercase');
let checkSmall = document.getElementById('includeLowercase');
let checkDigits = document.getElementById('includeNumbers');
let checkSpecial = document.getElementById('includeSymbols');

function makePassword() {
    let availableChars = '';

    if (checkBig.checked) availableChars += bigLetters;
    if (checkSmall.checked) availableChars += smallLetters;
    if (checkDigits.checked) availableChars += digits;
    if (checkSpecial.checked) availableChars += specialChars;

    if (availableChars === '') {
        availableChars = smallLetters;
        checkSmall.checked = true;
    }

    let newPassword = '';
    for (let i = 0; i < passLength; i++) {
        let randomIndex = Math.floor(Math.random() * availableChars.length);
        newPassword += availableChars[randomIndex];
    }

    passDisplay.textContent = newPassword;
}

function copyToClipboard() {
    let currentPass = passDisplay.textContent;

    if (currentPass === 'Click Generate') {
        showPopUp('Generate something first!');
        return;
    }

    navigator.clipboard.writeText(currentPass).then(function () {
        showPopUp('Copied to clipboard!');
    }).catch(function () {
        showPopUp('Failed to copy');
    });
}

function showPopUp(message) {
    toastMsg.textContent = message;
    toastMsg.classList.add('show');

    setTimeout(function () {
        toastMsg.classList.remove('show');
    }, 1500);
}

genBtn.addEventListener('click', makePassword);
copyBtn.addEventListener('click', copyToClipboard);

checkBig.addEventListener('change', makePassword);
checkSmall.addEventListener('change', makePassword);
checkDigits.addEventListener('change', makePassword);
checkSpecial.addEventListener('change', makePassword);

makePassword();