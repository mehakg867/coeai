import React, {Component} from 'react';
import '../App.css';
import './Home.css';
import goilogo from "../images/goilogo.jpg";
import logo from "../images/logo.png";
import {Nav,NavbarBrand,Navbar, NavDropdown, } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Home() {
    const CardInfo = [{image: "", title: "Patents", text:"asdfghjkl", btn: "button"},
                      {image: "", title: "Products", text:"asdfghjkl", btn: "button"},
                      {image: "", title: "Projects", text:"asdfghjkl", btn: "button"},
                      {image: "", title: "Publications", text:"asdfghjkl", btn: "button"},
  ];

  const renderCard = (card,index) => {
    return (
      <Card className='card' style={{ width: '18rem' }} key={index} >
      <Card.Img variant="top" src={card.image}/>
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.text}
        </Card.Text>
        <Button variant="primary">{card.btn}</Button>
      </Card.Body>
      </Card>
    )

  
}

    return (
        <div >
        <div>
        <div id="coverTitle" className="w-100" >
        <div className="row container">
          <div className="col-5 ">
          <div className="d-flex align-items-center justify-content-center" style={{height:100, fontSize:20,fontFamily:"serif", textAlign:'center',position:'relative',left:70 }}>
               CENTRE OF EXCELLENCE IN ARTIFICIAL INTELLIGENCE </div>
          </div>
          <div className="col-2">
            <div className="d-flex align-items-center justify-content-center" style={{height:100,textAlign:'center',position:'relative',left:110 }}>
              <img src={logo} alt="this is college logo" className='photo' />
               </div>
          </div>
          <div className="col-5">
               <div className="d-flex align-items-center justify-content-center" style={{height:100,fontFamily:"serif", fontSize:20,position:'relative',left:140}}>
               INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN  </div>
          </div>
        </div>
      </div>
      </div>
      <div  className='bgimage'></div>
      <>
      <Navbar bg="light" varient= "bright" sticky="top" expand="lg">
                
                <Nav className='Navigation'>
                <Nav.Link className='homenav' as={Link} to="/Aboutus">About us</Nav.Link>
                <Nav.Link className='homenav'as={Link} to="/People">People</Nav.Link>

                <NavDropdown className='homenav' title= "Research">
                <NavDropdown.Item className='homenav'as={Link} to="/Research/Nlp">NLP</NavDropdown.Item>
                <NavDropdown.Item className='homenav' as={Link} to="/Research/ImageRecognition"> Image recognition</NavDropdown.Item>
                <NavDropdown.Item className='homenav'as={Link} to="/Research/ComputerVision"> Computer Vision</NavDropdown.Item>
                <NavDropdown.Item className='homenav'as={Link} to="/Research/SpeechTech"> Speech technology</NavDropdown.Item>
                </NavDropdown> 

                <Nav.Link className='homenav'as={Link} to="/Event">Event</Nav.Link>

                <NavDropdown className='homenav'title= "Outreach Program">
                <NavDropdown.Item className='homenav'as={Link} to="/Outreach/Projects">Projects</NavDropdown.Item>
                <NavDropdown.Item className='homenav'as={Link} to="/Outreach/Products"> Products</NavDropdown.Item>
                <NavDropdown.Item className='homenav'as={Link} to="/Outreach/Patents"> Patents</NavDropdown.Item>
                <NavDropdown.Item className='homenav'as={Link} to="/Outreach/Publications"> Publications</NavDropdown.Item>
                </NavDropdown> 

                <Nav.Link className='homenav' as={Link} to="/Conference">Conference</Nav.Link>
                <Nav.Link className='homenav'as={Link} to="/Joinus">Joinus</Nav.Link>
                <Nav.Link className='homenav'as={Link} to="/Partnership">Partnership</Nav.Link>

        </Nav>
            </Navbar>
            </>
           
                           <div>SUPPORTED BY</div>
                              <div><img src={goilogo} alt="this is college logo" className='photo' /></div>
                             <div>Department of Science and Technology</div>
                        <div>GOI</div>

 
        </div>
    );
  }
  
  export default Home;
