import React from "react";

import Checkbox from "react-custom-checkbox";
import { FaTrashAlt } from "react-icons/fa";
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
            <div className='to'>
                <Checkbox
                checked={todo.completed}
                icon={
                    <img src={require("./check.png")} style={{ width: 24 }} alt="" />
                }
                borderColor="rgba(0, 0, 0, 0.452)"
                size={18}
                onChange={() => toggleComplete(todo)}
                />

                <div>{todo.completed === true ? <del>{newTitle}</del> : newTitle}</div>
                <div>
                <div>
                    <button
                        className="button-delete"
                        onClick={() => handleDelete(todo.id)}>
                        <FaTrashAlt />
                    </button>
                </div>
            </div>
            </div>
            
        );
    }