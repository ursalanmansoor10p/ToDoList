import React from 'react'

function CalendarTask( {todos} ) {

console.log("todos",todos)

const findCompletedTasks = todos.filter((todo) => todo.completed === true);
  
console.log("ok",findCompletedTasks)
return (
    <div className="to">
      {!todos.length > 0 ? (
        <p>Sorry there are no completed tasks</p>
      ) : (
        <ul>
          {findCompletedTasks.map((task) => (
            <li style={{ marginBottom: "20px" }}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
          }

export default CalendarTask