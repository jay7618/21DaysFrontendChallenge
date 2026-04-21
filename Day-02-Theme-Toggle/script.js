const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

function applyTheme(theme) {
    if (theme === 'dark-mode') {
        body.classList.add('dark-mode');   
        toggleBtn.checked = true;         
    } else {
        body.classList.remove('dark-mode'); 
        toggleBtn.checked = false;          
    }
}

const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme);

toggleBtn.addEventListener('change', () => {
    if (toggleBtn.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', ''); 
    }
});