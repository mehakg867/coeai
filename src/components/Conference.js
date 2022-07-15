import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navigation from '../container/Navigation';
import '../App.css';

function Conference() {
    return (
        <div>
        <Navigation/>
            <h1>Event page</h1>
            <p>this is event page</p>
        </div>
    );
  }
  
  export default Conference;
