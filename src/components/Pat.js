import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navigation from '../container/Navigation';
import '../App.css';

function Pat() {
    return (
        <div>
        <Navigation />
            <h1>Patent page</h1>
            <p>this is Patents page</p>
        </div>
    );
  }
  
  export default Pat;