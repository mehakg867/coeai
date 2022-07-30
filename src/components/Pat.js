import React, {useEffect, useState} from 'react';
import Navigation from '../container/Navigation';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';
import Dropdown from 'react-bootstrap/Dropdown';
import app from '../firebase';
import './Pat.css';
import Collapsible from './Collapsible.tsx';
const db = getFirestore(app);



function Pat() {
   
  return (
    <div>
        <Navigation />
        <h1>People page</h1>
        <div className="App container">
      <Collapsible
        open
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      >
        Consectetur adipiscing elit pellentesque habitant morbi tristique.
        Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
        pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
        et netus et. Elementum integer enim neque volutpat. Faucibus in ornare
        quam viverra orci sagittis. Amet volutpat consequat mauris nunc congue
        nisi vitae suscipit. Dui accumsan sit amet nulla. Proin sagittis nisl
        rhoncus mattis. Enim nulla aliquet porttitor lacus. Arcu odio ut sem
        nulla pharetra diam sit amet. Gravida rutrum quisque non tellus orci ac
        auctor augue
      </Collapsible>
    </div>
    </div>
);  }
  
  export default Pat;