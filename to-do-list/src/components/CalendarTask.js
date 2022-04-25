import React from 'react'

function CalendarTask( {todos} ) {

console.log("calendar",todos)

const filteredTodos = todos.filter((todos) => todos.completed === true);
  
console.log("ok",filteredTodos)
return (
    <div className="to">
      {!todos.length > 0 ? (
        <p>Sorry there are no completed tasks</p>
      ) : (
        <ul>
          {filteredTodos.map((task) => (
            <li style={{ marginBottom: "20px" }}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
          }

export default CalendarTask