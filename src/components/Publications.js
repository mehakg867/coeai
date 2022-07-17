import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import Navigation from '../container/Navigation';

function Publications() {
    return (
        <div>
        <Navigation/>
            <h1>Publication page</h1>
        </div>
    );
  }
  
  export default Publications;
