import React, {useEffect, useState} from 'react';
import Navigation from '../container/Navigation';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';
import app from '../firebase';
import './publications.css';


const db = getFirestore(app);


 function Publications() {
      console.log("start");
      const[dataToShow, setData] = useState([]);
      


        useEffect(() => {
      const data= [];
      
          const getValues = async () => {
            const querySnapshot = await getDocs(collection(db, "publications"));
            querySnapshot.forEach((doc) => {
              data.push(doc.data());
               setData(data);
            });
               
          }
       getValues();
    },[]);
   
    return (
        <div className='bb'>
        <Navigation/>
        <h1 className='pat'>PUBLICATIONS</h1>

        {dataToShow.map((item) => (
    <div className='expert'>
<div className='expertTalks' key={item.Id}>
    <div>
        <h1 className='expertTopic' style={{fontSize:'2vw', fontWeight:'bolder', paddingRight:'2vw'}}>{item.article} </h1>
        <p className='expertText' style={{fontSize:'1.7vw',fontWeight:'bold', paddingRight:'2vw'}}><span > Author: </span>{item.author} </p>
        <p style={{fontSize:'1.2vw',  paddingRight:'2vw'}}><span > Published At: </span> {item.publishedAt}</p>
    </div>
</div>
</div>
                ))}


        </div>
);
  }
  
  export default Publications;
