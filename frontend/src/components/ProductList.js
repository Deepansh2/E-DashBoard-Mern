import React,{useEffect, useState} from "react";
import {Link} from "react-router-dom"

const ProductList = ()=>{

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        getProducts()
    },[])

    const getProducts = async()=>{
        let result = await fetch("http://localhost:8000/mern/products",{
            method : "GET"
        })
        result = await result.json()
        setProducts(result)
    }
    const DeleteProduct = async (id) =>{
        
        let result = await fetch(`http://localhost:8000/mern/product/${id}`,{
            method:"DELETE"
        })
        result = await result.json()
        if(result){
            getProducts();
        }
    }
    return (
        <div className="product-list">
            <h1>Product List</h1>
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Description</li>
                <li>Company</li>
                <li>Delete</li>
            </ul>
            {
                products.map((item,index)=>
                <ul key = {item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
                <li>{item.description}</li>
                <li>{item.company}</li>
                <li><button type="button" onClick={()=>DeleteProduct(item._id)}>Delete</button>
                <Link to={`/update/${item._id}`}>Update</Link>
                </li>
                </ul>
                )
            }
        </div>
    )
}

export default ProductList