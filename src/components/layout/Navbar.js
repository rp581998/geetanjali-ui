import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" exact aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/registration">Registration</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/profile">Profile</NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav >
    );
};

export default Navbar;