import React from "react";
import { Row, Col } from "react-bootstrap";
import underln from "../images/underln.png";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import sign from "../images/sign.png";
import "./Chef.css";
import TableBook from "./TableBook";

function Chef() {
  return (
    <div>
      <div className="container pt-5 pb-5">
        <Row className="mb-5 pb-5">
          <Col md={6} className="mb-5 chef-container">
            <div>
              <img src={pic3} className="chef1" alt="about-pic3" />

              <img src={pic2} className="chef2" alt="about-pic2" />
              <img src={pic1} className="chef3" alt="about-pic1" />
            </div>
          </Col>
          <Col md={6} className="pt-5 mt-5 pl-5 mb-5">
            <div className="d-flex" style={{ paddingTop: "80px" }}>
              <span>
                <img src={underln} alt="underline" />
              </span>
              <h2 className="about-text pl-4">Our Chef</h2>
            </div>
            <h3 className="make-text pt-4">Svyatoslav Taushev</h3>
            <p>
              "There live the blind texts. Separated they live in right at the
              coast of the Semantics, a large language ocean. Flows by their
              place and supplies it with the necessary regelialia."
            </p>
            <span>
              <img src={sign} alt="sign" className="mt-4 pb-3" />
            </span>
          </Col>
        </Row>
      </div>


      <TableBook/>
      
    </div>
  );
}
export default Chef;
