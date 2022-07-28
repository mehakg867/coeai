import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navigation from '../../container/Navigation';
import construction from "../../images/construction.jpg";

function ComputerVision() {
    return (
        <div>
        <Navigation/>
            <h1>Computer Vision</h1>
            <p>Page under Construction</p>
            <img src={construction}/>
        </div>
    );
  }
  
  export default ComputerVision;
