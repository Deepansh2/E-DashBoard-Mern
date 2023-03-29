import React from "react"
import { Link ,useNavigate} from 'react-router-dom'

const Nav = () => {
    const auth = localStorage.getItem("user")
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear();
        navigate("/signup")
    }
    return (
        <div>
            <img 
            alt="logo"
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcdWBkuZRnRjV4iI72Vf58QYB99mvNYdmLrw&usqp=CAU"/>
           {auth ?<ul className="nav-ul">
                {/* <li>{auth ? <Link onClick={logout} to="/signup">Logout</Link> : <Link to="/signup">Signup</Link>}</li>
                <li> <Link to="/login">Login</Link></li> */}
                        <li> <Link to="/">Products</Link></li>
                        <li> <Link to="/add">Add Product</Link></li>
                        <li> <Link to="/update">Update Product</Link></li>
                        <li> <Link to="/profile">Profile</Link></li>
                        <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).user.name})</Link></li>
                    </ul> :
                    <ul className="nav-ul nav-right">
                        <li><Link to="/signup">Signup</Link></li>
                        <li> <Link to="/login">Login</Link></li>
                    </ul>
            }
        </div>
    )
}

export default Nav