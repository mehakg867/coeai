import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navigation from '../container/Navigation';
import '../App.css';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs,orderBy,query } from 'firebase/firestore';
import app from '../firebase';
import './Event.css';
import { Slide } from 'react-reveal';


const db = getFirestore(app);

function Event() {

    console.log("start");
    const[dataToShow, setData] = useState([]);
    const event = collection(db, "Events");
    const q = query(event, orderBy("Id","desc"));


      useEffect(() => {
    const data= [];
    
        const getValues = async () => {
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
             setData(data);
          });
             
        }
     getValues();
  },[]);

    return (
        <div className='bodyback'>
        <Navigation />
  <div>
    <Slide top>
    <h1 className='evetalk'>EVENT TALKS</h1>
   </Slide>
  </div>          

{dataToShow.map((item) => (
    <div className='expert'>
<div className='expertTalks' key={item.Id}>
    <div className='expertImg'>
        <img className='eximage' src={item.image} alt=''/>
        <p style={{textAlign:'center', fontSize:'1vw', fontWeight:'bold', paddingTop:'1vw'}}>{item.name}</p>
        <p style={{textAlign:'center',  fontSize:'1vw', fontWeight:'bold', marginBottom:'0rem'}}>{item.designation}</p>
    </div>
    <div className='expertTopic'>
    <div className='expertDate' style={{fontSize:'1.2vw', fontWeight:'bold', paddingRight:'2vw'}}>
        {item.date}
    </div>
        <h1 className='expertTopic' style={{fontSize:'2vw', fontWeight:'bold', paddingRight:'2vw'}}>{item.topic}</h1>
        <p className='expertText' style={{fontSize:'1.3vw', paddingRight:'2vw'}}>{item.info}</p>
        <p style={{fontSize:'1.2vw', fontWeight:'bold', paddingRight:'2vw'}}>No. of Participants:{item.participants}</p>
    </div>
</div>
</div>
                ))}


        </div>
    );
  }
  
  export default Event;