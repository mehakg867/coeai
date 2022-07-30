import React, {useEffect, useState} from 'react';
import Navigation from '../container/Navigation';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';
import { Dropdown } from 'react-bootstrap';
import app from '../firebase';
import './Pat.css';
import useCollapse from 'react-collapsed';
import {Zoom} from 'react-reveal';



const db = getFirestore(app);

function Demo() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

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
<Zoom>
        <div className='bodyback'>
        
        <Navigation />
            <h1>Patents</h1>
            <div>
      <button {...getToggleProps()}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      <section {...getCollapseProps()}>Collapsed content 🙈</section>
    </div>
                      
            {/* {dataToShow.map((item) => (
                <div className='expert'>
<div className='expertTalks' key={item.Id}>
    <div>
        <h1 className='expertTopic' style={{fontSize:'1.7vw', fontWeight:'bolder', paddingRight:'2vw'}}> {item.title}</h1>
        <p className='expertText' style={{fontSize:'1.5vw',fontWeight:'bold', paddingRight:'2vw'}}> {item.author}</p>
        <p className='expertText' style={{fontSize:'1.3vw',fontWeight:'normal', paddingRight:'2vw'}}> {item.content1}</p>
        <p className='expertText' style={{fontSize:'1.3vw',fontWeight:'normal', paddingRight:'2vw'}}> {item.content2}</p>

    </div>
</div>
</div>
            ))}  */}


            
        </div>
        </Zoom>
    );
  }
  
  export default Pat;