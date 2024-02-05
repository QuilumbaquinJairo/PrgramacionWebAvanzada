import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from "axios";
function App() {
const [catfact, setCatfact] = useState("");
const [catimg, setCatimg] = useState("");

const fetchcatfact = ()=>{
  Axios.get("https://catfact.ninja/fact").then((res)=>{
    setCatfact(res.data.fact);
  });
}
const getCatImg = ()=>{
  Axios.get("https://api.thecatapi.com/v1/images/search",{headers: {'x-api-key': "DEMO-API-KEY"}}).then((res)=>{
    setCatimg(res.data[0].url);
  });
}

const  update = ()=>{
  fetchcatfact();
  getCatImg();
}

useEffect(()=>{
  getCatImg();
},[]);

useEffect(()=>{
  fetchcatfact();
},[]);

  return (
    
       <>
       <h1>React App con API catfact && thecatapi</h1>
       <button onClick={update}>Generar un dato de un gato</button>
       <div className="contenedor">
        <p>{catfact}</p>
        <img src={catimg} alt="" />
      </div>
      </>
    
    
  )
}

export default App
