import React from "react";
import { UncontrolledCollapse, Button } from "reactstrap";
import { Row, Col } from "react-bootstrap";
import { FaHashtag } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import {IconContext} from 'react-icons';
import {AiOutlineDown} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { GoTriangleLeft } from "react-icons/go";
import "./style/style.css"


const Leftsidebar = () => (
  <div className="leftSidebar  mt-3 sticky-top home">
    <div>
      <Row className="mr-auto d-flex flex-row ">
        <Col xs={9} className="pl-4 mt-2 left" >
          Recent
        </Col>{" "}
        <Col xs={3}>
          {" "}
          <p
            id="toggler"
            className="mt-0 tog1"
            text="hello"
            >
            <IconContext.Provider value={{className:'icons'}}>
              <AiOutlineDown/>
            </IconContext.Provider>
          </p>
        </Col>
      </Row>
      <UncontrolledCollapse
        toggler="#toggler"
        className="al"
             >
        <p  >
          <FaHashtag />
          REACT
        </p>
        <p >
          <FaHashtag />
          JAVASCRIPT
        </p>
      </UncontrolledCollapse>
    </div>
    <div className="">
      <Row className="mr-auto d-flex flex-row">
        <Col xs={9} className="pl-4 pt-2 left" >
          Groups
        </Col>{" "}
        <Col xs={3}>
          {" "}
          <div
            className="pt-o d-flex tog2"
            id="toggler1">
            <IconContext.Provider value={{className:'icons'}}>
              <p><AiOutlineDown/></p>
            </IconContext.Provider>
          </div>
        </Col>
      </Row>
      <UncontrolledCollapse
        toggler="#toggler1"
       className="al"
      >
        <p style={{ fontSize: "15px" }}>
          <GrGroup className="mr-2" />
          Join Groups
        </p>
      </UncontrolledCollapse>
    </div>
    <div className="">
      <Row className="mr-auto d-flex flex-row">
        <Col xs={9} className="pl-4 left" >
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
          className="pl-2 pt-2 border-bottom lin">
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
