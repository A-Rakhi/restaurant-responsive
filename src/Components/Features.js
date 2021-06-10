import React from 'react';
import '../Components/Features.css';
import underln from '../images/underln.png';
import fish from '../images/fish.png';
import Menu from './Menu';

function Features() {
  return (
    <div className="feature-section mb-5">
      {/* <div style={{ width: '50%' }}> */}
      <div>
        <div className="d-flex pt-5 mt-5">
          <span className="pl-1">
            <img src={underln} alt="underline" />
          </span>
          <h2 className="about-text pl-4">Features</h2>
        </div>
        <h3 className="make-text pt-4 pb-2">First-Class Dining Experience</h3>
      </div>

      <div className="mt-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div className="img-card1">
              <div className="round-box">
                <img src={fish} alt="fsh" />
              </div>
            </div>
            <h5 className="card-title pt-5 pl-1">Fresh Ingredients</h5>
            <p className="card-text pl-1">
              The copy warned the Little Blind Text,that where it came from it
              would have been rewritten a thousand times.
            </p>
          </div>
          <div class="col">
            <div className="img-card2">
              <div className="round-box">
                <img src={fish} alt="fsh" />
              </div>
            </div>
            <h5 className="card-title pt-5 pl-1">Fast Service</h5>
            <p className="card-text pl-1">
              Copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times.
            </p>
          </div>
          <div class="col">
            <div className="img-card3">
              <div className="round-box">
                <img src={fish} alt="fsh" />
              </div>
            </div>
            <h5 className="card-title pt-5 pl-1">Hand Made</h5>
            <p className="card-text pl-1">
              Warned the Little Blind Text, that where it came from it would
              have been rewritten a thousand times.
            </p>
          </div>
        </div>
      </div>
      <br></br>

      <Menu />
    </div>
  );
}
export default Features;
