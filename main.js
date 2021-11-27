// Todo Class
class Todo{
    constructor(title, isReady, todoId){
        this.title = title
        this.isReady = isReady
        this.todoId = todoId
    }

    getTitle(){
        return this.title
    }

    getReady(){
        return this.isReady
    }

    getTodoId(){
        return this.todoId
    }

    setReady(x){
        this.isReady = x
    }

    appendTemplate(){
        return `
            <div class="todo" id="${this.todoId}">
                <div class="todo-title">
                    <h2>${this.title}</h2>
                </div>
                <div class="todo-events">
                    <i class="fas fa-check" title="Mark as ready"></i>
                    <i class="fas fa-times" title="Mark as unready"></i>
                    <i class="fas fa-trash" title="Delete todo" onClick="remove(${this.todoId})"></i>
                </div>
            </div>
        `
    }
}

// Save Event
const save = (e) => {
    e.preventDefault()
    // Get Input Value
    let todoValue = document.querySelector(".form-input").value
    // If the value is empty break the function
    if(!todoValue){
        return
    }
    // Otherwise create new Todo and append it to our HTML
    todo = new Todo(todoValue, false, Math.floor(Math.random() * 100000000))
    todosDiv = document.querySelector(".todos")
    todosDiv.innerHTML += todo.appendTemplate()
}
// Save Event Listener
const saveButton = document.getElementById('save')
saveButton.addEventListener('click', (e) => save(e))

// Delete Event
const remove = (id) => {
    let todos = document.querySelectorAll(".todo")
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id == id){
            todos[i].remove()
        }
    }
}