import React,{useState, useRef} from 'react'
import './Todolist.css';



function Todolist() {
  const [addBtn, setaddBtn] = useState("none");
  const [task, setTask] = useState([]);

  const hideShow = () => {
    if (addBtn == "none") {
      setaddBtn("block");
    } else {
      setaddBtn("none");
    }
  };
  

  const title = useRef();
  const desc = useRef();
  const status = useRef();
   
  const create = () => {

    if (title.current.value === "") {
      alert("Pls add some title");
    } else if (desc.current.value === "") {
      alert("Pls add some Description");
    } else if (status.current.value === "status") {
      alert("Pls select a status");
    } else {
      setTask([
        ...task,
        {
          id: title.current.value + task.length + 1,
          title: title.current.value,
          desc: desc.current.value,
          status: status.current.value
        }
      ]);
      setaddBtn("none");
    }
  };
  // const deleteTask = (e, title) =>{
  //   e.preventDefault();
  //   setTask(task.filter((i) => i.title != title));
  // };
  const deleteTask = (Currenttask) => {
    let taskid = Currenttask.id;

    let remainingTask = task.filter((item, i) => item.id !== taskid);
    setTask(remainingTask);
  };






    
  return (
    
      <div className="parent">
      <button className="add-btn" onClick={hideShow}>
        +
      </button>

      <div className="add-todo" style={{ display: addBtn }}>
        <div className="add-todo-form">
          <button className="x-btn" onClick={() => setaddBtn("none")}>
            X
          </button>
          Title:
          <input type="text" ref={title} />
          Description:
          <textarea ref={desc} />
          Status:
          <select ref={status}>
            <option value="status">Select a Status</option>
            <option value="pending">pending</option>
            <option value="completed">completed</option>
          </select>
          <button className="create-btn" onClick={create}>
            Create
          </button>
        </div>
      </div>
      <div className="main">
        <div>
          <h2>Pending</h2>
          
          <div className="pending-box" >
           
            {task
              .filter((item, i) => item.status === "pending")
              .map((item, i) => (
                <div key={i} className="task-div"> 
                <button className="x-btn-2" onClick={(task) => deleteTask(item)}>X</button>
                 {item.title}
                   </div>
              ))}
          </div>
        </div>

        <div>
          <h2>Completed</h2>
          <div className="completed-box">
            {task
              .filter((item, i) => item.status === "completed")
              .map((item, i) => (
                <div key={i} className="task-div"> 
                <button className="x-btn-2" onClick={(task) => deleteTask(item)}>X</button>
                {item.title}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todolist
