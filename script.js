const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    renderTasks();
    taskInput.value = '';
  }
});

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${index})">
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
