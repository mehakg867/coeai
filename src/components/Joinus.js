import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import '../App.css';
import Navigation from '../container/Navigation';

function Joinus() {
    return (
        <div>
        <Navigation/>
            <h1>Join us page</h1>
        </div>
    );
  }
  
  export default Joinus;
