import logo from './logo.svg';
import {useState} from "react"
import Axios from "axios";

import './App.css';

function App() {

  const [all, updateData]=useState("");
 
 
  const getData=(param)=>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${param}/`).then((res)=>{
      console.log(res.data[0].excuse);
        updateData(res.data[0].excuse);
    });
  }


  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={()=>getData('office')}>Office</button>
      <button onClick={()=>getData('family')}>Family</button>
      <button onClick={()=>getData('party')}>Party</button>
    <h1> {all}</h1>
    
    </div>
  );
}

export default App;
