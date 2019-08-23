import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import styles from '../styles/header_styles.css';
import AboutPage from "../pages/about"
import RouterPage from '../pages/router'

function HeaderComponent (props) {

    return (
        <div className="NavBar">
           <nav className="nav-wrapper grey darken-4">
                <div className="container">
                    <Link to='/home' className="brand-logo"> 
                        <p>Jiayi Zhang</p>
                    </Link>
                    <ul className="right"> 
               
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/projects'>Projects</Link></li>
        
                            <a className="aboutPage">About</a>
                     
                    </ul>
                </div>
            </nav>
        </div> 
        
        
    )
}
export default HeaderComponent;
