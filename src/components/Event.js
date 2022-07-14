import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Nav from '../container/Nav';
import '../App.css';

function Event() {
    return (
        <div>
        <Nav />
            <h1>Event page</h1>
            <p>this is event page</p>
        </div>
    );
  }
  
  export default Event;
