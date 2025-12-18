const API_URL = 'http://localhost:3000';
const token = localStorage.getItem('token');

if (!token) {
  window.location.href = 'index.html';
}

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
};

async function loadTasks() {
  const response = await fetch(`${API_URL}/tasks`, { headers });
  const tasks = await response.json();

  const list = document.getElementById('task-list');
  list.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;

    checkbox.addEventListener('change', async () => {
      await fetch(`${API_URL}/tasks/${task._id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({ completed: checkbox.checked })
      });
      loadTasks();
    });

    const span = document.createElement('span');
    span.textContent = task.title;
    span.classList.add('task-text');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', async () => {
      await fetch(`${API_URL}/tasks/${task._id}`, {
        method: 'DELETE',
        headers
      });
      loadTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });
}

document.getElementById('taskForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const input = document.getElementById('title');
  const title = input.value.trim();

  if (!title) return;

  await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ title })
  });

  input.value = '';
  loadTasks();
});

document.getElementById('logout').addEventListener('click', () => {
  localStorage.removeItem('token');
  window.location.href = 'index.html';
});

loadTasks();
