import React, { Component } from "react";
import Footer from "./Footer";
import MainJumbotron from "./MainJumbotron";
import SideBar from "./SideBar";
import { Container, Row, Col,Dropdown } from "react-bootstrap";
import NavBar from "./NavBar";
import Experiences from "./Experiences";
import axios from "axios";

export default class Profile extends Component {
  state = {
    username: this.props.match.params.id,
    users :[],
    experiences: [],
    show :false,
    searchKey:'',
  };
  componentDidMount() {
    this.fetchExperience();
  }
  componentDidUpdate = () => {
    if(this.props.match.params.id !== this.state.username){
      console.log('updated');
      this.setState({username: this.props.match.params.id}, async () => {
        await this.fetchExperience()
        console.log(this.state)
      })
    }
  }
  
  async fetchExperience() {
    let experience = {
      method: "GET",
      url: `https://striveschool.herokuapp.com/api/profile/${this.state.username}/experiences`,
      headers: {
        Authorization: "Basic " + btoa("user7:3UU5dYFvenRuRP7E"),
      },
    };
    let users = {
      method: "GET",
      url: `https://striveschool.herokuapp.com/api/profile/`,
      headers: {
        Authorization: "Basic " + btoa("user7:3UU5dYFvenRuRP7E"),
      },
    };
    let experiences = await axios(experience);
    let usersData = await axios(users)
    this.setState({ experiences: experiences.data, users:usersData.data });
    console.log(experiences,usersData.data);
  }
  render() {
    return (
      <>
        <NavBar 
          onsearch={(e) => {
            this.setState({searchKey:e.target.value.toLowerCase()})
            console.log(e.target.value)
            if(e.target.value.length >2) {
              this.setState({show:true})
            }else {this.setState({show:false})}}
          }
          show ={this.state.show}
          users ={this.state.users.map((element,index) => {

              if(element.name.toLowerCase().includes(this.state.searchKey)){
              return (
                <Dropdown.Item 
                key={index}
                onSelect={() => this.props.history.push(`/profile/${element.username}`)}
                eventKey={index}>{element.name}</Dropdown.Item>
              )}
          })}
        />
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
                    startDate={element.startDate.slice(0,10)}
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
