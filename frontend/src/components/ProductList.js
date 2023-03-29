import React,{useEffect, useState} from "react";

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
    console.warn("Products",products)
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
            </ul>
            {
                products.map((item,index)=>
                <ul>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
                <li>{item.description}</li>
                <li>{item.company}</li>
                </ul>
                )
            }
        </div>
    )
}

export default ProductList