import React, {useEffect, useState} from 'react';
import Navigation from '../container/Navigation';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';
import app from '../firebase';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './publications.css';
import { Slide } from 'react-reveal';
import { Zoom } from 'react-reveal';

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
      <Zoom>
        <div className='bodyback'>
        <Navigation/>
        <Slide top>
        <h1 className='publi' style={{fontFamily:'PT Serif'}}>PUBLICATIONS</h1>
        </Slide> 

        {dataToShow.map((item) => (
    <div className='expert'>
<div className='expertTalks' key={item.Id}>
    <div>
        <h1 className='expertTopic' style={{fontSize:'1.7vw', fontWeight:'bolder', paddingRight:'2vw'}}> <span > Author: </span>{item.author}</h1>
        <p className='expertText' style={{fontSize:'1.3vw',fontWeight:'bold', paddingRight:'2vw'}}> <span > Article: </span>{item.article}</p>
        <p style={{fontSize:'1.2vw',  paddingRight:'2vw'}}><span > Published At: </span> {item.publishedAt}</p>
    </div>
</div>
</div>
                ))}


            {/* {dataToShow.map((item) => ( */}
              {/* <Row>
                <div data-aos="fade-up" data-aos-offset="200" key={item.id}>
                <Card className='cards' style={{ textAlign: 'left', margin:'10px', border:'20', fontFamily:'Taviraj', backgroundColor:'#DBDFFD' }} >
              <Card.Body>
                <Card.Text>
                  <span style={{fontWeight:'bold'}}>  Author: </span><span>{item.author}</span>
                </Card.Text>
                <Card.Text >
                  <span style={{fontWeight:'bold'}}>Article: </span> {item.article}
                </Card.Text>
                <Card.Text >
                  <span style={{fontWeight:'bold'}}> Published At: </span>  {item.publishedAt}
                </Card.Text>
              </Card.Body>
            </Card> 
                </div>
                </Row> 
                
                ))} */}
        </div>
        </Zoom>
);
  }
  
  export default Publications;
