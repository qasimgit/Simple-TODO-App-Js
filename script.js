// Selectors //

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// EventListener //

todoButton.addEventListener('click' , addTodo);

//functions //

function addTodo(event) {
    //prevent to submit form //
    event.preventDefault();
    // div //
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // creating li //
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerHTML = 'Hey'
    todoDiv.appendChild(newTodo);

    //check button//
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.innerHTML = "<i class='fa fa-check'></i>";
    todoDiv.appendChild(completeButton);

    // delete button//

    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = "<i class='fa fa-trash'></i>";
    todoDiv.appendChild(trashButton);

    //appending to ul list//

    todoList.appendChild(todoDiv);


}