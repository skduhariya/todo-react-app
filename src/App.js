import { useState } from "react";
import "./App.css";
import Todo from "./components/todo";

function App() {
  const [todoInput, setTodoInput] = useState(""); // ['', function]

  // let defaultTodoList = [
  //   {
  //     todo: "Learn React JS",
  //     id: 1,
  //   },
  //   {
  //     todo: "Learn JS",
  //     id: 2,
  //   },
  //   {
  //     todo: "Learn Java",
  //     id: 3,
  //   },
  //   {
  //     todo: "Learn HTML",
  //     id: 4,
  //   },
  //   {
  //     todo: "Learn CSS",
  //     id: 5,
  //   },
  // ];

  const [todoList, setTodoList] = useState([]);

  function inputChnageHandler(evt) {
    setTodoInput(evt.target.value);
  }

  const addTddoHandler = () => {
    if (todoInput.trim() !== "") {
      // == ,=== ?
      const todo = {
        todo: todoInput,
        id: new Date().getTime(),
      };

      setTodoList([todo, ...todoList]);

      setTodoInput(""); // clearing input
    }
  };

  return (
    <div className="App">
      <h1>React Todo app</h1>
      <div className="todo-form">
        <form>
          <input
            type="text"
            placeholder="Enter todo ... "
            value={todoInput}
            onChange={inputChnageHandler}
          />
          <button type="button" onClick={addTddoHandler}>
            Add
          </button>
        </form>
      </div>
      {todoList.length > 0 ? (
        <Todo todos={todoList} />
      ) : (
        <p>No TODO added yet please start adding now</p>
      )}
    </div>
  );
}

export default App;
