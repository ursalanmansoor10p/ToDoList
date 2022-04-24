import React from "react";
import { db } from "../firebase"
import { collection, addDoc} from "firebase/firestore"

export default function AddTodo() {
    const [title, setTitle] = React.useState("");

        const handleSubmit = async (e) => {
        e.preventDefault();
        if(title !== ""){
            await addDoc(collection(db,'todos'), {
                title,
                completed: false,
            });
            setTitle("");
            
        }
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
          <div className="input_container">
            <input
              type="text"
              placeholder="Please enter text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input_style"
            />
            <div className="btn_container">
            <button class="button button1">+</button>
             </div>

          </div>
          
        </form>
      </div>
    );


}