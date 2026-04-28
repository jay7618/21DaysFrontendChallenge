const notesContainer = document.getElementById('notes-container');
const addNoteBtn = document.getElementById('addNoteBtn');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function renderNotes() {
    notesContainer.innerHTML = '';
    notes.forEach((note, index) => {
        const colorClass = `color-${index % 5}`;
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note-card', colorClass);
        noteDiv.innerHTML = `
            <div>${note.content}</div>
            <div class="note-time">${note.time}</div>
            <div class="note-actions">
                <button id="editNote" class="btn-primary" onclick="editNote(${index})" title="Edit">&#9998;</button>
                <button id="deleteNote" onclick="deleteNote(${index})" title="Delete">&#128465;</button>
            </div>
        `;
        notesContainer.appendChild(noteDiv);
    });
}

addNoteBtn.addEventListener('click', () => {
    Swal.fire({
        title: 'New Note',
        input: 'textarea',
        inputLabel: 'Enter your note:',
        inputPlaceholder: 'Type your note here...',
        showCancelButton: true
    }).then(result => {
        if (result.value) {
            const now = new Date();
            notes.push({ content: result.value, time: now.toLocaleString() });
            saveNotes();
            renderNotes();
            Swal.fire('Saved!', 'Your note has been added.', 'success');
        }
    });
});

function editNote(index) {
    Swal.fire({
        title: 'Edit Note',
        input: 'textarea',
        inputLabel: 'Update your note:',
        inputValue: notes[index].content,
        showCancelButton: true
    }).then(result => {
        if (result.value) {
            notes[index].content = result.value;
            notes[index].time = new Date().toLocaleString();
            saveNotes();
            renderNotes();
            Swal.fire('Updated!', 'Your note has been updated.', 'success');
        }
    });
}

function deleteNote(index) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0d6efd',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            notes.splice(index, 1);
            saveNotes();
            renderNotes();
            Swal.fire('Deleted!', 'Your note has been deleted.', 'success');
        }
    });
}

renderNotes();