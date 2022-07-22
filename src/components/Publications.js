import React, {useEffect, useState} from 'react';
import Navigation from '../container/Navigation';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';
import app from '../firebase';
import Card from 'react-bootstrap/Card';
import {Row,} from "reactstrap";
const db = getFirestore(app);


 function Publications() {
      console.log("start");
      const [dataToShow, setData] = useState([]);
        useEffect(() => {
      
      const data = [];
          const getValues = async () => {
            const querySnapshot = await getDocs(collection(db, "publications"));
            querySnapshot.forEach((doc) => {
                data.push(doc.data().info)
            });
               setData(data);
          }
       getValues();
    },[]);
   
    return (
        <div style={{backgroundColor:'aliceblue'}}>
        <Navigation/>
            <h1 style={{fontFamily:'PT Serif'}}>PUBLICATIONS</h1>
            {dataToShow.map((item) => (

                <Row>
                <div  key={item.id}>
                <Card style={{ backgroundColor: '#B7D3DF', textAlign: 'left', margin:'10px', border:'0', fontFamily:'Taviraj' }} >
              <Card.Body>
                <Card.Text >
                    {item}
                </Card.Text>
              </Card.Body>
            </Card> 
                </div>
                </Row>
                ))}
        </div>
);
  }
  
  export default Publications;
