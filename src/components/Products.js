import React, {Component} from 'react';
import Navigation from '../container/Navigation';
import construction from "../images/construction.jpg";

function Products() {
    return (
        <div>
        <Navigation/>
            <h1>Product</h1>
            <p>Page under Construction</p>
            <img src={construction}/>
            
        </div>
    );
  }
  
  export default Products;
