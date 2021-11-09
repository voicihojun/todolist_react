import React, { useState } from "react";
import TodoLists from "./TodoLists";

function TodoForm() {
  let [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function deleteTodo(e) {
    console.log(e.target.parentNode.id);
    const id = e.target.parentNode.id;
    setTodos(todos.filter((todo) => todo.id !== id));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function handleTodoSubmit(newTodo) {
    const newTodoObj = { id: String(Date.now()), todo: newTodo };
    setTodos([...todos, newTodoObj]);
    saveTodos();
    // setInput(""); // Through this code, I shoud be able to remove the content of the input,
    // but it does not work. I don't know why. probably, we should put this function on a button after making a button?
  }
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
  }

  return (
    <div>
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
