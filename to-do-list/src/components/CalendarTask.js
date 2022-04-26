import React from "react";

function CalendarTask({ todos }) {
  //console.log("calendar",todos)
  //A commented out console.log to see props object

  //Filter through the todos prop. The prop holds object
  //db prop that was passed {todos}
  const filteredTodos = todos.filter((todos) => todos.completed === true);

  // filtered through db console.logged out
  console.log("ok", filteredTodos);

  return (
    <div className="to" data-testid="calendar-tasks">
      {!(filteredTodos.length > 0) ? (
        <p>Sorry there are no completed tasks</p>
      ) : (
        <ul>
          {/* .map goes through all the arrats to print each db.title  */}
          {filteredTodos.map((task) => (
            <li key={task.id} style={{ marginBottom: "20px" }}>
              {task.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CalendarTask;
