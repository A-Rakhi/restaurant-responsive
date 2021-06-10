import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../Components/About.css";
import underln from "../images/underln.png";
import wline from "../images/wline.png";
import pic from "../images/pic.png";
import Features from "./Features";
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'

function About() {
  return (
    <div className="about-section container">

      <Row className="mb-5 pb-5">
        <Col md={6} className="mb-5 box">
          <div>
          <img src={pic1} className="fishes" alt="about-pic1"/>
		      <img src={pic2} className="fish" alt="about-pic2"/>
		      <img src={pic3} className="img" alt="about-pic3"/> 
            </div>   
        </Col>
        <Col md={6} className="pt-5 mt-5 pl-5 mb-5">
          <div className="d-flex pt-5 mt-5">
            <span>
              <img src={underln} alt="underline" />
            </span>
            <h2 className="about-text pl-4">About</h2>
          </div>
          <h3 className="make-text pt-4">Making The Delicious Food</h3>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language. Separated they live in Bookmarksgrove
            right at the coast.
          </p>
          <Button className="btn text-light bg-secondary aboutus">ABOUT US</Button>
        </Col>
      </Row>

      <div className="row contact-one pt-5 mt-3">

        <div className="col-md-6 bg-secondary">
          <div className="ml-5">
          <div className="d-flex pt-5 mt-5 pl-5">
            <span>
              <img src={wline} alt="underline" style={{color:'white'}}/>
            </span>
            <h2 className="about-text  text-light pl-4">Appointment</h2>
          </div>
          <h3 className="make-text pt-4 text-light pl-5">Reservation</h3>
          
          <Button className="text-light bg-secondary aboutus ml-5 mt-3 mb-3">
              CONTACT US</Button>
          </div>
          </div>

        <div
          className="col-md-6 pb-5"
          style={{ backgroundImage: `url(${pic})`, height:'384px' }}>
          <div className="bg-light contactBox">
          <h3 style={{fontFamily:'DM Sans, sans-serif', fontWeight:'bold',fontSize:'24px',color:'#333333'}}>
              +1 (234) 567-89-02</h3>
              <h4 style={{fontFamily:'DM Sans, sans-serif',fontSize:'14px',color:'gray',paddingTop:'30px'}}>
              Opening Hours</h4>
              <h3 style={{fontFamily:'DM Sans, sans-serif', fontSize:'16px',color:'#333333'}}>
              9:00am – 10:00pm</h3>
          </div>

        </div>
      </div>

    <Features/>

    </div>
  );
}
export default About;
