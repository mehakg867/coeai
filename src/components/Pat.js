import React, {useEffect, useState} from 'react';
import Navigation from '../container/Navigation';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';
import Dropdown from 'react-bootstrap/Dropdown';
import app from '../firebase';
import './Pat.css';
import useCollapse from 'react-collapsed';
import {Zoom} from 'react-reveal';
// import cx from "classnames";
// import Collapse from "@kunukn/react-collapse";

// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Toast from 'react-bootstrap/Toast';

const db = getFirestore(app);



function Pat() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
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
const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

    return (
<Zoom>
        <div className='bodyback'>
        
        <Navigation />
            <h1>Patents</h1>
            {dataToShow.map((item) => (
 <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Expand'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                Now you can see the hidden content. <br/><br/>
                Click again to hide...
            </div>
        </div>
    </div>

  ))}

{/*             
            {dataToShow.map((item) => (
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
            ))} */}


            
        </div>
        </Zoom>
    );
  }
  
  export default Pat;