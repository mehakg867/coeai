import React from 'react';

import Navigation from '../../container/Navigation';
import construction from "../../images/construction.jpg";

function ImageRecognition() {
  return (
    
      <div>
      <Navigation />
          <h1>Image recognition</h1>
          <p>Page under Construction</p>
          <img src={construction} alt="construction"/>
      </div>
   
      
  );
}

export default ImageRecognition;
