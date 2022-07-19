import React, {useEffect, useState} from 'react';
import Navigation from '../container/Navigation';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';
import app from '../firebase';
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
        <div>
        <Navigation/>
            <h1>Publication page</h1>
            {dataToShow.map((item) => (
                
                <div className='pubItems' key={item.id}>
                <p>{item}</p>
                </div>
                ))}
        </div>
);
  }
  
  export default Publications;
