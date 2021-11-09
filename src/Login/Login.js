import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [text, setText] = useState("");

  function handleLoginSubmit(text) {
    setUsername(text);
    setText("");
    localStorage.setItem("username", text);
  }

  return (
    <div id="login">
      {localStorage.getItem("username") ? (
        <h1 id="saluting">Salut, {username}</h1>
      ) : (
        <form>
          <input
            id="login-input"
            required
            maxLength="15"
            type="text"
            placeholder="Hello, Who are you?"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            id="login-button"
            onClick={(e) => {
              e.preventDefault();
              //   console.log(text);
              handleLoginSubmit(text);
            }}
          >
            Log in
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
