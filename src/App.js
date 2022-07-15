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



function App() {
  return (
    <Router>
      <div className='App'>
      
          <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/Conference" element= {<Conference/>}/>

          <Route Path="/Research/Patents" element={<Patents />}/>
          <Route path="/Research/Projects" element={<Projects/>} />
          <Route path="/Research/Products" element={<Products/>} />
          <Route path="/Research/Publications" element={<Publications/>} />

          <Route path="/Outreach/ComputerVision" element={<ComputerVision/>} />
          <Route path="/Outreach/ImageRecognition" element={<ImageRecognition />} />
          <Route path="/Outreach/Nlp" element={<Nlp />} />
          <Route path="/SpeechTech" element={<SpeechTech />} />
          
          <Route path="/Event" element={<Event />} />

          <Route path="/Joinus" element={<Joinus />} />
          
          <Route path="/Partnership" element={<Partnership />} />
          
          <Route path="/People" element={<People />} />
          
          </Routes>
          
      </div>
    </Router>

  );
}

export default App;
