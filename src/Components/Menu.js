import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import underln from "../images/underln.png";
import "./Menu.css";
import m1 from "../images/m1.png";
import m2 from "../images/m2.png";
import m3 from "../images/m3.png";
import m4 from "../images/m4.png";
import m5 from "../images/m5.png";
import delivery from "../images/delivery.png";
import wline from "../images/wline.png";
import Chef from "./Chef";

function Menu() {
  return (
    <div className="menu-section">
      <div style={{ width: "40%" }} className="pb-4">
        <div className="d-flex pt-5 mt-5">
          <span className="pl-1">
            <img src={underln} alt="underline" />
          </span>
          <h2 className="about-text pl-4">Menu</h2>
        </div>
        <h3 className="make-text pt-4 pb-3">Our Delightful Menu Offers</h3>
      </div>

      <div className="row">
        <div class="col-md-4">
          <Dropdown>
            <Dropdown.Toggle
              variant="dark"
              id="dropdown-basic"
              style={{ padding: "5px 20px", width: "280px" }}
            >
              Meat
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#fish">Fish</Dropdown.Item>
              <Dropdown.Item href="#/bakery">Bakery</Dropdown.Item>
              <Dropdown.Item href="#/drinks">Drinks</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="col-md-7">
          <div className="d-flex flex-row pt-1">
            <span>
              <img
                src={m1}
                alt="menu1"
                style={{ width: "220px", height: "130px" }}
              ></img>
            </span>
            <div className="ml-4 pt-4">
              <h3 className=" menu-name">Italian Mushroom</h3>
              <span className="menu-product">Mushroom / Garlic / Veggies</span>
            </div>

            <div className="mt-4">
              <h2 className="price">$9</h2>
            </div>
          </div>

          <div className="d-flex flex-row pt-4">
            <span>
              <img
                src={m2}
                alt="menu1"
                style={{ width: "220px", height: "130px" }}
              ></img>
            </span>
            <div className="ml-4 pt-4">
              <h3 className=" menu-name">Fried Potatoe Garlic</h3>
              <span className="menu-product">Potatoes / Olive Oil / Garlic</span>
            </div>

            <div className="mt-4">
              <h2 className="price">$5</h2>
            </div>
          </div>

          <div className="d-flex flex-row pt-4">
            <span>
              <img
                src={m3}
                alt="menu1"
                style={{ width: "220px", height: "130px" }}
              ></img>
            </span>
            <div className="ml-4 pt-4">
              <h3 className=" menu-name">Tuna Roast Source</h3>
              <span className="menu-product">Tuna / Potatoes / Rice</span>
            </div>

            <div className="mt-4">
              <h2 className="price">$12</h2>
            </div>
          </div>

          <div className="d-flex flex-row pt-4">
            <span>
              <img
                src={m4}
                alt="menu1"
                style={{ width: "220px", height: "130px" }}
              ></img>
            </span>
            <div className="ml-4 pt-4">
              <h3 className=" menu-name">Roast Pork</h3>
              <span className="menu-product">Pork / Veggies / Shoyu</span>
            </div>

            <div className="mt-4 ml-5">
              <h2 className="price">$8</h2>
            </div>
          </div>

          <div className="d-flex flex-row pt-4">
            <span>
              <img
                src={m5}
                alt="menu1"
                style={{ width: "220px", height: "130px" }}
              ></img>
            </span>
            <div className="ml-4 pt-4">
              <h3 className=" menu-name">Fried Chicken</h3>
              <span className="menu-product">Chicken / Olive Oil / Salt</span>
            </div>

            <div className="mt-4 ml-5">
              <h2 className="price">$3</h2>
            </div>
          </div>

          <div>
            <button className="fullMenu mt-5 mb-5">Full Menu</button>
          </div>
        </div>
      </div>
     
     {/* contact */}
      <div className="row contact-one pt-5 pb-5">
        <div className="col-md-6 bg-secondary">
          <div className="ml-5">
            <div className="d-flex pt-5 mt-5 pl-5">
              <span>
                <img src={wline} alt="underline" style={{ color: "white" }} />
              </span>
              <h2 className="about-text  text-light pl-4">Delivery</h2>
            </div>
            <h3 className="make-text pt-4 text-light pl-5">Order Food</h3>

            <Button className="text-light bg-secondary aboutus ml-5 mt-4 mb-3">
              CONTACT US
            </Button>
          </div>
        </div>

        <div
          className="col-md-6"
          style={{ backgroundImage: `url(${delivery})`, height: "384px" }}
        ></div>
      </div>
       <br></br>
      <Chef/>
    </div>
  );
}
export default Menu;
