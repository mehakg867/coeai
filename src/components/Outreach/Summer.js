import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';
import app from '../../firebase';
import "./summer.css";
import Button from 'react-bootstrap/Button';
import Navigation from '../../container/Navigation';

const db = getFirestore(app);

function Summer() {
    const[dataToShow, setData] = useState([]);
      


    useEffect(() => {
  const data= [];
  
      const getValues = async () => {
        const querySnapshot = await getDocs(collection(db, "Summer_Internship"));
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
           setData(data);
        });
           
      }
   getValues();
},[]);
    return (
        <div className='bg'>
        <Navigation/>
            <div><h1>Summer Intership page</h1>

            {dataToShow.map((item) => (
    <div className='expert'>
<div className='expertTalks' key={item.Id}>
    <div className='expertTopic'>
    
        <h1 className='expertTopic' style={{fontSize:'2vw', fontWeight:'bold', paddingRight:'2vw'}}>{item.internship}</h1>
        <div className='expertDate' style={{fontSize:'1.7vw', fontWeight:'normal', paddingRight:'2vw',paddingTop:'1vw',paddingBottom:'0.5vw'}}>
        {item.date}
    </div>
  <p className='expertText' style={{fontSize:'1.7vw',fontWeight:'normal', paddingRight:'2vw'}}>{item.content[1]}</p>
  <p className='expertText' style={{fontSize:'1.7vw',fontWeight:'normal', paddingRight:'2vw'}}>{item.content[2]}</p>
  <p className='expertText' style={{fontSize:'1.7vw',fontWeight:'normal', paddingRight:'2vw'}}>{item.content[3]}</p>
<p style={{fontSize:'1.2vw', fontWeight:'bold', paddingRight:'2vw', aligntext:'center'}}><Button variant="outline-info" style={{marginRight:'1vw'}} href={item.brochure}>Brochure</Button><Button variant="outline-info" href={item.Apply_Now}>Apply Now</Button></p>
    </div>
</div>
</div>
                ))}

            </div>
        </div>
    );
  }
  
  export default Summer;
