import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Event from './components/Conference';

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
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    <Router>
      <div className='App'>
      
          <Routes>
          <Route path="/" element={<Home />} />
          
          <Route Path="/Patents" element={<Patents />}/>
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Publications" element={<Publications/>} />

          <Route path="/ComputerVision" element={<ComputerVision/>} />
          <Route path="/ImageRecognition" element={<ImageRecognition />} />
          <Route path="/Nlp" element={<Nlp />} />
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
