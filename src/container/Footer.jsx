import React from "react";
import './Foot.css';
import goilogo1 from '../images/goilogo1.png';


const Footer = () => <footer className="page-footer font-small blue pt-4" >
    <div className="container-fluid text-center text-md-left">
        <div className="row" >
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">SUPPORTED BY</h5>
               <img src={goilogo1} alt="this is logo" style={{
                height:'10vw', width:'10vw'}}/>
                <p>Department of Science and Technology</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{padding:"1vw"}}>Useful Links</h5>
                <ul className="list-unstyled">
                    <li style={{marginBottom:"0.5vw"}}><a href="https://www.igdtuw.ac.in/Research.php?id=21">Ph.D. RELATED CIRCULARS/NOTICES</a></li>
                    <li style={{marginBottom:"0.5vw"}}><a href="https://www.igdtuw.ac.in/Research.php?id=3">Ph.D. PROGRAM</a></li>
                    <li style={{marginBottom:"0.5vw"}}><a href="https://www.igdtuw.ac.in/Research.php?id=2">PH.D REGULATIONS</a></li>
                    <li style={{marginBottom:"0.5vw"}}><a href="https://aist2022.com/">AIST</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{padding:"1vw"}}>Quick Links</h5>
                <ul className="list-unstyled" >
                    <li style={{marginBottom:"0.5vw"}}><a href="https://dst.gov.in/">Department of Science and Technology</a></li>
                    <li style={{marginBottom:"0.5vw"}}><a href="https://dhr.gov.in/" >Department OF Health Research</a></li>
                    <li style={{marginBottom:"0.5vw"}}><a href="https://www.ieee.org/">IEEE</a></li>
                    <li style={{marginBottom:"0.5vw"}}><a href="https://link.springer.com/search?facet-discipline=%22Computer+Science%22"style={{marginTop:"1vw"}}>Springer</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="https://www.igdtuw.ac.in/" target="_blank" rel="noopener noreferrer" > IGDTUW</a>
    </div>

</footer>

export default Footer