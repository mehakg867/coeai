import React, {useEffect, useState} from 'react';
import Navigation from '../container/Navigation';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';
import Dropdown from 'react-bootstrap/Dropdown';
import app from '../firebase';
import './Pat.css';
import Collapsible from './Collapsible.tsx';
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


    
    <div>
        <Navigation />
        <h1>People page</h1>
        <div className="App container">

        {dataToShow.map((item) => (
    <div className='expert'>
<div className='expertTalks' key={item.Id}>
    <div>
    <Collapsible
        open
        title={item.title}>
                <p className='expertText' style={{fontSize:'1.7vw',fontWeight:'bold', paddingRight:'2vw'}}>{item.author} </p>
        <p className='expertText' style={{fontSize:'1.4vw',fontWeight:'normal', paddingRight:'2vw'}}>{item.content1} </p>
        <p className='expertText' style={{fontSize:'1.4vw',fontWeight:'normal', paddingRight:'2vw'}}>{item.content2} </p>

        
      </Collapsible>
    </div>
</div>
</div>
                ))}

      
    </div>
    </div>
);  }
  
  export default Pat;