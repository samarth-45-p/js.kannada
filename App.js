/*import React,{useState} from "react";
function Text(){
  const[show , setShow]=useState(true);
  return(
    <div>
    <button onClick={()=>setShow(!show)}>{show ? "Hide":"Show"}Text
    </button>
    {show && <p>this text can be hide</p>}</div>
  );
}
export default Text;*/


/*import React,{useState} from "react";
function Switch(){
  const[on, setisOn]=useState(false);
  return(
    <div>
      <button onClick={()=>setisOn(!on)}>{isOn ? "On":"Off"}Switch</button>
    </div>
  );
}
export default Switch;*/


/*import React,{useState} from "react";
function SwitchButton(){
  const[isOn,setIsOn]=useState(false);
  const toggleSwitch=()=>{
    setIsOn(!isOn)
  };
  return(
    <div style={{textAlign:"center",marginTop: "50px"}}>
      <button onClick={toggleSwitch}
      style={{
        backgroundColor:isOn ? "green": "red",
        color:"white",
        padding:"10px 20px",
        border:"none",
        borderRadius:"25px",
        cursor:"pointer",
      }}>
        {isOn ? "ON":"OFF"}
      </button></div>
  );
}
export default SwitchButton;*/


/*import React,{useState} from "react";
function Like(){
  const[liked,setliked]=useState(false)
  const handleClick=()=>{
    setliked(!liked);

  };

  
  return(
    <button onClick={handleClick}>
      {liked ? "❤️ Liked": "🤍 Like"}
      </button>
  );
}
export default Like;*/


/*import React ,{useState} from "react";
function Tasklist(){
  const[tasks ,setTasks]=useState([]);
  const addTask=()=>{
    const newTask=`Task ${tasks.length +1}`;
    setTasks([...tasks ,newTask]);
  };
  return(
    <div>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task,index)=>(
          <li key={index}>{task}</li>
        ))}

      </ul>
    </div>
  )
}
export default Tasklist;*/



/*import React,{useState} from "react";
function UserList(){
  const[user, setUser]=useState({name:"",age:"",email:"",phoneno:""});
  const[users ,setUsers]=useState([]);
  const addUser=()=>{
    if(user.name && user.age && user.email && user.phoneno ){

    
    setUsers([...users,user]);
    setUser({name:"" ,age:"",email:"",phoneno:""});
  }else{
    alert("please fill all fields");
  
  };
  return(
    <div>
      <h2>User Registration</h2>
      <input type="text"
      placeholder="name"
      value={user.name}
      onChange={(e)=>setUser({...user,name:e.target.value})}></input><br/>
      <input type="number"
      placeholder="Age"
      value={user.age}
      onChange={(e)=>setUser({...user,age:e.target.value})}></input><br/>
      <input type="email"
      placeholder="email"
      value={user.email}
      onChange={(e)=>setUser({...user,email:e.target.value})}></input><br/>
      <input type="digits"
      placeholder="phoneno"
      value={user.phoneno}
      onChange={(e)=>setUser({...user,phoneno:e.target.value})}></input><br/>
      <button onClick={addUser}>Add User</button>
      <h3>Saved Users:</h3>
      <ul>
        {users.map((u,index)=>(
          <li key={index}>
            {u.name}|{u.age}|{u.email}|{u.phoneno}
          </li>
        ))}
      </ul>
      
    
      

    </div>
  )
}
}
export default UserList;*/

/*import React, { useState } from "react";
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setTasks(prev => [...prev, { id: Date.now(), text: trimmed, done: false }]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(prev => prev.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  return (
    <div className="todo-app">
      <header className="todo-header">
        <h1>Todo List</h1>
        <p className="subtitle">Organize your day, one task at a time</p>
      </header>

      <form className="todo-form" onSubmit={addTask}>
        <input
          className="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          aria-label="Task input"
        />
        <button className="btn add-btn" type="submit">Add</button>
      </form>

      <ul className="task-list">
        {tasks.length === 0 && <li className="empty">No tasks yet — add one!</li>}

        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.done ? 'done' : ''}`}>
            <label className="task-left">
              <input
                type="checkbox"
                checked={!!task.done}
                onChange={() => toggleComplete(task.id)}
              />
              <span className="task-text">{task.text}</span>
            </label>

            <div className="task-actions">
              <button
                className="btn delete-btn"
                onClick={() => deleteTask(task.id)}
                aria-label={`Delete ${task.text}`}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <footer className="todo-footer">
        <span>
          {tasks.length} task{tasks.length !== 1 ? 's' : ''}
        </span>
      </footer>
    </div>
  );
}*/


import React,{useState} from "react";
import './App.css';



export default function Diary(){
  const[note,setnote]=useState("")
  const[notes,setNotes]=useState([])
  const addNote=()=>{
    const newNote=`Note ${note.length +1}`;
  }
}

