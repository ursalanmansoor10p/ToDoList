import React from "react";


export default function Todo(
    {
        todo,
        toggleComplete,
        handleDelete,
        handleEdit
    })
    {
        const [newTitle, setNewTitle] = React.useState(todo.title);

        const handleChange = (e) => {
            e.preventDefault();
            if (todo.complete === true) {
                setNewTitle(todo.title);
            }
            else {
                todo.title = "";
                setNewTitle(e.target.value);

            }
        }

        return(
            <div>
                <button 
                        className="button-complete"
                        onClick={()=> toggleComplete(todo)}
                        >
                        complete    
                    </button>


                <input
                style = {{ textDecoration: todo.completed && "line-through"}}
                type="text"
                value={todo.title === "" ? newTitle : todo.title}
                className='list'
                onChange={handleChange}
                />
                <div>
                    
                    
                    <button
                        className="button-delete"
                        onClick={() => handleDelete(todo.id)}
                    >
                        delete
                    </button>
                </div>
            </div>
            
        );
    }