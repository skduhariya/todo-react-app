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

  const addTddoHandler = (evt) => {
    // evt.preventdefault();
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

  const deleteTodos = (id) => {
    const list = todoList.filter((item) => {
      return item.id != id;
    });

    setTodoList(list);
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
        <Todo todos={todoList} removeElemt={deleteTodos} />
      ) : (
        <p style={{ textAlign: "center", width: "50%" }}>
          No TODO added yet please start adding now
        </p>
      )}
    </div>
  );
}

export default App;
