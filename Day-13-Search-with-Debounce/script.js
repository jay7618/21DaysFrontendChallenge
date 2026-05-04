
const items = [
    "Apple", "Mango", "Banana", "Orange", "Grapes", "Strawberry", "Watermelon",
    "JavaScript", "Python", "Java", "C++", "Ruby", "Go", "Rust",
    "India", "USA", "Canada", "Australia", "Japan", "Germany", "France",
    "Laptop", "Keyboard", "Mouse", "Monitor", "Printer", "Scanner",
    "Red", "Blue", "Green", "Yellow", "Black", "White", "Purple"
];

let debounceTimer = null;

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');

function filterItems(searchTerm) {
    if (searchTerm.trim() === '') {
        return [];
    }

    const term = searchTerm.toLowerCase();
    return items.filter(item => item.toLowerCase().includes(term));
}

function showResults(matchingItems, searchTerm) {
    if (matchingItems.length === 0) {
        resultsContainer.innerHTML = `<div class="empty-msg">😕 No results for "${searchTerm}"</div>`;
        return;
    }

    let html = '';
    matchingItems.forEach(item => {
        const lowerItem = item.toLowerCase();
        const lowerTerm = searchTerm.toLowerCase();
        const index = lowerItem.indexOf(lowerTerm);

        if (index !== -1 && searchTerm.trim() !== '') {
            const before = item.substring(0, index);
            const matched = item.substring(index, index + searchTerm.length);
            const after = item.substring(index + searchTerm.length);
            const highlighted = `${before}<mark style="background: #fef08a; padding: 0 2px; border-radius: 4px;">${matched}</mark>${after}`;
            html += `<div class="result-item">${highlighted}</div>`;
        } else {
            html += `<div class="result-item">${item}</div>`;
        }
    });

    resultsContainer.innerHTML = html;
}

function handleSearch() {
    const searchValue = searchInput.value;

    if (debounceTimer) {
        clearTimeout(debounceTimer);
    }

    if (searchValue.trim() === '') {
        resultsContainer.innerHTML = `<div class="empty-msg">✨ Start typing to see results</div>`;
        return;
    }

    debounceTimer = setTimeout(() => {
        const matched = filterItems(searchValue);
        showResults(matched, searchValue);
    }, 400);
}

searchInput.addEventListener('input', handleSearch);

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchInput.value = '';
        resultsContainer.innerHTML = `<div class="empty-msg">✨ Start typing to see results</div>`;
    }
});