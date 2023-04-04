
import './App.css';
import {useState} from "react"


function App() {
  const [taskList, Addtask]=useState([]);
  const [newtask, handleInputChange] =useState("");
  // const[newcolor, handleColor]=useState(false);

  const addData=()=>{
    const task_d = {
      id: taskList.length ===0 ? 1:taskList[taskList.length-1].id+1,
      taskName:newtask,
      completed:false
    }
   Addtask([...taskList,task_d]);
  }

  const handleChange=(event) =>{
    handleInputChange(event.target.value);
  }

  const delete_task=(num)=>{
    
     Addtask(taskList.filter((task)=> task.id !== num))
  }

  const completed=(id)=>{
     Addtask(taskList.map((task)=>{
      if(task.id===id){
        return {...task,completed:true};
      }else{
        return task;
      }
     }
     ))

  }
  
  return (
    <div className="App">
     
    <div class ="Addtext">
    <input type='text' onChange={handleChange}></input>
    <button onClick={addData}> add task</button>
    </div>


    <div class ="ShowText">
      {
        taskList.map( (task)=>{
        return (
        <div>  
           <h1 style={{color: task.completed? 'green' : "red"}}> {task.id}.{task.taskName}</h1>
           <button onClick={()=>delete_task(task.id)}>X</button>
           <button onClick={()=>completed(task.id)}>completed</button>
        </div>
        
        )
        }
        )
      }

    </div>



    </div>
  );
}

export default App;
