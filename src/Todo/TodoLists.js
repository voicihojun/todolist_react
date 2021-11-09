import React from "react";

function TodoLists({ todos, deleteTodo }) {
  return (
    <div id="todo-ul">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} id={todo.id} className="todo-li">
            {todo["todo"]}
            <button
              className="todo-button"
              onClick={(e) => {
                deleteTodo(e);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;
