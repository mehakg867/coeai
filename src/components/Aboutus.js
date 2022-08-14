import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navigation from '../container/Navigation';
import '../App.css';

import './Aboutus.css';



function Aboutus() {
    return (
       
        <div>
        <Navigation/>
         <section id="about" className="about-section pt-150">
<div className="container">
<div className="row">
<div className="col-lg-6">
    
<div className="about-img mb-50">
<img  className="imageab "src="https://preview.uideck.com/items/bliss/assets/img/about/about-img.svg" alt="about"></img>
</div>

</div>
<div className="col-lg-6">
<div className="about-content mb-50">
<div className="section-title mb-50">
    
<h1 className="mb-25">ABOUT
COE - AI</h1>

<p className='aboutcoe'>IGDTUW has established COE in Artificial Intelligence with the support of the
Department of Science and Technology, GOI. Under the magnanimous leadership
of Dr. (Mrs.) Amita Dev, avant-garde and state of the art infrastructure with
computing facilities/Research Centers with modern AI-enabled infrastructure
facilities to enhance functional efficiency for Teaching, Research, and
Innovation purposes are being created under COE.
</p>
<p className='aboutcoe'>It will Encourage, Engage and Involve student innovators, young research
scholars, and faculty members to have heuristic knowledge on AI-based
Technologies, Design and develop intuitive technological solutions and produce
good quality research in the AI-related areas of projects, and benefit the most
fromAI in solving industrial and societal needs.</p>

<p className='aboutcoe'>The Centre serves as the perfect platform with the necessary hardware and
software infrastructure to serve as a playground for the creative minds that
solve real data driven problems at hand.</p>

<p className='aboutcoe'>The COE-Ai at IGDTUW, caters to the requirements of Undergraduate, Post-graduate, and Doctorate programs in the domains of AI, Machine Learning,
and Deep Learning and various applications including Robotics, Drones, NLP,
and others. it organizes various workshops, seminars, conferences, industry
talks, hackathons on a regular basis.
</p>

</div>
</div>
</div>
</div>
</div>
</section>

 </div>

 
    );
  }
  
  export default Aboutus;
