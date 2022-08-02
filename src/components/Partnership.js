import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import '../App.css';
import Navigation from '../container/Navigation';
import construction from "../images/construction.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Partnership() {
    return (
        <div>
        <Navigation />
            <h1>Partnership page</h1>
            <img src={construction}/>
        </div>
    );
  }
  
  export default Partnership;
