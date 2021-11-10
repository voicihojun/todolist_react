import "./App.css";
import Clock from "./Clock/Clock";
import Login from "./Login/Login";
import TodoForm from "./Todo/TodoForm";
import Quote from "./Quote/Quote";
import Weather from "./Weather/Weather";

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Clock />
        <Login />
        <TodoForm />
        <Weather />
        <Quote />
      </div>
    </div>
  );
}

export default App;
