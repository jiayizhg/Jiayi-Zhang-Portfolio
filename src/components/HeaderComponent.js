import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import styles from '../styles/header_styles.css';

const HeaderComponent = () => {
   
    return (
        <div className="NavBar">
           <nav className="nav-wrapper grey darken-4">
                <div className="container">
                    <Link to='/' className="brand-logo"> 
                        <p>Jiayi Zhang</p>
                    </Link>
                    <ul className="right"> 
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/'>Projects</NavLink></li>
                        <li><NavLink to='/'>About</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div> 
        
        
    )
}
export default HeaderComponent;
