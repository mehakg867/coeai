import React, {useEffect, useState} from 'react';
import Navigation from '../container/Navigation';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';
import app from '../firebase';
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

        <div className='bodyback'>
        
        <Navigation />
            <h1>Patents</h1>
            {dataToShow.map((item) => (
                <div className='expert'>
<div className='expertTalks' key={item.Id}>
    <div>
        <h1 className='expertTopic' style={{fontSize:'1.7vw', fontWeight:'bolder', paddingRight:'2vw'}}> {item.author}</h1>
        <p className='expertText' style={{fontSize:'1.5vw',fontWeight:'bold', paddingRight:'2vw'}}> {item.title}</p>
        <p className='expertText' style={{fontSize:'1.3vw',fontWeight:'normal', paddingRight:'2vw'}}> {item.content1}</p>
        <p className='expertText' style={{fontSize:'1.3vw',fontWeight:'normal', paddingRight:'2vw'}}> {item.content2}</p>

    </div>
</div>
</div>
            ))}
        </div>
    );
  }
  
  export default Pat;