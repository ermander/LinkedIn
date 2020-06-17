import React, { Component } from "react";
import Footer from "./Footer";
import MainJumbotron from "./MainJumbotron";
import SideBar from "./SideBar";
import { Container, Row, Col,Dropdown } from "react-bootstrap";
import NavBar from "./NavBar";
import Experiences from "./Experiences";
import axios from "axios";
import {Link} from 'react-router-dom';
import {FaPlus} from 'react-icons/fa';
import NewsFeedRightSidebar from './NewsFeedRightSidebar';

class Profile extends Component {
  state = {
    username: this.props.match.params.id,
    users :[],
    experiences: [],
    show :false,
    searchKey:'',
    loading : true
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
    this.setState({ experiences: experiences.data, users:usersData.data, loading:false });
    console.log(experiences,usersData.data);
  }
  render() {
    return (
      <>
        <NavBar
          onsearch={(e) => {
            this.setState({searchKey:e.target.value.toLowerCase()})
            console.log(e.target.value)
            if(e.target.value.length >1) {
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
        {this.state.loading ? 
        <div id='loadingAnimation'><img src="https://i.stack.imgur.com/h6viz.gif" alt=""/></div> : 
        <Container style={{ marginTop: "58px" }}>
          <Row>
            <Col xs={8}>
              <MainJumbotron username={this.props.match.params.id}/>
              <div id='experiences'>
                <div id='header'>
                  <p>Experience</p>
                  <Link to='/addExperience'><FaPlus/></Link>
                </div>
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
              </div>
            </Col>
            <SideBar />
          </Row>
          <Footer />
          <NewsFeedRightSidebar />
        </Container>
  }
      </>
    );
  }
}

export default Profile;
