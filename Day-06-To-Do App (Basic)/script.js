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
        <button class="delete-btn"><i class="ri-delete-bin-line"></i></button>
    `;

    li.querySelector('span').addEventListener('click', () => {
        li.classList.toggle('completed');
        saveTasks();
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
        saveTasks();
    });

    taskList.appendChild(li);
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    createTaskElement(taskText);
    saveTasks();
    taskInput.value = '';
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});