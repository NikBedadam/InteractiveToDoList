// Selecting elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add task function
function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create list item
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    // Create task text element
    const task = document.createElement('span');
    task.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';

    // Add event listener for marking as complete
    task.addEventListener('click', () => {
        task.classList.toggle('completed');
    });

    // Add event listener for deleting task
    deleteBtn.addEventListener('click', () => {
        listItem.remove();
    });

    // Append elements to the list item
    listItem.appendChild(task);
    listItem.appendChild(deleteBtn);

    // Append list item to the todo list
    todoList.appendChild(listItem);

    // Clear input field
    todoInput.value = '';
}

// Add event listener for add button
addBtn.addEventListener('click', addTask);

// Add task on pressing Enter key
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
