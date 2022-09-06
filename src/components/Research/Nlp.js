import React, {useEffect, useState} from 'react';
import app from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
import Navigation from '../../container/Navigation';
const db = getFirestore(app);

function Nlp() {
    const[dataToShow, setData] = useState([]);
    useEffect(() => {
  const data= [];
   
      const getValues = async () => {
        const querySnapshot = await getDocs(collection(db, "NLP"));
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
           setData(data);
        });
    }
    getValues();
 },[]);
    return (
        <div className='bb'>
        <Navigation />
            <h1 className='evetalk'>Natural Language Processing </h1>
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
    );
  }
  
  export default Nlp;
