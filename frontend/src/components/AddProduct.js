import React,{useState} from "react";


const AddProduct = ()=>{

    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("")
    const [company,setCompany] = useState("")
    const [description,setDescription] = useState("")
    const SaveProduct = async ()=>{
        const userId = JSON.parse(localStorage.getItem("user")).user.id
        const Data = {name,price,category,company,description,userId}
    
        let result = await fetch("http://localhost:8000/mern/product",{
            method : "POST",
            body : JSON.stringify(Data),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        result = await result.json()
        console.warn(result)
    }
    return(
        <div className="addProduct">
            <h1>Add Product</h1>
            <input className="inputBox" type="text"  placeholder="Enter Product Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input className="inputBox" type="text" placeholder="Enter Product Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
            <input className="inputBox" type="text" placeholder="Enter Product Category" value={category} onChange={(e)=> setCategory(e.target.value)} />
            <input className="inputBox" type="text" placeholder="Enter Product Company Name" value={company} onChange={(e)=>setCompany(e.target.value)} />
            <input className="inputBox" type="text" placeholder="Enter Product Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className="appButton" type="button" onClick = {SaveProduct}>Save</button>
        </div>
    )
}

export default AddProduct