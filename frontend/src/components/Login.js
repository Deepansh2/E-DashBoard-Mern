import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"

const Login = ()=>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/")
        }
    },[])
    const submitData = async ()=>{
        const Data = {email,password}
        let result = await fetch("http://localhost:8000/mern/user/signin",{
            method:"POST",
            body:JSON.stringify(Data),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json()
        if(result.user){
            localStorage.setItem("user",JSON.stringify(result))
            localStorage.setItem("token",JSON.stringify(result.user.accessToken))
            navigate("/")
        }
        else{
            alert("Please enter correct details")
        }
    }
    return (
        <div className="Login">
            <h1>Login Page</h1>
        <input className="inputBox" type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input className="inputBox" type= "password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="appButton" type="button" onClick={submitData}>Login</button>
        </div>
    )
}

export default Login