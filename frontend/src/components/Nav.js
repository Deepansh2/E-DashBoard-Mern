import React, { useEffect } from "react"
import {Link} from 'react-router-dom'

const Nav = ()=>{
const auth = localStorage.getItem("user")
    return (
        <div>
            <ul className="nav-ul" style={{padding:"5px",margin:"0px",background:"gainsboro"}}>
                <li> <Link to="/">Products</Link></li>
                <li> <Link to="/add">Add Product</Link></li>
                <li> <Link to="/update">Update Product</Link></li>
                <li> <Link to="/profile">Profile</Link></li>
                <li>{auth?<Link to="/logout">Logout</Link>:<Link to="/signup">Signup</Link>}</li>
            </ul>
        </div>
    )
}

export default Nav