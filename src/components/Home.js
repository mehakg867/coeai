import React, {Component} from 'react';
import '../App.css';
import './Home.css';
import goilogo from "../images/goilogo.jpg";
import logo from "../images/logo.png";
import {Nav,NavbarBrand,Navbar, NavDropdown, } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Fade, Reveal } from 'react-reveal';


function Home() {
    const CardInfo = [{image: "https://th.bing.com/th/id/OIP.4byI5Yjd4tBAKO_o1fGHVgHaEK?pid=ImgDet&rs=1",
                        title: "PATENTS",
                        text:"Exclusive right granted for an invention, which is a product or a process that provides, in general, a new way of doing something, or offers a new technical solution to a problem.",
                        btn: "Explore",
                        link: "./Pat",
                      },

                      {image: "https://traderspros.com/wp-content/uploads/2020/11/ethereum-basic-info.png",
                       title: "PRODUCTS",
                        text:"A software product is an out-of-the-box piece of software that's been created to solve a more general problem that regularly occurs within a specific segment.",
                         btn: "Explore",
                        link: "./Products",
                        },

                      {image: "https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg", 
                      title: "PROJECTS", 
                      text:"A Software Project is the complete procedure of software development from requirement gathering to testing and maintenance, carried out according to the execution methodologies, in a specified period of time to achieve intended software product.",
                       btn: "Explore",
                       link: "./Projects",
                      },

                      {image: "https://healthforce.ucsf.edu/sites/healthforce.ucsf.edu/files/styles/hero/public/hero-images/publications.jpg?itok=p1NVFuYV", 
                      title: "PUBLICATIONS", 
                      text:"Different books and research papers are published by the faculties and the students of the university.",
                      btn: "Explore",
                      link: "./Publications",
                    },
                  ];

    const styles ={
      cardImage: {
        objectFit: 'cover',
        
        width: '100%',
        height: '30%'
        }
      }

  const renderCard = (card,index) => {
    return (
      <Card className='box' style={{ width: '18rem', backgroundColor: 'aliceblue' }} key={index} >
      <Card.Img variant="top" src={card.image} style={styles.cardImage}/>
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.text}
        </Card.Text>
        
        
      </Card.Body>
      <Card.Footer>
      <Button variant="outline-info" href={card.link}>{card.btn}</Button>
        </Card.Footer>
      </Card>
    )

  
}

    return (
        <div>
        
        <div>
          <div className='row2' style={{display:'flex', height:100, flex:"100%"}}>
            <div className='col1' style={{display:'flex', flex:"40%", alignItems:'center', justifyContent:'center',position:'relative',fontSize:'1.5vw',fontFamily:"-moz-initial"}}>
            CENTRE OF EXCELLENCE IN ARTIFICIAL INTELLIGENCE
            </div>
            <div className='col2' style={{display:'flex', flex:"20%",alignItems:'center', justifyContent:'center',position:'relative',fontSize:'5vw'}}>
            <img src={logo} alt="this is college logo" style={{height:'7vw', width:'7vw'}} />
            </div>
            <div className='col3' style={{display:'flex', flex:"40%",alignItems:'center', justifyContent:'center',position:'relative',fontSize:'1.5vw',fontFamily:"-moz-initial"}}>
            INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN 
            </div>
          </div>
        </div>


        {/* <div id="coverTitle" className="w-100" style={{display:'flex'}}>
        <div className="row container" style={{display:'flex'}}>
          <div className="col-5 ">
          <div className="d-flex align-items-center justify-content-center" style={{height:'30vh', fontSize:'5vw',fontFamily:"serif", textAlign:'center',position:'relative',left:70, flex:'40%', padding:'0'}}>
               CENTRE OF EXCELLENCE IN ARTIFICIAL INTELLIGENCE </div>
          </div>
          <div className="col-2">
            <div className="d-flex align-items-center justify-content-center" style={{height:'30vh',textAlign:'center',position:'relative',left:110, flex:'20%', padding:'0' }}>
              <img src={logo} alt="this is college logo" className='photo' />
               </div>
          </div>
          <div className="col-5">
               <div className="d-flex align-items-center justify-content-center" style={{height:'30vh',fontFamily:"serif", fontSize:'5vw',position:'relative',left:140, flex:'40%', padding:'0'}}>
               INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN  </div>
          </div>
        </div>
      
      </div> */}
      <div  className='bgimage'></div>
      <>
      <Navbar bg="light" varient= "bright" sticky="top" expand="lg">
      <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"> 
                <Nav className='Navigation'>
                <Nav.Link className='homenav' as={Link} to="/Aboutus">About us</Nav.Link>
                <Nav.Link className='homenav' as={Link} to="/Conference">Conference</Nav.Link>
                <Nav.Link className='homenav'as={Link} to="/Event">Event</Nav.Link>
                <Nav.Link className='homenav'as={Link} to="/People">People</Nav.Link>

                <NavDropdown className='homenav' title= "Research">
                <NavDropdown.Item className='homenav'as={Link} to="/Research/Nlp">NLP</NavDropdown.Item>
                <NavDropdown.Item className='homenav' as={Link} to="/Research/ImageRecognition"> Image recognition</NavDropdown.Item>
                <NavDropdown.Item className='homenav'as={Link} to="/Research/ComputerVision"> Computer Vision</NavDropdown.Item>
                <NavDropdown.Item className='homenav'as={Link} to="/Research/SpeechTech"> Speech technology</NavDropdown.Item>
                </NavDropdown> 

                <NavDropdown className='homenav'title= "Outreach Program">
                <NavDropdown.Item className='homenav'as={Link} to="/Outreach/SummerInternship">Summer Internship</NavDropdown.Item>
                <NavDropdown.Item className='homenav'as={Link} to="/Outreach/WinterInternship"> Winter Internship</NavDropdown.Item>
                </NavDropdown> 
                <Nav.Link className='homenav'as={Link} to="/Partnership">Partnership</Nav.Link>
                <Nav.Link className='homenav'as={Link} to="/Joinus">Join Us</Nav.Link>

        </Nav>
        </Navbar.Collapse>
            </Navbar>
            </>
           <div className='grid'>
           {CardInfo.map(renderCard)}
           </div>
<Reveal>
           <div>
           <h1 className='msgheading'>THE HON'BLE VICE CHANCELLOR'S MESSAGE</h1>
           <div class="side-by-side"> 
  <div> 
  <img className='imagevc' src='https://www.igdtuw.ac.in/images/vcmadam1.png' alt='vice chancellor '></img>
  </div> 
  <div> 
  <p className='msgvc'>"The Purpose of Artificial Intelligence is to Re -
Engineer the Human Mind"</p>
  </div> 
  
</div> 

<div>
    <p className='para'>We are absolutely privileged to live in an era of Artificial Intelligence and
data abundance. The evolution of Deep Learning for Artificial Intelligence
has led to incredible advances in nearly all fields of technology which
promises an outstripping future. The indispensable necessity of Artificial
Intelligence couldn’t be more imposed upon in the recent trying times.
Better healthcare, intelligent flying cars, improved access to financial
resources and more informed allocation of state resources are just a few of
what can be in the next decade.
</p>
<p className='para'>IGDTUW has established Centre of Excellence - Artificial Intelligence with the
support of Department of Science and Technology, GOI. I am happy that COE - AI is
doing excellent work in niche research areas like Speech Technology, NLP,
Computer Vision and other domains by applying latest AI Technologies including
ML and DL. By bringing together a team of renowned Academicians, Researchers,
Faculty and Students, the Centre of Excellence - ArtificialIntelligence strives to
create a congregation ofideas and intents at a single platform.
i am happy to know that coe-ai is releasing its first newsletter which </p>
<p className='para'>highlights of various activities done under coe along with the future plan. I am
sure that in coming time coe-ai will be more vibrant in terms of various activities
at national and internationallevel.
"The Purpose of Artificial Intelligence is to Re -
Engineer the Human Mind"
</p>
  </div>
  

            {/* <h1>THE HON'BLE VICE CHANCELLOR'S MESSAGE</h1>
            <div class="row">
  <div class="column">
    <img className='imagevc' src='https://www.igdtuw.ac.in/images/vcmadam1.png' alt='vice chancellor '></img>
  </div>
  <div class="column">
    <p>"The Purpose of Artificial Intelligence is to Re -
Engineer the Human Mind"</p>
  </div>
</div> */}
           </div>
           </Reveal>
              


          
           
                           <div>SUPPORTED BY</div>
                              <div><img src={goilogo} alt="this is college logo" className='photo' /></div>
                             <div>Department of Science and Technology</div>
                        <div>GOI</div>

 
        </div>
    );
  }
  
  export default Home;
