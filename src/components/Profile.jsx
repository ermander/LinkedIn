import React, { Component } from "react";
import Footer from "./Footer";
import MainJumbotron from "./MainJumbotron";
import SideBar from "./SideBar";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import Experiences from "./Experiences";
import axios from "axios";

export default class Profile extends Component {
  state = {
    username: this.props.match.params.id,
    experiences: [],
  };
  componentDidMount() {
    this.fetchExperience();
  }
  async fetchExperience() {
    let gets = {
      method: "GET",
      url: `https://striveschool.herokuapp.com/api/profile/${this.state.username}/experiences`,
      headers: {
        Authorization: "Basic " + btoa("user7:3UU5dYFvenRuRP7E"),
      },
    };
    let experiences = await axios(gets);
    this.setState({ experiences: experiences.data });
    console.log(experiences);
  }
  render() {
    return (
      <>
        <NavBar />
        <Container style={{ marginTop: "58px" }}>
          <Row>
            <Col xs={8}>
              <MainJumbotron />
              {this.state.experiences.map((element) => {
                return (
                  <Experiences
                    image='https://www.careeraddict.com/uploads/article/55295/work-experience-note-pinboard.jpg'
                    role={element.role}
                    company={element.company}
                    startDate={element.startDate}
                  />
                );
              })}
            </Col>
            <SideBar />
          </Row>
          <Footer />
        </Container>
      </>
    );
  }
}
