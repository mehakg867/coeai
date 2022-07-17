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
    const CardInfo = [{image: "https://th.bing.com/th/id/OIP.4byI5Yjd4tBAKO_o1fGHVgHaEK?pid=ImgDet&rs=1",
                        title: "PATENTS",
                        text:"Exclusive right granted for an invention, which is a product or a process that provides, in general, a new way of doing something, or offers a new technical solution to a problem.",
                        btn: "Explore",
                        link: "./Outreach/Patents",
                      },

                      {image: "https://traderspros.com/wp-content/uploads/2020/11/ethereum-basic-info.png",
                       title: "PRODUCTS",
                        text:"A software product is an out-of-the-box piece of software that's been created to solve a more general problem that regularly occurs within a specific segment.",
                         btn: "Explore",
                        link: "./Outreach/Products",
                        },

                      {image: "https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg", 
                      title: "PROJECTS", 
                      text:"A Software Project is the complete procedure of software development from requirement gathering to testing and maintenance, carried out according to the execution methodologies, in a specified period of time to achieve intended software product.",
                       btn: "Explore",
                       link: "./Outreach/Projects",
                      },

                      {image: "https://healthforce.ucsf.edu/sites/healthforce.ucsf.edu/files/styles/hero/public/hero-images/publications.jpg?itok=p1NVFuYV", 
                      title: "PUBLICATIONS", 
                      text:"Different books and research papers are published by the faculties and the students of the university.",
                      btn: "Explore",
                      link: "./Outreach/Publications",
                    },
                  ];

  const renderCard = (card,index) => {
    return (
      <Card className='box' style={{ width: '18rem', backgroundColor: 'aliceblue' }} key={index} >
      <Card.Img variant="top" src={card.image}/>
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.text}
        </Card.Text>
        <Button variant="outline-info" href={card.link}>{card.btn}</Button>
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
           <div className='grid'>
           {CardInfo.map(renderCard)}
           </div>
                   
              


          
           
                           <div>SUPPORTED BY</div>
                              <div><img src={goilogo} alt="this is college logo" className='photo' /></div>
                             <div>Department of Science and Technology</div>
                        <div>GOI</div>

 
        </div>
    );
  }
  
  export default Home;
