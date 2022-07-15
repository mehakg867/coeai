import React from 'react';


import logo from '../images/logo.png';

import {Nav,NavbarBrand,Navbar, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Navigation(){
    
        // const myStyle={
        //     textDecoration: 'none',
        //     padding: "10px",
        //     fontFamily: "Arial",
        //     color: "black",
            
        // }
    return (
        
        <>
        <Navbar bg="light" varient= "bright" sticky="top" expand="lg">
                  <NavbarBrand>
                      <img src={logo} width="40px" height="40px"/>
                      INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN
                  </NavbarBrand>
                  <Nav>
              
                  <Nav.Link as={Link} to="/Aboutus">About us</Nav.Link>
                  <Nav.Link as={Link} to="/People">People</Nav.Link>
  
                  <NavDropdown title= "Research">
                  <NavDropdown.Item as={Link} to="/Research/Nlp">NLP</NavDropdown.Item>
                  <NavDropdown.Item  as={Link} to="/Research/ImageRecognition"> Image recognition</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Research/ComputerVision"> Computer Vision</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Research/SpeechTech"> Speech technology</NavDropdown.Item>
                  </NavDropdown> 
  
                  <Nav.Link as={Link} to="/Event">Event</Nav.Link>
  
                  <NavDropdown title= "Outreach Program">
                  <NavDropdown.Item as={Link} to="/Outreach/Projects">Projects</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Outreach/Products"> Products</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Outreach/Patents"> Patents</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Outreach/Publications"> Publications</NavDropdown.Item>
                  </NavDropdown> 
  
                  <Nav.Link as={Link} to="/Conference">Conference</Nav.Link>
                  <Nav.Link as={Link} to="/Joinus">Joinus</Nav.Link>
                  <Nav.Link as={Link} to="/Partnership">Partnership</Nav.Link>
  
          </Nav>
              </Navbar>
              </>
        
        // <nav>
        // <Link to='/'>
        //      <img src={logo} alt="this is college logo" className='photo' />
        // </Link>
            
        //     <ul className='nav-links'>
        //     <Link to='/Home' style={myStyle}>
        //         <li>Home</li>
        //     </Link>
        //     <Link to='/Courses' style={myStyle}>
        //         <li>Courses</li>
        //     </Link>
        //     <Link to='/Event' style={myStyle}>
        //         <li>Event</li>
        //     </Link>
        //     <Link to='/Research' style={myStyle}>
        //         <li>Research</li>
        //     </Link>
        //     <Link to='/Partnership' style={myStyle}>
        //         <li>Partnership</li>
        //     </Link>
        //     <Link to='/Outreach' style={myStyle}>
        //         <li>Outreach</li>
        //     </Link>
        //     <Link to='/People' style={myStyle}>
        //         <li>People</li>
        //     </Link>
        //     <Link to='/Joinus' style={myStyle}>
        //         <li>Join Us</li>
        //     </Link>
                
        //     </ul>
        // </nav>
    );
}

export default Navigation;