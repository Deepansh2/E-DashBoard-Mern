import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom'


const SignUp = ()=>{
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const navigate = useNavigate()
useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
        navigate("/")
    }
})
const collectData = async ()=>{
    console.warn(name,email,password)
    const data = {name,email,password}
    const result = await fetch("http://localhost:8000/mern/user",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type" : "application/json"
        }
    })
    const res = await result.json()
    console.warn(res)
    if(res){
        navigate("/")
    }
    localStorage.setItem("user",JSON.stringify(res))

}
    return (
        <div className="signup">
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input className="inputBox" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password"/>
            <button className="appButton" type="button" onClick={collectData}>SignUp</button>
        </div>
    )
}

export default SignUp