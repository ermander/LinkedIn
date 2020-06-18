import React, { Component } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FiEdit, FiVideo } from "react-icons/fi";
import { GrCamera } from "react-icons/gr";
import { IconContext } from "react-icons";
import { AiOutlineFileText } from "react-icons/ai";
import Posts from "./Posts";
import '../../styles/HomePage.css'
// import UploadPic from '../UploadPic'

export class Feed extends Component {
  state = {
    posts: [],
    username: [],
    loading : true
  };
  componentDidMount = async () => {
    let response = await fetch(
      "https://striveschool.herokuapp.com/api/posts/",
      {
        method: "GET",
        headers: new Headers({
          Authorization: "Basic " + btoa("user7:3UU5dYFvenRuRP7E"),
          "Content-type": "application/json",
        }),
      }
    );
    let user = await fetch(
      "https://striveschool.herokuapp.com/api/profile/me",
      {
        method: "GET",
        headers: new Headers({
          Authorization: "Basic " + btoa("user7:3UU5dYFvenRuRP7E"),
          "Content-type": "application/json",
        }),
      }
    );
    let userName = await user.json();
    let posts = await response.json();
    this.setState({ posts:posts.reverse(), username: userName,loading:false }, () =>
      console.log(this.state.username)
    );
    console.log(this.state.posts);
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col id="writePost" className='px-0'>
              <div onClick={this.props.postButton} className='col col-6 w-100 d-flex align-items-center' style={{margin: '0px'}}>
                  <a>
                    <FiEdit style={{fontSize: '2rem'}}/>
                  </a>
                <a style={{ fontSize: "20px"}}>Start a Post</a>
              </div>
            <div id="icons" className='col col-6 px-0'>

                <div className='col col-4 d-flex justify-content-center align-items-center'>
                  <GrCamera style={{fontSize: '2rem'}}/>
                </div>

                <div className='col col-4 d-flex justify-content-center align-items-center'>
                  <FiVideo style={{fontSize: '2rem'}}/>
                </div>

                <div className='col col-4 d-flex justify-content-center align-items-center'>
                  <AiOutlineFileText style={{fontSize: '2rem'}}/>
                </div>
            </div>
          </Col>
        <div id="writePostFooter">
          <p>
            <a href="">Write an article</a> on LinkedIn
          </p>
        </div>
        <hr></hr>
        {this.state.loading ? <div id='loadingAnimation'><img src="https://i.stack.imgur.com/h6viz.gif" alt=""/></div>
         :
        this.state.posts.map((element , i) => {
            return (
              <Posts
                user={this.state.username.name}
                name={element.user.name}
                id={element._id}
                image={element.image}
                bio={element.user.bio}
                text={element.text}
                key={i}
                date ={element.updatedAt.slice(0,10)}
              />
            );
          })
        }
        </Row>
      </Container>
    );
  }
}

export default Feed;
