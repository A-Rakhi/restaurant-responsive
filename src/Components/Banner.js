import React from 'react';
import './Banner.css';
import { Navbar, Nav } from 'react-bootstrap';
import wline from '../images/wline.png';
import play from '../images/play.png';
import pic from '../images/pic.png';
import recg from '../images/Rectangle.png';

function Banner() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="fixed-top container"
      >
        <Navbar.Brand href="#" className="navBand text-light">
          RST
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '170px' }}>
            <Nav.Link href="#action1" className="ml-5 text-light navText">
              About
            </Nav.Link>
            <Nav.Link href="#action2" className="ml-5 text-light navText">
              Menu
            </Nav.Link>
            <Nav.Link href="#action2" className="ml-5 text-light navText">
              Blog
            </Nav.Link>
            <Nav.Link href="#" className="ml-5 text-light navText">
              {' '}
              Contact{' '}
            </Nav.Link>
          </Nav>

          <button className="btn appointStyle text-light">APPOINTMENT</button>
        </Navbar.Collapse>
      </Navbar>

      <div className="row">

        <div className="col-lg-6 col-12 banner-Left">
          <div className="ml-5 main">
            <div className="d-flex pt-5 mt-5 pl-5">
              <span>
                <img src={wline} alt="underline" style={{ color: 'white' }} />
              </span>
              <h2 className="about-text  text-light pl-4">Restaurant</h2>
            </div>
            <h3 className="banner-text pt-4 text-light pl-3">
              Top Service Cuisine
            </h3>

            <button className="text-light seeMenu ml-5 mb-3">See Menu</button>
          </div>
        </div>

        <div
          className="col-lg-6  col-12"
          style={{ backgroundImage: `url(${pic})` }}
        >
          <div>
            <img src={play} className="play-img" alt="play"></img>
          </div>
          <div className="">
            <img src={recg} alt="reg" className="rectangle-img"></img>
          </div>
        </div>


      </div>
    </div>
  );
}
export default Banner;
