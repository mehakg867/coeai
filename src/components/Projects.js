import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navigation from '../container/Navigation';
import app from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
import {Zoom} from 'react-reveal';
const db = getFirestore(app);

function Projects() {
   
        const[dataToShow, setData] = useState([]);
      useEffect(() => {
    const data= [];
    
        const getValues = async () => {
          const querySnapshot = await getDocs(collection(db, "Projects"));
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
             setData(data);
          });
             
        }
     getValues();
  },[]);
      return (
  <Zoom>
          <div className='bodyback'>
          
          <Navigation />
              <h1>Projects</h1>
              {dataToShow.map((item) => (
                  <div className='expert'>
  <div className='expertTalks' key={item.Id}>
      <div>
          <h1 className='expertTopic' style={{fontSize:'1.7vw', fontWeight:'bolder', paddingRight:'2vw'}}> {item.Title}</h1>
          <p className='expertText' style={{fontSize:'1.3vw',fontWeight:'normal', paddingRight:'2vw'}}> {item.Content[1]}</p>
          <p className='expertText' style={{fontSize:'1.3vw',fontWeight:'normal', paddingRight:'2vw'}}> {item.Content[2]}</p>
          <p className='expertText' style={{fontSize:'1.3vw',fontWeight:'normal', paddingRight:'2vw'}}> {item.Content[3]}</p>
  
      </div>
  </div>
  </div>
              ))}
          </div>
          </Zoom>
      );
  
  }
  
   export default Projects;
