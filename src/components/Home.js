import React, {useEffect, useState} from 'react';
import '../App.css';
import './Home.css';
import logo from "../images/logo.png";
import azadi from "../images/azadi.png";
import {Container, Nav,Navbar, NavDropdown, } from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import goilogo1 from "../images/goilogo1.png"
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';
import app from '../firebase';
import Picture from "../container/Picture";
import Footer from '../container/Footer';
import KommunicateChat from '../chat';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCardFooter,
  MDBCol,
} from 'mdb-react-ui-kit';

const db = getFirestore(app);

function Home() {

  const[dataToShow, setData] = useState([]);
      


  useEffect(() => {
const data= [];

    const getValues = async () => {
      const querySnapshot = await getDocs(collection(db, "notice"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
         setData(data);
      });
         
    }
 getValues();
},[]);



    return (
        <div>
        {/* Top header */}
        <div>
          <div className='row2' style={{display:'flex', flex:"100%",marginBottom:'0vw',height:'12vw'}}>
          <div className='col2' style={{display:'flex', flex:"10%",alignItems:'center', justifyContent:'center',position:'relative',top:'0.7vw',fontSize:'5vw'}}>
          <img src={azadi} alt="this is college logo" style={{height:'4.5vw', width:'6vw',position:'relative',down:'4vw'}} />
            </div>
           < div className='col2' style={{display:'flex', flex:"10%",alignItems:'center', justifyContent:'center',position:'relative',left:'4.5vw',top:'0.2vw',fontSize:'5vw'}}>
            <img src={logo} alt="this is college logo" style={{height:'6.5vw', width:'7vw'}} />
            </div>
            <div className='row' style={{display:'flex', flex:"70%", alignItems:'center', justifyContent:'center',position:'relative',right:'1.5vw'}}>
           <h3 className='phead'style={{fontWeight:'bold',marginTop:'2.5vw', fontSize:'2vw',fontFamily:"Times",marginBottom:'0vw'}}>CENTRE OF EXCELLENCE IN ARTIFICIAL INTELLIGENCE</h3> 
           <p className='phead'style={{marginBottom:'1.5vw',marginTop:'0vw',fontWeight:'normal', fontSize:'2vw',fontFamily:"Times"}}> INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN </p>
           <p className='phead'style={{marginBottom:'2vw',fontFamily:'Times',fontSize:'1vw',position:'relative',right:'2vw'}}>(Established by Govt. of Delhi vide Act 9 of 2012)</p>
           <p className='phead'style={{marginBottom:'4vw', fontFamily:'Times',fontSize:'1vw',position:'relative',right:'2vw'}}>ISO 9001:2015 Certified University</p>
            </div>
            <div className='col2' style={{display:'flex', flex:"10%",alignItems:'center', justifyContent:'center',position:'relative',fontSize:'5vw',top:'0.7vw'}}>
          
            <img src={goilogo1} alt="this is college logo" style={{height:'6vw', width:'7vw'}} />
              
            
            
           
            </div>
          </div>
        </div>

      <div className="picnotice">
        <div className='row'>
         
          <Picture/>
          <div className="notif" style={{ flex:"20%",position:'relative',fontSize:'2vw', border:'0.2vw solid #60BEEB' , overflowY:'scroll', maxHeight:'60vh'}}>
          <div className='row' style={{textAlign:'center',  boxShadow:'0 -20px 20px -20px #8cb0d4 inset'  }}><p>NOTICE BOARD</p>
        
          </div>
          {dataToShow.map((item) => (
            <MDBCard className='notice' border border-4 shadow-inner  style={{fontSize:'0.8vw', textAlign:'left',  backgroundColor: 'aliceblue'}}>
            <MDBCardBody><a className='notice' target="_blank" rel="noopener noreferrer" href={item.link} style={{textDecoration:'none'}}>{item.name}</a></MDBCardBody>
          </MDBCard>
          ))}
          </div>
        </div>
      </div>
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
           
           <MDBRow>
      <MDBCol sm='3'>
           <MDBCard className='box' style={{ width: '18rem',height:"35rem", backgroundColor: 'aliceblue' }}>
      <MDBCardImage src='https://th.bing.com/th/id/OIP.4byI5Yjd4tBAKO_o1fGHVgHaEK?pid=ImgDet&rs=1' position='top' alt='...' style={{objectFit: 'cover', width: '100%',height: '30%'}} />
      <MDBCardBody>
        <MDBCardTitle>PATENTS</MDBCardTitle>
        <MDBCardText>
        Exclusive right granted for an invention, which is a product or a process that provides, in general, a new way of doing something, or offers a new technical solution to a problem.
        </MDBCardText>
        <MDBCardFooter>
        <a href="/Pat" class="btn btn-outline-primary waves-effect">Explore</a>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol sm='3'>
    <MDBCard className='box' style={{ width: '18rem',height:"35rem", backgroundColor: 'aliceblue' }}>
      <MDBCardImage src='https://traderspros.com/wp-content/uploads/2020/11/ethereum-basic-info.png' position='top' alt='...' style={{objectFit: 'cover', width: '100%',height: '30%'}}/>
      <MDBCardBody>
        <MDBCardTitle>PRODUCTS</MDBCardTitle>
        <MDBCardText>
        A software product is an out-of-the-box piece of software that's been created to solve a more general problem that regularly occurs within a specific segment.
        </MDBCardText>
       <MDBCardFooter>
       <a href="/Products" class="btn btn-outline-primary waves-effect">Explore</a>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol sm='3'>
    <MDBCard className='box' style={{ width: '18rem',height:"35rem", backgroundColor: 'aliceblue' }}>
      <MDBCardImage src='https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg' position='top' alt='...' style={{objectFit: 'cover', width: '100%',height: '30%'}} />
      <MDBCardBody>
        <MDBCardTitle>PROJECTS</MDBCardTitle>
        <MDBCardText>
        A Software Project is the complete procedure of software development from requirement gathering to testing and maintenance, carried out according to the execution methodologies, in a specified period of time to achieve intended software product.
        </MDBCardText>
        <MDBCardFooter>

        <a href="/Projects" class="btn btn-outline-primary waves-effect">Explore</a>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol sm='3'>
    <MDBCard className='box' style={{ width: '18rem',height:"35rem", backgroundColor: 'aliceblue' }}>
      <MDBCardImage src='https://firebasestorage.googleapis.com/v0/b/coeai-fcece.appspot.com/o/events_images%2Fpublication.jpg?alt=media&token=14b7ae2e-82c1-48f2-9d71-9f4495c67068' position='top' alt='...' style={{objectFit: 'cover', width: '100%',height: '30%'}} />
      <MDBCardBody>
        <MDBCardTitle>PUBLICATIONS</MDBCardTitle>
        <MDBCardText>
        Different books and research papers are published by the faculties and the students of the university
        </MDBCardText>
        <MDBCardFooter>
        <a href="/Publications" class="btn btn-outline-primary waves-effect">Explore</a>

        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    

    </MDBRow>
    <KommunicateChat/>

           <div className='msgvice'>
           <h1 className='msgheading'>THE HON'BLE VICE CHANCELLOR'S MESSAGE</h1>
           <div className="side-by-side"> 
  <div data-aos="fade-up"> 
  <img className='imagevc' src='https://www.igdtuw.ac.in/images/vcmadam1.png' alt='vice chancellor '></img>
  </div> 
  <div> 
  <p className='msgvc' data-aos="fade-up">"The Purpose of Artificial Intelligence is to Re -
Engineer the Human Mind"</p>
  </div> 
  
</div> 

<div>
    <p className='para' data-aos="fade-up">We are absolutely privileged to live in an era of Artificial Intelligence and
data abundance. The evolution of Deep Learning for Artificial Intelligence
has led to incredible advances in nearly all fields of technology which
promises an outstripping future. The indispensable necessity of Artificial
Intelligence couldn’t be more imposed upon in the recent trying times.
Better healthcare, intelligent flying cars, improved access to financial
resources and more informed allocation of state resources are just a few of
what can be in the next decade.
</p>
<p className='para' data-aos="fade-up">IGDTUW has established Centre of Excellence - Artificial Intelligence with the
support of Department of Science and Technology, GOI. I am happy that COE - AI is
doing excellent work in niche research areas like Speech Technology, NLP,
Computer Vision and other domains by applying latest AI Technologies including
ML and DL. By bringing together a team of renowned Academicians, Researchers,
Faculty and Students, the Centre of Excellence - ArtificialIntelligence strives to
create a congregation ofideas and intents at a single platform.
i am happy to know that coe-ai is releasing its first newsletter which </p>
<p className='para' data-aos="fade-up">highlights of various activities done under coe along with the future plan. I am
sure that in coming time coe-ai will be more vibrant in terms of various activities
at national and internationallevel.
"The Purpose of Artificial Intelligence is to Re -
Engineer the Human Mind"
</p>
  </div>
           </div>
              


          
           
                           {/* <div>SUPPORTED BY</div>
                              <div ><img src={goilogo} alt="this is college logo" className='photo' /></div>
                             <div >Department of Science and Technology</div>
                        <div>GOI</div> */}
<Footer/>
                        </div>
      
    );
  }
  
  export default Home;
