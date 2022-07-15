import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Conference from './components/Conference';

import Projects from './components/Outreach/Projects';
import Patents from './components/Outreach/Patents';
import Products from './components/Outreach/Products';
import Publications from './components/Outreach/Publications';

import ImageRecognition from './components/Research/ImageRecognition';
import Nlp from './components/Research/Nlp';
import SpeechTech from './components/Research/SpeechTech';
import ComputerVision from './components/Research/ComputerVision';

import Partnership from './components/Partnership';

import People from './components/People';
import Joinus from './components/Joinus';
import Event from './components/Event';
import Aboutus from './components/Aboutus';



function App() {
  return (
    <Router>
      <div className='App'>
      
          <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/Conference" element= {<Conference/>}/>

          <Route Path="/Outreach/Patents" element={<Patents />}/>
          <Route path="/Outreach/Projects" element={<Projects/>} />
          <Route path="/Outreach/Products" element={<Products/>} />
          <Route path="/Outreach/Publications" element={<Publications/>} />

          <Route path="/Research/ComputerVision" element={<ComputerVision/>} />
          <Route path="/Research/ImageRecognition" element={<ImageRecognition />} />
          <Route path="/Research/Nlp" element={<Nlp />} />
          <Route path="Research/SpeechTech" element={<SpeechTech />} />
          
          <Route path="/Event" element={<Event />} />

          <Route path="/Joinus" element={<Joinus />} />
          
          <Route path="/Partnership" element={<Partnership />} />
          
          <Route path="/People" element={<People />} />
          <Route path="/Aboutus" element ={<Aboutus />} />         
          </Routes>
          
      </div>
    </Router>

  );
}

export default App;
