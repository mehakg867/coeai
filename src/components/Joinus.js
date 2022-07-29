import React, {Component} from 'react';
import { Zoom } from 'react-reveal';
import { BrowserRouter as Router} from "react-router-dom";
import '../App.css';
import Navigation from '../container/Navigation';
import './Joinus.css';

function Joinus() {
    return (
      <Zoom>
        <div className='bb'>

        <Navigation/>
            <h1>Join us page</h1>
            
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
       <div className="wrapper">
         <div className="button">
            <div className="icon">
               <i className="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
         </div>
         <br></br>
         <div className="button">
            <div className="icon">
               <i className="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
         </div>
         <br></br>

         <div className="button" >
            <div className="icon">
               <i className="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
         </div>
         <br></br>
         <div className="button">
            <div className="icon">
               <i className="fab fa-youtube"></i>
            </div>
            <span>YouTube</span>
         </div>
      </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
        </div>

        </Zoom>
      
    );
  }
  
  export default Joinus;
