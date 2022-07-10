import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import './App.css';
import Nav from './container/Nav';
import Home from './components/Home';
import Event from './components/Event';
import Courses from './components/Courses';
import Research from './components/Research';
import Partnership from './components/Partnership';
import Outreach from './components/Outreach';
import People from './components/People';
import Joinus from './components/Joinus';


function App() {
  return (
    <Router>
      <div className='App'>
          <Nav />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/Partnership" element={<Partnership />} />
          <Route path="/Outreach" element={<Outreach />} />
          <Route path="/People" element={<People />} />
          <Route path="/Joinus" element={<Joinus />} />
          </Routes>
          
      </div>
    </Router>

  );
}

export default App;
