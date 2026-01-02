2 / 1 / 2025;
import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (!title.trim() && !description.trim()) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), title: title.trim(), description: description.trim() },
    ]);

    setTitle("");
    setDescription("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>TODO app with useState</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button onClick={addTodo}>Add TODO</button>

      <hr />
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <h3>{todo.title || "(No title)"}</h3>
            <p>{todo.description || "(No description)"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
