import { initializeApp } from 'firebase/app';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8mrFD7F82wTofogvCSChJj8CAN4QQVeQ",
    authDomain: "coeai-fcece.firebaseapp.com",
    projectId: "coeai-fcece",
    storageBucket: "coeai-fcece.appspot.com",
    messagingSenderId: "513397845691",
    appId: "1:513397845691:web:5e7fd3075a75a34cc6039e",
    measurementId: "G-GZ5DBBL30Y"
  };

  const app = initializeApp(firebaseConfig);

  export default app;