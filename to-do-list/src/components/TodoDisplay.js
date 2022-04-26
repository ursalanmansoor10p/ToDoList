import React from "react";

import Checkbox from "react-custom-checkbox";
import { FaTrashAlt } from "react-icons/fa";
export default function Todo(
  //Props that are handed down
  //todo is the collection database object
  //togglecomplete is the reference to the parent function
  //handleDelete is the reference to the parent function
  { todo, toggleComplete, handleDelete }
) {
  //have a state of all todo titles for conditional rendering
  const [newTitle, setNewTitle] = React.useState(todo.title);

  console.log("todo", todo);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  return (
    // the display div is split into three things, check mark. display and
    //delete button
    <div className="to" data-testid="todo-display">
      <Checkbox
        data-testid="checkbox"
        checked={todo.completed}
        icon={<img src={require("./check.png")} style={{ width: 24 }} alt="" />}
        borderColor="rgba(0, 0, 0, 0.452)"
        size={18}
        onChange={() => toggleComplete(todo)}
      />
      {/* conditional renders if completed should be crossed out  */}
      <div data-testid="todo-title">
        {todo.completed === true ? <del>{newTitle}</del> : newTitle}
      </div>
      <div>
        <div>
          {/*  delete references the handle delete function from parent */}
          <button
            className="button-delete"
            onClick={() => handleDelete(todo.id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
}
