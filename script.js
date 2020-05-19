// Selectors //

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// EventListener //

todoButton.addEventListener('click' , addTodo);
todoList.addEventListener("click",deleteCheck);

//functions //

function deleteCheck(e){
    let item = e.target;
    console.log(item);
    if(item.parentElement.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.parentElement.remove();  
    }



}

function addTodo(event) {
    //prevent to submit form //
    event.preventDefault();
    // div //
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // creating li //
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);



    // delete button//

    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = "<i class='fa fa-trash'></i>";
    todoDiv.appendChild(trashButton);


    

    //appending to ul list//

    todoList.appendChild(todoDiv);

    //clearoing iput value after enter//

    todoInput.value = "";


}