import React from 'react';
import logo from '../img/NC-LOGO.png';
import '../styles/Navigation.css';

import { NavLink } from 'react-router-dom';

function Navigation(){
    return(
        <nav>
            <div className="nav-container">
                <div className="nav-left">
                    <ul>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </ul>
                </div>
                <div className="nav-center logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="nav-right social-media">
                    <a href="https://instagram.com">Instagram</a>
                    <a href="https://twitter.com">Twitter</a>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;