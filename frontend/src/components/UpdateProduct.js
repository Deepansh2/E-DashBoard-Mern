import React,{useEffect, useState} from 'react';
import {useParams,useNavigate} from "react-router-dom"

const UpdateProduct = ()=>{

    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("")
    const [company,setCompany] = useState("")
    const [description,setDescription] = useState("")
    const params = useParams();
    const navigate = useNavigate()

    useEffect(()=>{
        getProductDetail()
    },[])

    const getProductDetail = async ()=>{
        let result = await fetch(`http://localhost:8000/mern/product/${params.id}`,{
            method : "GET"
        })
        result = await result.json()
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
        setDescription(result.description)
    }
    const SaveProduct = async ()=>{

        const Data = {name,price,category,company,description}
        let result = await fetch(`http://localhost:8000/mern/product/${params.id}`,{
            method : "PUT",
            body : JSON.stringify(Data),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        result = await result.json();
        if(result){
            navigate("/")
        }
    }
    return(
        <div className="addProduct">
            <h1>Update Product</h1>
            <input className="inputBox" type="text"  placeholder="Enter Product Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input className="inputBox" type="text" placeholder="Enter Product Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
            <input className="inputBox" type="text" placeholder="Enter Product Category" value={category} onChange={(e)=> setCategory(e.target.value)} />
            <input className="inputBox" type="text" placeholder="Enter Product Company Name" value={company} onChange={(e)=>setCompany(e.target.value)} />
            <input className="inputBox" type="text" placeholder="Enter Product Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className="appButton" type="button" onClick = {SaveProduct}>Save</button>
        </div>
    )
}

export default UpdateProduct