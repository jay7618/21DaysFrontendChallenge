const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const loadingScreen = document.getElementById('loadingScreen');
const appContainer = document.getElementById('appContainer');

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        appContainer.style.display = 'flex';
        loadTasks();
    }, 3000);
});

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList .list-group-item').forEach(item => {
        tasks.push({
            text: item.querySelector('span').textContent,
            completed: item.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTaskElement(text, completed = false) {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    if (completed) li.classList.add('completed');

    li.innerHTML = `
        <span>${text}</span>
        <div class="task-buttons">
            <button class="edit-btn"><i class="ri-edit-line"></i></button>
            <button class="complete-btn"><i class="ri-checkbox-circle-line"></i></button>
            <button class="delete-btn"><i class="ri-delete-bin-line"></i></button>
        </div>
    `;

    li.querySelector('.complete-btn').addEventListener('click', () => {
        li.classList.toggle('completed');
        saveTasks();
    });

    li.querySelector('.edit-btn').addEventListener('click', () => {
        const oldText = li.querySelector('span').textContent;
        Swal.fire({
            title: 'Edit your task:',
            input: 'text',
            inputValue: oldText,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
            showDenyButton: true,
        }).then((result) => {
            if (result.isConfirmed && result.value.trim() !== '') {
                li.querySelector('span').textContent = result.value.trim();
                saveTasks();
                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                li.remove();
                saveTasks();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your task has been deleted.",
                    icon: "success"
                });
            }
        });
    });

    taskList.appendChild(li);
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    createTaskElement(taskText);
    saveTasks();
    taskInput.value = '';

    Swal.fire({
        title: "Task Added !",
        icon: "success",
        draggable: true
    });
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});