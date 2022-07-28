import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import construction from "../../images/construction.jpg";
import Navigation from '../../container/Navigation';

function Nlp() {
    return (
        <div>
        <Navigation />
            <h1>Natural Language Processing </h1>
            <p>Page under Construction</p>
            <img src={construction}/>
        </div>
    );
  }
  
  export default Nlp;
