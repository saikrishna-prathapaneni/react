
import './App.css';
import { useState } from 'react';

function App() {
  const [age,setAge] = useState(0);
  const[tex, getText]=useState("");
  const [showText, Showtext] = useState(false);
  const [color,ChangeColor]=useState("black");
  const [count, Counter]=useState(0);

  //var age =10;

  //  const age_incrementer=() =>{
  //   age =age+1;
  //   console.log(age);
   
  // }
  
  
  const age_incrementer= ()=>{
  setAge(age+1);
  };

  const handleInputChange=(event)=>{
   console.log(event.target.value)
   getText(event.target.value)
   }
  const ColorChange=()=>{
    ChangeColor(color==="red" ? "black" : "red")
  }
  //  const show_text=()=>{
  //   Showtext(false)
  //  }
  return (
    
    <div className="App">
      {/* <input type='Text' onChange={handleInputChange}></input>
      {tex} */}
      <button onClick={()=>{ColorChange()}}> change color</button>
      <button onClick={()=>{Showtext(!showText)}}> click</button>
      {showText==true && <h1 style={{color :color}}> my name is sai krishna</h1> }
      {tex}
      <button onClick={()=>Counter(count+1)}> increase counter</button>
      <button onClick={()=>Counter(count-1)}> decrease counter</button>
      <button onClick={()=>Counter(0)}> set to zero</button>
      <h1> {count}</h1>
    </div> 

  );
}



export default App;
