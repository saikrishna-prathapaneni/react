import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import { Text } from './text';

function App() {
  const [showText,setShowText]= useState(false);
  return (
    <div className="App">
      <button onClick={()=>{
        setShowText(!showText);
      }}>
        show Text
      </button>

     {showText && <Text/>}
    </div>
  );
}

export default App;
