import React from 'react';

import construction from "../../images/construction.jpg";

import Navigation from '../../container/Navigation';

function Winter() {
    return (
        <div>
        <Navigation/>
            <h1 className='evetalk'>Winter Internship </h1>
            <p>Page under Construction</p>
            <img src={construction} alt="construction"/>
        </div>
    );
  }
  
  export default Winter;
