import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navigation from '../container/Navigation';
import '../App.css';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';
import app from '../firebase';
import './Event.css';


const db = getFirestore(app);

function Event() {

    console.log("start");
    const[dataToShow, setData] = useState([]);
    


      useEffect(() => {
    const data= [];
    
        const getValues = async () => {
          const querySnapshot = await getDocs(collection(db, "Events"));
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
             setData(data);
          });
             
        }
     getValues();
  },[]);

    return (
        <div>
        <Navigation />
            

{dataToShow.map((item) => (
    <div className='expert'>
<div className='expertTalks' key={item.Id}>
    <div className='expertImg'>
        <img src="https://th.bing.com/th/id/OIP.X4WLXoJLdIgQu5LO5UxIoQAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=''/>
        <p>{item.name}</p>
        <p>{item.designation}</p>
    </div>
    <div className='expertTopic'>
    <div className='expertDate'>
        {item.date}
    </div>
        <h1 className='expertTopic'>{item.topic}</h1>
        <p className='expertText'>{item.info}</p>
    </div>
</div>
</div>
                ))}


        </div>
    );
  }
  
  export default Event;