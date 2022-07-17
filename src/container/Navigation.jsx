import React from 'react';
import './Nav.css';

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
        <Navbar className='othernav' bg="light" varient= "bright" sticky="top" expand="lg">
                  <NavbarBrand className='logonav' style={{fontFamily:"serif", textAlign:'center'}} >
                    <img src={logo} width="40px" height="40px"/>
                      INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN
                  </NavbarBrand>
                  <Nav className='pagenav'>
              
                  <Nav.Link className='allnav' as={Link} to="/Aboutus">About us</Nav.Link>
                  <Nav.Link className='allnav'as={Link} to="/People">People</Nav.Link>
  
                  <NavDropdown className='allnav' title= "Research">
                  <NavDropdown.Item className='allnav'as={Link} to="/Research/Nlp">NLP</NavDropdown.Item>
                  <NavDropdown.Item className='allnav' as={Link} to="/Research/ImageRecognition"> Image recognition</NavDropdown.Item>
                  <NavDropdown.Item className='allnav'as={Link} to="/Research/ComputerVision"> Computer Vision</NavDropdown.Item>
                  <NavDropdown.Item className='allnav'as={Link} to="/Research/SpeechTech"> Speech technology</NavDropdown.Item>
                  </NavDropdown> 
  
                  <Nav.Link className='allnav'as={Link} to="/Event">Event</Nav.Link>
  
                  <NavDropdown className='allnav'title= "Outreach Program">
                  <NavDropdown.Item className='allnav'as={Link} to="/Outreach/Projects">Projects</NavDropdown.Item>
                  <NavDropdown.Item className='allnav'as={Link} to="/Outreach/Products"> Products</NavDropdown.Item>
                  <NavDropdown.Item className='allnav'as={Link} to="/Outreach/Patents"> Patents</NavDropdown.Item>
                  <NavDropdown.Item className='allnav'as={Link} to="/Outreach/Publications"> Publications</NavDropdown.Item>
                  </NavDropdown> 
  
                  <Nav.Link className='allnav'as={Link} to="/Conference">Conference</Nav.Link>
                  <Nav.Link className='allnav'as={Link} to="/Joinus">Joinus</Nav.Link>
                  <Nav.Link className='allnav'as={Link} to="/Partnership">Partnership</Nav.Link>
  
          </Nav>
              </Navbar>
              </>
    );
}

export default Navigation;