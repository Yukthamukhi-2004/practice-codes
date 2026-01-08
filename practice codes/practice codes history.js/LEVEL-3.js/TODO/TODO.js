6 / 1 / 2025;
function addTodoToDom(todo) {
  const container = document.getElementById("todos");

  const div = document.createElement("div");
  div.id = `todo-${todo.id}`;
  div.className = "todo";

  const title = document.createElement("h3");
  title.className = "todo-title";
  title.innerText = todo.title;

  const desc = document.createElement("p");
  desc.className = "todo-desc";
  desc.innerText = todo.description;
  container.appendChild(div);
  div.appendChild(title);
  div.appendChild(desc);
}

function removeTodoFromDom(todo) {
  const el = document.getElementById(`todo-${todo.id}`);
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
}
