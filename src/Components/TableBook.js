import React from "react";
import underln from "../images/underln.png";
import "./TableBook.css";
import customer from "../images/customer.png";
import arrow from "../images/arrow.png";
import pins from "../images/pins.png";
import group from "../images/Group.png";
import '../Components/Blog'
import Blog from "../Components/Blog";
import table1 from '../images/table1.png'
import table2 from '../images/table2.png'
import table3 from '../images/table3.png'

function TableBook() {
  return (
    <div className="table-section mb-5 container">
      <div style={{ width: "35%" }}>
        <div className="d-flex">
          <span className="pl-1">
            <img src={underln} alt="underline" />
          </span>
          <h2 className="about-text pl-4">Book a table</h2>
        </div>
        <h3 className="make-text pt-4 pb-2">Upcoming Events</h3>
      </div>

      <div className="mt-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div>
                <img src={table1} alt="tablepic" className="img-card"/>
                <h5 className="dateBook">15 June</h5>
            </div>
            <h5 className="c-title pl-1">National Day</h5>
            <p className="cart-text pl-1">
              The copy warned the Little Blind Text, that where it came from it
              would have been.
            </p>
          </div>
          <div class="col">
            <div>
                <img src={table2} alt="tablepic" className="img-card"/>
                <h5 className="dateBook">20 June</h5>
            </div>
            <h5 className="c-title pl-1">Superbowl</h5>
            <p className="cart-text pl-1">
              Little Blind Text, that where it came from it would have been
              rewritten.
            </p>
          </div>
          <div class="col">
          <div>
                <img src={table3} alt="tablepic" className="img-card"/>
                <h5 className="dateBook">1 August</h5>
            </div>
            <h5 className="c-title pl-1">Groundhog Day</h5>
            <p className="cart-text pl-1">
              Text, that where it came from it would have been rewritten a
              thousand times.
            </p>
          </div>
        </div>
        
        <div className="row pb-5">
            <div className="col-md-12 align-self-center pins mt-5 ">
               <img src={pins} alt="pn"/> 
            </div>
        </div>
      </div>
      <br></br>

      {/* Testimonials */}

      <div className="row testimonial pt-5 pb-5">
        <div className="col-md-6" style={{backgroundColor:'#333333'}}>
          <div className="ml-5">
            <div className=" mt-5 pl-2">
                <img src={customer} alt="underline" style={{  }} />
            </div>
            <h3 className=" pt-4 text-light pl-2">Sammy Lawson</h3>
            <p className="text-light">
            "There live the blind texts. Separated they live in right at the
            coast of the Semantics, a large language ocean. Flows by their place
            and supplies it with the necessary regelialia."
          </p>
          <span>
            <img src={group} alt="groups" className="mt-4 mb-5" />
          </span>

          </div>
        </div>

        <div className="col-md-6 pl-5 mb-5">
          <div className="d-flex" style={{ paddingTop: "80px" }}>
            <span>
              <img src={underln} alt="underline" />
            </span>
            <h2 className="about-text pl-4">Testimonials</h2>
          </div>
          <h3 className="make-text pt-4">Customer Reviews</h3>
          <p>
            "There live the blind texts. Separated they live in right at the
            coast of the Semantics, a large language ocean. Flows by their place
            and supplies it with the necessary regelialia."
          </p>
          <span>
            <img src={arrow} alt="sign" className="mt-4 pb-3" />
          </span>
        </div>
      </div>
      <br></br>
      <br></br>
      
      <Blog/>

    </div>
  );
}
export default TableBook;
