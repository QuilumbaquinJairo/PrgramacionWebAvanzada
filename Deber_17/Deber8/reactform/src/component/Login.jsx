import React from 'react'
import {useForm} from "react-hook-form";
import Home from "../Home/Home.jsx";
import './Login.css'
import  Axios from 'axios';
import {useState} from "react";

function Login() {

    const {register,formState:{errors},handleSubmit }= useForm();
    const formulario = document.getElementById("form");
    const [loginSuccessful, setLoginSuccessful] = useState("");
   
    
    const onSubmit = async (data) =>{
        await Axios.post('http://localhost:3000/login',data) .then(result => {
          console.log(result.data)
          if(result.data){
              localStorage.setItem('token', result.data)
              setLoginSuccessful(true);
          } else {
              setLoginSuccessful(false);
          }
      })
      .catch(error =>{
          console.log(error)
      })
      
    }
    
  return (
    <>
    {loginSuccessful ? <Home />:
    <div>
      <h1>Loggin</h1>
        <form id="form">
            <label htmlFor="">Username:</label>
            <input {...register("username")} type="text" placeholder='Usuario'/>
            <label htmlFor="">Password:</label>
            <input {...register("password")}type="password" placeholder='Usuario'/>
            <button type='submit' onClick={handleSubmit(onSubmit)}>Ingresar</button>
        </form>
    </div>}
    </>
  )
}

export default Login