import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Nav from './container/Nav';
import Home from './components/Home';
import Event from './components/Event';
import Courses from './components/Courses';


function App() {
  return (
      <Nav />
  );
}

export default App;
