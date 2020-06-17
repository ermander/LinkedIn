import React from "react";
import { UncontrolledCollapse, Button } from "reactstrap";
import { Row, Col } from "react-bootstrap";
import { FaHashtag } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoTriangleLeft } from "react-icons/go";


const Leftsidebar = () => (
  <div className="  mt-3 sticky-top" style={{border:"solid 2px grey"}}>
    <div>
      <Row className="mr-auto d-flex flex-row ">
        <Col xs={9} className="pl-4 mt-2" style={{ textAlign: "left" }}>
          Recent
        </Col>{" "}
        <Col xs={3}>
          {" "}
          <p
            id="toggler"
            className="mt-0"
            text="hello"
            style={{
              marginTop: "0.5rem",
              fontSize: "1.5rem",
              color: "black",
              border: "none",
            }}
          >
            v
          </p>
        </Col>
      </Row>
      <UncontrolledCollapse
        toggler="#toggler"
        style={{ marginLeft: "5px", textAlign: "left" }}
      >
        <p style={{ fontSize: "12px" }}>
          <FaHashtag />
          REACT
        </p>
        <p style={{ fontSize: "12px" }}>
          <FaHashtag />
          JAVASCRIPT
        </p>
      </UncontrolledCollapse>
    </div>
    <div className="">
      <Row className="mr-auto d-flex flex-row">
        <Col xs={9} className="pl-4 pt-2" style={{ textAlign: "left" }}>
          Groups
        </Col>{" "}
        <Col xs={3}>
          {" "}
          <p

            className="pt-o d-flex"
            id="toggler1"
            style={{
              fontSize: "1.5rem",
              color: "black",
              border: "none",
            }}
          >
            v
          </p>
        </Col>
      </Row>
      <UncontrolledCollapse
        toggler="#toggler1"
        style={{ marginLeft: "5px", textAlign: "left" }}
      >
        <p style={{ fontSize: "15px" }}>
          <GrGroup className="mr-2" />
          Join Groups
        </p>
      </UncontrolledCollapse>
    </div>
    <div className="">
      <Row className="mr-auto d-flex flex-row">
        <Col xs={9} className="pl-4" style={{ textAlign: "left" }}>
          Events
        </Col>{" "}
        <Col xs={3}>
          <FaPlus />{" "}
        </Col>
      </Row>
    </div>

    <div>
      <Link to="/">
        <div
          className="pl-2 pt-2 border-bottom"
          style={{ textAlign: "left", fontSize: "13px" }}
        >
          Followed Hashtags
        </div>
      </Link>
    </div>
    <div className="pt-2">
      <Col className="pl-4 pb-2" style={{ textAlign: "center" }}>
        Events
      </Col>
    </div>
  </div>
);

export default Leftsidebar;
