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
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="https://www.igdtuw.ac.in/" target="_blank" rel="noopener noreferrer" > IGDTUW</a>
    </div>

</footer>

export default Footer