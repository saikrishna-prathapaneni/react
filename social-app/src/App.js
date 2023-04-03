
import './App.css';
import { User  } from './User';

function App() {
  const user_data =[{
    name:"jack", age: false
  },
  {
    name:"jack", age: true
  },
  {
    name:"jack", age: true
  }]
  
  return (
    <div className="App">
    {
      user_data.map((user,key)=>{
        return user.age ? user.name : user.age
        //<User name ={user.name} age={user.age}/>
      })
      }
      </div>
      )
      
    }


const Salary =(props)=>{
  return (
    <div>
      {props.name}
     {props.Salary}

    </div>
    )
}


// const User = ()=>
// { 
//   const name =<h1>saikrisha</h1>
//   const email= <h1>sp@gmail.com</h1>
//   return (
//     <div>
//     {name}
//     {email}
//     </div>)
// }

export default App;