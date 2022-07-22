import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navigation from '../container/Navigation';
import '../App.css';
import Wave from "react-wavify";
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";
  import './Conference.css';

function Conference() {
    return (
        <div>
        <Navigation/>
        <div className="section section-lg section-shaped pb-350" >
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="10">
                      <h1 className="display-3 text-dark">
                       About Conference
                      </h1>
                      <p className="lead text-dark">
                      After the grand success of three versions of International Conference on Artificial Intelligence and Speech Technology (AIST2019, AIST2020 and AIST2021), Indira Gandhi Delhi Technical University for Women, Delhi is all set to ready for hosting its fourth version i.e. 4th International Conference on Artificial Intelligence and Speech Technology (AIST2022) on 9-10th December, 2022 at IGDTUW Campus, Delhi. Last three Conferences witnessed a number of Expert Researchers, Academicians and Industry Practioners in AI and Speech Domain from premier Institutions in India and abroad including Japan, Australia, France, Germany,  Hungary, Czech Republic, Myanmar, Uzbekistan, Austria, Vietnam and others.
                    </p>
                    <p className="lead text-dark">
                      Thanks to Artificial Intelligence (AI), Machine Learning(ML), Natural Language Processing (NLP) and Speech Technology, which are enabling the development of Virtual Assistants in user-facing applications and working in the background to automate workflows. AI driven solutions like speech recognition systems are more accurate and efficient and makes it easier to identify and understand the components of natural language. These models can be used for voice recognition services, making an NLP service well-rounded and more efficient for various domain including medical (e.g. speech impaired people), forensics and academics and others.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn"
                          color="info"
            
                        >
                          <a className="knowbutn" href="https://aist2022.com/" target="_blank">Read More</a>
                          {/* <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Components</span> */}
                        </Button>
                        {/* <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Download React
                          </span>
                        </Button> */}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              
            </div>
            <Wave style={{ transform: 'rotate(180deg)' }}
            fill='#DBDFFD'
            paused={false}
            options={{
              height: 80,
              amplitude: 40,
              speed: 0.20,
              points:8,
            
            }}
            />

           
        </div>
    );
  }
  
  export default Conference;
