import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";



export default class homeprofile extends Component {


    

render(){
    return(
<div className=" border-secondary" style={{border:"solid 2px grey"}}>
              <div
                className="border-bottom border-secondary"
                style={{
                  height: "3em",
                  background:
                    "linear-gradient(to bottom,rgba(0,0,0,.75),rgba(0,0,0,0))",
                }}
              >
                <img  className="img-fluid"src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg" alt=""/>
              </div>
              <img
                style={{
                  position: "absolute",
                  maxWidth: "3em",
                  left: "39%",
                  top: "1.5em",
                }}
                className="img-fluid rounded-circle"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
              />
              <div className="border-bottom border-secondary p-2 text-center">
                <p
                  style={{
                    fontSize: "0.9em",
                    marginTop: "2em",
                    marginBottom: "0",
                  }}
                >
                  Welcome, {this.props.name}
                </p>
                <a style={{ fontSize: "0.6em",color:'blue' }}>Update your profile</a>
              </div>
              <div className="p-2 border-bottom border-secondary">
                <p style={{ fontSize: "0.6em", margin: "0",opacity:'0.7' }}>
                  Who viewed your profile{" "}
                </p>
                <p style={{ fontSize: "0.6em", margin: "0",opacity:'0.7'  }}>Connections </p>
                <p style={{ fontSize: "0.6em", margin: "0" }}>
                  Grow your Network
                </p>
              </div>
              <div className="p-2 border-bottom border-secondary">
                <p style={{ fontSize: "0.6em", margin: "0" }}>
                  See all premium features
                </p>
              </div>
              <div className="p-2">
                <p style={{ fontSize: "0.6em", margin: "0" }}>Saved Items</p>
              </div>
            </div>)
            }
        }