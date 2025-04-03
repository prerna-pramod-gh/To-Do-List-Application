const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const addTaskBtn = document.getElementById('addTaskBtn'); // Reference the button
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Load tasks from localStorage on page load
window.onload = () => {
    tasks.forEach(task => renderTask(task));
    updateTaskCount();
};

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!'); // Added feedback for empty input
        return;
    }

    const task = { text: taskText, completed: false };
    tasks.push(task);
    saveTasks();
    renderTask(task);
    taskInput.value = '';
    updateTaskCount();
}

function renderTask(task) {
    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = task.text;
    if (task.completed) taskSpan.classList.add('completed');

    // Edit task on double-click
    taskSpan.ondblclick = () => {
        const newText = prompt('Edit task:', taskSpan.textContent);
        if (newText !== null && newText.trim() !== '') {
            task.text = newText.trim();
            taskSpan.textContent = task.text;
            saveTasks();
        }
    };

    // Toggle completion
    taskSpan.onclick = () => {
        task.completed = !task.completed;
        taskSpan.classList.toggle('completed');
        saveTasks();
        updateTaskCount();
    };

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
        tasks = tasks.filter(t => t !== task);
        li.remove();
        saveTasks();
        updateTaskCount();
    };

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskCount() {
    const pending = tasks.filter(t => !t.completed).length;
    taskCount.textContent = `Pending Tasks: ${pending}`;
}

// Add task with Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
