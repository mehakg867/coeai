import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navigation from '../container/Navigation';

function Patnt() {
    return (
        <div>
        <Navigation/>
            <h1>Patent page</h1>
        </div>
    );
  }
  
  export default Patnt;