import logo from './logo.svg';
import {useState,useEffect} from "react"
import Axios from "axios";

import './App.css';

function App() {

  const [all, updateData]=useState("");
  const [article,updateArticle]=useState([]);
  const [newPost,updateNewpost]=useState('');
  const [newTitle, updateNewtitle]=useState('');
 
  const getData=(param)=>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${param}/`).then((res)=>{
      console.log(res.data[0].excuse);
        updateData(res.data[0].excuse);
    });
  }
  
  // useEffect(() => {
  //   fetch('http://127.0.0.1:5000/add_article', {
  //     'method': 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ title: 'React POST Request Example',body:'data sample' })

  //   }).then(resp => resp.json())
  //     .then(resp => updateArticle(resp));
  // }, []);
  const filldetails=()=>{
    fetch('http://127.0.0.1:5000/add_article', {
      'method': 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle,body:newPost })

    }).then(resp => resp.json())
      .then(resp => updateArticle(resp));
  }
  const handlechange=(event)=>{
  //console.log(event.target.value);
   updateNewtitle(event.target.value);}

   const handlebodychange=(event)=>{
  //  console.log(event.target.value);
    updateNewpost(event.target.value);}

//  const getarticle =()=>{
//   Axios.get(`http://127.0.0.1:5000/`).then((res)=>{
//     console.log(res);
//       updateArticle(res);
//   });
//  }

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={()=>getData('office')}>Office</button>
      <button onClick={()=>getData('family')}>Family</button>
      <button onClick={()=>getData('party')}>Party</button>
      {/* <button onClick={}>article</button> */}

      <input onChange={handlechange} placeholder='text'/>
      <input onChange={handlebodychange} placeholder='body'/> 
      <button onClick={filldetails}>submit</button>
      
    <h1> {all}</h1>
    <p >
      {article.map( article => {
        return (
          <div >
            <h2>{article?.body}</h2>
          </div>
        )
      }

      )}
    </p>
    
    </div>
  );
}

export default App;
