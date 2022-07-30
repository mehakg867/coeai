import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import '../App.css';
import Navigation from '../container/Navigation';
import construction from "../images/construction.jpg";

function People() {
    return (
        <div>
            <Navigation />
            <h1>People page</h1>
            <img src={construction}/>
        </div>
    );
  }
  
  export default People;
