import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navigation from '../container/Navigation';
import '../App.css';

function Aboutus() {
    return (
        <div>
        <Navigation/>
            <h1>About us  page</h1>
            <p>this is About page</p>
        </div>
    );
  }
  
  export default Aboutus;
