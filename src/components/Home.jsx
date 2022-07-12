import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import '../App.css';
import './Home.css';
import IGDTUW from "../images/IGDTUW.jpg";
import goilogo from "../images/goilogo.jpg";
function Home() {
    return (
        <div>
           <div className='heading'>
               <div><h3>INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN</h3></div>
                     <div><h3>CENTRE of EXCELLENCE</h3></div>
                      <div><h3>Artificial Intelligence</h3></div>
           </div>
           <div><img src={IGDTUW} alt="this is college logo" className='image' /></div> 
                           <div>SUPPORTED BY</div>
                              <div><img src={goilogo} alt="this is college logo" className='photo' /></div>
                             <div>Department of Science and Technology</div>
                        <div>GOI</div>

 
        </div>
    );
  }
  
  export default Home;
