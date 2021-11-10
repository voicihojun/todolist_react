import React, { useEffect, useState } from "react";
import TodoLists from "./TodoLists";

function TodoForm() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function deleteTodo(e) {
    const id = e.target.parentNode.id;
    setTodos(todos.filter((todo) => todo.id !== id));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function handleTodoSubmit(newTodo) {
    const newTodoObj = { id: String(Date.now()), todo: newTodo };
    setTodos([...todos, newTodoObj]);
    saveTodos(todos);
    // setInput(""); // Through this code, I shoud be able to remove the content of the input,
    // but it does not work. I don't know why. probably, we should put this function on a button after making a button?
  }

  return (
    <div id="todo-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleTodoSubmit(input);
        }}
      >
        <input
          id="todo-input"
          type="text"
          placeholder="Write What to do and Press Enter."
          required
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <TodoLists todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoForm;
