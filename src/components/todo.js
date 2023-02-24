import "./todo.css";

function Todo(props) {
  return (
    <ul className="todo">
      {props.todos.map((item, index) => {
        return (
          <li key={index}>
            {item.todo} <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Todo;
