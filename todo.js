let todoItems = [];
let doneItems = [];

// function to create a unique id
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function renderTodo(todo) {
  const table = document.getElementById("todo-table");
  const row = table.insertRow(-1);
  // for text todo item
  const textCell = row.insertCell(0);
  textCell.innerText = todo.text;
  // for date item
  const dateCell = row.insertCell(1);
  dateCell.innerText = todo.date;
  // for delete button
  const deleteCell = row.insertCell(2);
  deleteCell.innerHTML = `<a onclick="deleteTodo('${todo.id}')" <a class="button">Delete</a>`;
}

function renderAllTodos() {
  for (let i = 0; i < todoItems.length; i++) {
    renderTodo(todoItems[i]);
  }
}

function addTodo() {
  const todoText = document.getElementById("todo-id").value;
  const todo = {
    text: todoText,
    date: new Date().toLocaleString("en-IE"),
    id: uuidv4(),
  };
  todoItems.push(todo);
  renderTodo(todo);
}

function deleteAllTodos() {
  let table = document.getElementById("todo-table");
  for (let i = 0; i < todoItems.length; i++) {
    table.deleteRow(-1);
  }
}

function deleteTodo(id) {
  // get done item
  const doneItem = todoItems.find((todo) => todo.id == id);
  //console.log(doneItem);
  AddToDone(doneItem);
  
  deleteAllTodos();
  const found = todoItems.findIndex((todo) => todo.id == id);
  todoItems.splice(found, 1);
  renderAllTodos();
}

function AddToDone(todoObject) {
  console.log(todoObject);
  doneItems.push(todoObject);
  console.log("pushed to array", todoObject);
  renderDone(todoObject);
}

function renderDone(done) {
  const table = document.getElementById("done-table");
  const row = table.insertRow(-1);
  // for text done item
  const textCell = row.insertCell(0);
  textCell.innerText = done.text;
  // for date item
  const dateCell = row.insertCell(1);
  dateCell.innerText = done.date;
}
