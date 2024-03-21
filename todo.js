let todoItems = [];

function renderTodo(todo) {
    const table = document.getElementById("todo-table");
    const row = table.insertRow(-1);
    // for text todo item
    const textCell = row.insertCell(0);
    textCell.innerText = todo.text;
    // for date item
    const dateCell = row.insertCell(1);
    dateCell.innerText = todo.date;
  }

function addTodo() {
  const todoText = document.getElementById("todo-id").value;
  const todo = {
    text: todoText,
    date: new Date().toLocaleString("en-IE"),
  };
  todoItems.push(todo);
  renderTodo(todo);
}
// function to create a unique id
function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }