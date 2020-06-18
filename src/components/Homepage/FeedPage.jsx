import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeProfile from "./HomeProfile";
import Modal from "./Modal";
import NavBar from '../NavBar'
import axios from "axios";
import Feed from "./Feed";
import NewsFeedRightSidebar from "./NewsFeedRightSidebar";
import Leftsidebar from "./LeftSidebar";
import '../../styles/HomePage.css'
export default class Homepage extends Component {
  state = {
    showModal: false,
    user: [],
    posts: [],
    postsText :'',
    inputFile:null
  };
  componentDidMount() {
    this.fetchData();
  }

  async postData(){
    let data1 ={text:this.state.postsText}
    let postData = {
      method: "POST",
      url: `https://striveschool.herokuapp.com/api/posts/`,
      headers: {
        Authorization: "Basic " + btoa("user7:3UU5dYFvenRuRP7E"),
      },
      data:data1
    };
    let data = await axios(postData)
    let inputFile= {
      method: "POST",
      url: await `https://striveschool.herokuapp.com/api/posts/${data.data._id}`,
      headers: {
        Authorization: "Basic " + btoa("user7:3UU5dYFvenRuRP7E"),
      },
      data:this.state.inputFile
    };
    let input = await axios(inputFile)

    
    alert('Post has been posted')

  }

  async fetchData() {
    let user = {
      method: "GET",
      url: `https://striveschool.herokuapp.com/api/profile/${this.props.match.params.id}`,
      headers: {
        Authorization: "Basic " + btoa("user7:3UU5dYFvenRuRP7E"),
      },
    };
    let posts = {
      method: "GET",
      url: `https://striveschool.herokuapp.com/api/posts`,
      headers: {
        Authorization: "Basic " + btoa("user7:3UU5dYFvenRuRP7E"),
      },
    };
    let User = await axios(user);
    let Posts = await axios(posts);
    this.setState({ user: User.data, posts: Posts.data }, () =>
      console.log(this.state.user, this.state.posts)
    );
  }

  render() {
    return (
      <>
      <NavBar />
      <Container className="mt-5 pt-5">
        <Row>
          <Col lg={3}>
            <HomeProfile name={this.state.user.name} />
            <Leftsidebar />
          </Col>
          <Col lg={6} style={{paddingLeft: '0px'}}>
            <Feed
              postButton={() => {
                this.setState({ showModal: true });
              }}
            />
            <Modal
            
            onchange={(e)=>this.setState({postsText:e.target.value},console.log(this.state.postsText))}
              name={this.state.user.name}
              handleClose={() => {
                this.setState({ showModal: false })
                this.postData()
              }}
              show={this.state.showModal}
              file={(event) => {
                console.log(event.target.files[0]);
                const formData = new FormData();
                formData.append("post", event.target.files[0]);
                this.setState({inputFile:formData})}}
            />
          </Col>
          <Col lg={3} style={{paddingLeft: '0px'}}>
            <NewsFeedRightSidebar />
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}
