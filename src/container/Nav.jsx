import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import logo from '../images/logo.png';
import { render } from '@testing-library/react';

function Nav(){
    
        const myStyle={
            textDecoration: 'none',
            padding: "10px",
            fontFamily: "Arial",
            color: "black",
            
        }
    return (
        
        <nav>
        <Link to='/'>
             <img src={logo} alt="this is college logo" className='photo' />
        </Link>
            
            <ul className='nav-links'>
            <Link to='/Home' style={myStyle}>
                <li>Home</li>
            </Link>
            <Link to='/Courses' style={myStyle}>
                <li>Courses</li>
            </Link>
            <Link to='/Event' style={myStyle}>
                <li>Event</li>
            </Link>
            <Link to='/Research' style={myStyle}>
                <li>Research</li>
            </Link>
            <Link to='/Partnership' style={myStyle}>
                <li>Partnership</li>
            </Link>
            <Link to='/Outreach' style={myStyle}>
                <li>Outreach</li>
            </Link>
            <Link to='/People' style={myStyle}>
                <li>People</li>
            </Link>
            <Link to='/Joinus' style={myStyle}>
                <li>Join Us</li>
            </Link>
                
            </ul>
        </nav>
    );
}

export default Nav;