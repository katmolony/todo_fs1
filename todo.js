let todoItems = [];

function renderTodo(todo, date) {
    const table = document.getElementById("todo-table");
    const row = table.insertRow(-1);
    const textCell = row.insertCell(0);
    textCell.innerText = todo.text;

    const textDate = row.insertCell(1);
    textDate.innerText = date.text;
  }

function addTodo() {
  const todoText = document.getElementById("todo-id").value;
  const todo = {
    text: todoText
  };
  const getCurrentDate = new Date(Date.now());
  const date = {
    text: getCurrentDate.toLocaleString()
  };
  todoItems.push(todo, date);
  renderTodo(todo, date);

  console.log(date);
}