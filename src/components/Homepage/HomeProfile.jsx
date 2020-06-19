import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class homeprofile extends Component {
  render() {
    return (
      <div className="leftSidebarShadow">
        <div className="home back">
          <img
            className="img-fluid"
            src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"
            alt=""
          />
        </div>
        <img
          className="img-fluid rounded-circle first"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
        />
        <div className=" home p-2 text-center" style={{ borderBottom: "0px" }}>
          <p className="p1">Welcome, {this.props.name}</p>
          <a className="a1">Update your profile</a>
        </div>
        <div className="p-2  home" style={{ borderBottom: "0px" }}>
          <p className="p2">Who viewed your profile </p>
          <p className="p2">Connections </p>
          <p className="p3">Grow your Network</p>
        </div>
        <div className="p-2  home" style={{ borderBottom: "0px" }}>
          <p className="p3">See all premium features</p>
        </div>
        <div className="p-2 home">
          <p className="p3">Saved Items</p>
        </div>
      </div>
    );
  }
}
