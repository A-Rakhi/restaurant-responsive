import React from "react";
import "./Blog.css";
import underln from "../images/underln.png";
import blog1 from "../images/blog1.png";
import blog2 from '../images/blog2.png';
import blog3 from '../images/blog3.png';
import blog4 from '../images/blog4.png';

function Blog() {
  return (
    <div className="container  pt-5 pb-3">
      <div className="row  pt-5">
        <div className="d-flex">
          <span className="pl-4">
            <img src={underln} alt="underline" />
          </span>
          <h2 className="about-text pl-4">Blog</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h3 className="make-text pt-4 pb-2">Our Articles</h3>
        </div>
        <div className="col-md-6">
          <div>
            <button className="seeAll mt-4">SEE ALL</button>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-3">
          <div class="card-deck">
              <img src={blog1} alt="Cardcap"  className="card-pic" />
              <div className="card-body">
                <h5 className="about-text">Receipts</h5>
                <p className="c-text">
                    Slapped cozy a that lightheartedly
                </p>
                <p className="">
                  <small className="text-muted">24 jun 2020</small>
                </p>
            </div>
          </div>
        </div>        <div className="col-md-3">
          <div class="card-deck">
              <img src={blog2} alt="Cardcap"  className="card-pic" />
              <div className="card-body">
                <h5 className="about-text">Food</h5>
                <p className="c-text">
                On deer horse aboard tritely yikes  </p>
                <p className="">
                  <small className="text-muted">15 jun 2020</small>
                </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card-deck">
              <img src={blog3} alt="Cardcap"  className="card-pic" />
              <div className="card-body">
                <h5 className="about-text">Restaurant</h5>
                <p className="c-text">
                Last view back on the skyline of her                </p>
                <p className="">
                  <small className="text-muted">12 jun 2020</small>
                </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card-deck">
              <img src={blog4} alt="Cardcap"  className="card-pic" />
              <div className="card-body">
                <h5 className="about-text">Delivery</h5>
                <p className="c-text">
                Pityful a rethoric question ran over                </p>
                <p className="">
                  <small className="text-muted">30 may 2020</small>
                </p>
            </div>
          </div>
        </div>


        </div>
        <br></br>
    </div>
  );
}
export default Blog;
