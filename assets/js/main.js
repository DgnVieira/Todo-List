const inputTask = document.querySelector('.input-task');
const btnAddTask = document.querySelector('.btn-add-task');
const tasks = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li');
    return li;
};

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createDeleteBtn(li) {
    li.innerText += ' ';
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.setAttribute('class', 'delete');
    li.appendChild(deleteBtn);
}

function createTask(textoInput) {
    const li = createLi();
    li.innerText = textoInput;
    tasks.appendChild(li);
    clearInput();
    createDeleteBtn(li);
    saveTasks();
    saveTasks();

};


inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        createTask(inputTask.value);
    };
    // keycode 13
});

function saveTasks() {
    const liTask = tasks.querySelectorAll('li');
    const todoList = [];

    for (let task of liTask) {
        let taskText = task.innerText;
        taskText = taskText.replace('Delete', ' ').trim();
        todoList.push(taskText);
    }

    const tasksJSON = JSON.stringify(todoList);
    localStorage.setItem('tasks', tasksJSON);
};

btnAddTask.addEventListener('click', function () {
    if (!inputTask.value) return;
});

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('delete')) {
        el.parentElement.remove();
        saveTasks();
    }
})

function addSaveTasks() {
    const task = localStorage.getItem('tasks');
    const todoList = JSON.parse(task);
    for (let task of todoList) {
        createTask(task);
    }
}

addSaveTasks();