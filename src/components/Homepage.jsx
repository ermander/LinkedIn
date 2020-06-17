import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeProfile from './HomeProfile'
import axios from "axios";

export default class Homepage extends Component {

  state = {
    username: this.props.match.params.id,
    user :[],
    posts:[],
  };
  componentDidMount(){
    this.fetchData()
  }
  async fetchData(){
    let user = {
      method: "GET",
      url: `https://striveschool.herokuapp.com/api/profile/${this.props.match.params.id}`,
      headers: {
        Authorization: "Basic " + btoa("user7:3UU5dYFvenRuRP7E"),
      },
    }
    let posts = {
      method: "GET",
      url: `https://striveschool.herokuapp.com/api/posts`,
      headers: {
        Authorization: "Basic " + btoa("user7:3UU5dYFvenRuRP7E"),
      },
    }
    let User = await axios(user);
    let Posts = await axios(posts)
    this.setState({user:User.data,posts:Posts.data},()=>console.log(this.state.user,this.state.posts))

  }


  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col lg={2}>
            <HomeProfile name={this.state.user.name}/>
          </Col>
          <Col lg={7}>

          </Col>
          <Col lg={3}>

          </Col>
        </Row>
      </Container>
    );
  }
}
