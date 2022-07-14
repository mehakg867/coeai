import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import '../App.css';
import Nav from '../container/Nav';

function People() {
    return (
        <div>
            <Nav />
            <h1>People page</h1>
        </div>
    );
  }
  
  export default People;
