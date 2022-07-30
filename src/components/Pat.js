import React, {useEffect, useState} from 'react';
import Navigation from '../container/Navigation';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';
import { Dropdown } from 'react-bootstrap';
import app from '../firebase';
import './Pat.css';
import {Zoom} from 'react-reveal';


const db = getFirestore(app);



function Pat() {
   
    const[dataToShow, setData] = useState([]);
    useEffect(() => {
  const data= [];
  
      const getValues = async () => {
        const querySnapshot = await getDocs(collection(db, "Patents"));
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
           setData(data);
        });
           
      }
   getValues();
},[]);


    return (
      <h1>hello</h1>
    );
  }
  
  export default Pat;