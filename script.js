
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');


function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }


    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

  
    const task = document.createElement('span');
    task.textContent = taskText;

  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';

 
    task.addEventListener('click', () => {
        task.classList.toggle('completed');
    });

 
    deleteBtn.addEventListener('click', () => {
        listItem.remove();
    });

 
    listItem.appendChild(task);
    listItem.appendChild(deleteBtn);


    todoList.appendChild(listItem);


    todoInput.value = '';
}


addBtn.addEventListener('click', addTask);


todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
