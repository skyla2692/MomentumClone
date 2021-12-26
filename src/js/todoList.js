const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("todo-list");

const TODO_KEY = "todos";

function paintToDo(newToDo){
    console.log("PAINT", newToDo);
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newToDo = todoInput.value;
    paintToDo(newToDo);
    todoInput.value = "";
}

todoForm.addEventListener("submit", handleToDoSubmit);