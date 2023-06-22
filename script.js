// bring an element from todo list

const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUL = document.getElementById('todos');
const todos =JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}
form.addEventListener('submit', (e)=> {
    e.preventDefault();

    addTodo();


})

function addTodo(todo) {
    //saving the input value(text) to a var
    let todoText = input.value;
    
    //checking if a todo exist
    if(todo) {

        //set the value of input to the value of otdo text
        todoText = todo.text;
    }
    //console.log(todoText);

    //if the text exist
    if (todoText) {
        //create a new list item
        const todoEL = document.createElement("li");

        if (todo && todo.completed){
            todoEL.classList.add('completed');
        }  

       //make the text of li same as input value

        todoEL.innerText = todoText;
         //append the todo li item to the todo unorderd list
         todoUL.appendChild(todoEL);

         //clear out after enter
         input.value =" "


         todoEL.addEventListener('click', ()=>{
             todoEL.classList.toggle('cpmpleted');
             updateLS();
         })

          todoEL.addEventListener('contextmenu',(e)=> {
            e.preventDefault();

           todoEL.remove();
           updateLS();
          });
      }
     updateLS();
}

function updateLS(){
     const todosEl = document.querySelectorAll('li');

    const todos =[]
    todosEl.forEach((todoEl)=> {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')

        })
    })

    localStorage.setItem("todos", JSON.stringify(todos))
}