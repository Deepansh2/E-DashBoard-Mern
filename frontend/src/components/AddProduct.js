import React,{useState} from "react";


const AddProduct = ()=>{

    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("")
    const [company,setCompany] = useState("")
    const [description,setDescription] = useState("")
    const [error,setError] = useState(false)
    const SaveProduct = async ()=>{

        console.warn(!name)
        if(!name || !price || !category || !company || !description){
            setError(true)
            return false
        }
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
            {error && !name && <span className="invalid-input">Enter valid name</span>}
            <input className="inputBox" type="text" placeholder="Enter Product Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
            {error && !price && <span className="invalid-input">Enter valid price</span>}
            <input className="inputBox" type="text" placeholder="Enter Product Category" value={category} onChange={(e)=> setCategory(e.target.value)} />
            {error && !category && <span className="invalid-input">Enter valid category</span>}
            <input className="inputBox" type="text" placeholder="Enter Product Company Name" value={company} onChange={(e)=>setCompany(e.target.value)} />
            {error && !company && <span className="invalid-input">Enter valid compony</span>}
            <input className="inputBox" type="text" placeholder="Enter Product Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            {error && !description && <span className="invalid-input">Enter valid description</span>}
            <button className="appButton" type="button" onClick = {SaveProduct}>Save</button>
        </div>
    )
}

export default AddProduct