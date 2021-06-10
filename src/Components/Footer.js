import React from 'react';
import './Footer.css';
import social from '../images/social.png';
import wline from '../images/wline.png';
import unline from '../images/underln.png';

function Footer() {
  return (
    <div>
      <div className="row contact container pt-5 pb-5">
        <div className="col-md-6 contact-sec">
          <div>
            <div className="ml-5">
              <div className="d-flex pt-5 mt-5 pl-5">
                <span>
                  <img src={wline} alt="underline" style={{ color: 'white' }} />
                </span>
                <h2 className="about-text text-light pl-4">Appointment</h2>
              </div>
              <h3 className="contact-h3">+1 (234) 567-89-02</h3>
              <h4 className="con-h4">Opening Hours</h4>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '16px',
                  color: 'white',
                  paddingLeft: '50px',
                }}
              >
                9:00am – 10:00pm
              </h3>
            </div>
          </div>
        </div>

        <div className="col-md-6" style={{ backgroundColor: '#F0F0F0' }}>
          <div className="">
            <div className="d-flex pt-5 mt-5 pl-5">
              <span>
                <img src={unline} alt="underline" style={{ color: 'white' }} />
              </span>
              <h2 className="about-text  text-dark pl-4">Delivery</h2>
            </div>
            <h3 className="make-text pt-4 text-dark pl-5">Order Food</h3>

            <button type="button" class="btn btn-default">
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      <div className="footer-sec">
        <div className="row container text-light">
          <div className="col-md-3 ">
            <h1>RST</h1>
          </div>
          <div className="col-md-3">
            <div class="d-flex flex-column bd-highlight mb-3">
              <div class="p-2 pb-4 bd-highlight">Menu</div>
              <div class="p-2 bd-highlight">About</div>
              <div class="p-2 bd-highlight">Menu</div>
              <div class="p-2 bd-highlight">BLog</div>
              <div class="p-2 bd-highlight">Contact</div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="d-flex flex-column bd-highlight mb-3">
              <div class="p-2 pb-4 bd-highlight">Service</div>
              <div class="p-2 bd-highlight">Food</div>
              <div class="p-2 bd-highlight">Delivery</div>
              <div class="p-2 bd-highlight">Catering</div>
              <div class="p-2 bd-highlight">Book</div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="d-flex flex-column bd-highlight mb-3">
              <div class="p-2 pb-4 bd-highlight">Social</div>
              <div>
                <img src={social} alt="social-img" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr style={{ border: '0.5px solid gray' }} />
        <footer>
          <div class="d-flex bd-highlight text-light">
            <div class="p-2 flex-grow-1 bd-highlight">
              Copyright © 2020. All Rights Reserved.
            </div>
            <div class="p-2 bd-highlight pr-5">Terms of Use</div>
            <div class="p-2 bd-highlight pl-4 pr-5">Privacy Policy</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;
