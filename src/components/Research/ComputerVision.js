import React from 'react';

import Navigation from '../../container/Navigation';
import construction from "../../images/construction.jpg";

function ComputerVision() {
    return (
        <div>
        <Navigation/>
            <h1 className='evetalk'>Computer Vision</h1>
            <p>Page under Construction</p>
            <img src={construction} alt="construction"/>
        </div>
    );
  }
  
  export default ComputerVision;
