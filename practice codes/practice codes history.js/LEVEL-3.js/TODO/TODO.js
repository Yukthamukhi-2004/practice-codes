2 / 1 / 2023;
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

function updateTodoInDom(oldTodo, newTodo) {
  const el = document.getElementById(`todo-${oldTodo.id}`);
  if (!el) return;

  const titleEl = el.querySelector(".todo-title");
  const descEl = el.querySelector(".todo-desc");

  if (titleEl && oldTodo.title !== newTodo.title) {
    titleEl.innerText = newTodo.title;
  }
  if (descEl && oldTodo.description !== newTodo.description) {
    descEl.innerText = newTodo.description;
  }
}

function updateState(oldTodos, newTodos) {
  const oldById = new Map();
  oldTodos.forEach((t) => oldById.set(t.id, t));

  const newById = new Map();
  newTodos.forEach((t) => newById.set(t.id, t));

  // adds + updates
  newTodos.forEach((newTodo) => {
    const oldTodo = oldById.get(newTodo.id);
    if (!oldTodo) {
      addTodoToDom(newTodo);
    } else if (
      oldTodo.title !== newTodo.title ||
      oldTodo.description !== newTodo.description
    ) {
      updateTodoInDom(oldTodo, newTodo);
    }
  });

  // removals
  oldTodos.forEach((oldTodo) => {
    if (!newById.has(oldTodo.id)) {
      removeTodoFromDom(oldTodo);
    }
  });

  return newTodos;
}
