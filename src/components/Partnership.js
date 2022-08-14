import React from 'react';
import '../App.css';
import Navigation from '../container/Navigation';
import construction from "../images/construction.jpg";



function Partnership() {
    return (
        <div>
        <Navigation />
            <h1>Partnership page</h1>
            <img src={construction} alt ="construction" />
        </div>
    );
  }
  
  export default Partnership;
