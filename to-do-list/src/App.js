
import './App.css';
import React, { useEffect, useState } from 'react';
import Title from './components/Title';
import AddTodo from './components/AddTodo';
import Todo from './components/TodoDisplay';
import {collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc, getDocs, where} from "firebase/firestore"
import { db } from "./firebase";
import { ImList } from "react-icons/im";
import { BsCalendarCheck } from "react-icons/bs";
import CalendarTask from './components/CalendarTask';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [td, setTd] = React.useState([]);
  const tdCollectionRef = collection(db, 'todos');
  
  
  // when list view is true we will get the normal task
  // when false we will get completed calendar tasks
  // whole code is depended on list view. If true
  // left tab is open and displays both completed and todo
  // tasks. Otherwise it shows the calendar task with 
  // completed tasks
  const [listView, selectListView] = useState(true);

  
  //Fetch the data from firebase db using useEffect Hook. 
  //the [] as the second parameter means the useEffect will only run once
  React.useEffect(() => {

    //reference to the collection
   
    const q = query(collection(db, "todos"));

    // if you use the onSnapshot() method you constantly
    // listen to a document as oppose to get() which listens once
    // we want to listen constantly in order for app to update 
    // in real time
    const unsub = onSnapshot(q, (querySnapshot)=>{
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({...doc.data(), id: doc.id})
      })
      setTodos(todosArray);
    })
    return () => unsub()
  }, []);

  // toggle complete. The reference to this is passed down to 
  // child component 

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed
    });
  };
  // Delete functionality. The reference to this is passed down to 
  // child component 
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  console.log(todos);
 

  // Create a query against the collection
  console.log(listView);


  return (
    <div className="App">
      <div className="form_design">
       <div className="tabs">
         {/* if list view is true then take out borders of left
         button and grey out right icon */}
          <button className={listView ? "tab_btn left active" : "tab_btn left"} onClick={() => selectListView(true)}>
            <ImList className = {listView ? "tab_icons" : "tab_icons disabled"} />
          </button>
          {/* if list view is false so the opposite*/}
          <button className={!listView ? "tab_btn right active" : "tab_btn right"} onClick={() => selectListView(false)}>
            <BsCalendarCheck className = {listView ? "tab_icons disabled" : "tab_icons"}
              
            />
          </button>
        </div>
        {/* if listview is true then pass then display 
        TodoDisplay.js */}
        {listView ? (
          <div>
            
            {todos.map((todo) => (

              <div>
              <Todo
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                handleDelete={handleDelete}
              />
              </div>
            )
            
            )}
            <AddTodo />
          </div>
          // if list view is false show CalenderTask
        ) : (
          <CalendarTask todos={todos} />
        )}
    


        
        </div>
      
    
    </div>
  );
}

export default App;
