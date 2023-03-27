import React,{useState} from "react";

const SignUp = ()=>{
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const collectData = ()=>{
    console.warn(name,email,password)
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