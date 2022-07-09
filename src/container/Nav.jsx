import React from 'react';
import './Nav.css';

function Nav(){
    return (
        <nav>
            <h3>logo</h3>
            <ul className='nav-links'>
                <li>Home</li>
                <li>Event</li>
                <li>Courses</li>
            </ul>
        </nav>
    );
}

export default Nav;