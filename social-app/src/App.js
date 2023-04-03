
import './App.css';

function App() {
  
  return (
    <div className="App">
      
      <Salary name="google" Salary ={2000} />
      <Salary name="Meta" Salary ={2000} />
    </div>
  );
}

const Salary =(props)=>{
  return (
    <div>
      {props.name}
     {props.Salary}

    </div>
    )
}


const User = ()=>
{ 
  const name =<h1>saikrisha</h1>
  const email= <h1>sp@gmail.com</h1>
  return (
    <div>
    {name}
    {email}
    </div>)
}
export default App;
