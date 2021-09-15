import React from 'react'
import "./header.css";
import { NavLink,BrowserRouter,Route} from 'react-router-dom';

export default function Header() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <h3 className="navbar-brand">Posts</h3>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link" activeStyle={{color:"black"}}  exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" activeStyle={{color:"black"}} to="/newpost">New Post</NavLink>
                </li>
            </ul>
            

            <form className="d-flex">
            <NavLink to="/login"><button className="btn btn-outline-secondary" type="text">Login</button></NavLink>
            </form>
            </div>
        </div>
</nav>
    )
}
