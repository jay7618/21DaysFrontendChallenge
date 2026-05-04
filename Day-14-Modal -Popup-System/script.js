
const modal = document.getElementById('modal');

function openModal(type) {
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalFooter = document.getElementById('modalFooter');

    if (type === 'info') {
        modalTitle.innerText = 'ℹ️ Information';
        modalBody.innerText = 'This is a simple info modal. Click outside or press ESC to close.';
        modalFooter.innerHTML = `<button class="modal-btn modal-confirm" onclick="closeModal()">Got it</button>`;
    }
    else if (type === 'delete') {
        modalTitle.innerText = '⚠️ Confirm Delete';
        modalBody.innerText = 'Are you sure you want to delete this? This action cannot be undone.';
        modalFooter.innerHTML = `
                    <button class="modal-btn modal-cancel" onclick="closeModal()">Cancel</button>
                    <button class="modal-btn modal-danger" onclick="deleteAction()">Delete</button>
                `;
    }
    else if (type === 'custom') {
        modalTitle.innerText = '✨ Custom Message';
        modalBody.innerHTML = 'You can put <strong>any HTML</strong> here. <br><br> Like this custom content!';
        modalFooter.innerHTML = `<button class="modal-btn modal-confirm" onclick="closeModal()">Close</button>`;
    }

    modal.classList.add('show');
}

function closeModal() {
    modal.classList.remove('show');
}

function deleteAction() {
    alert('Item deleted!');
    closeModal();
}

modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});
