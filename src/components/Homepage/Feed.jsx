import React, { Component } from "react";
import { Container, Modal, Button } from "react-bootstrap";
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
        <div id="writePost">
          <div onClick={this.props.postButton}>
            <IconContext.Provider value={{ className: "writePostIcons" }}>
              <a>
                <FiEdit />
              </a>
            </IconContext.Provider>
            <a style={{ fontSize: "20px", paddingTop: "20px" }}>Start a Post</a>
          </div>
          <div id="icons">
            <IconContext.Provider value={{ className: "writePostIcons" }}>
              <div>
                <GrCamera />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "writePostIcons" }}>
              <div>
                <FiVideo />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "writePostIcons" }}>
              <div>
                <AiOutlineFileText />
              </div>
            </IconContext.Provider>
          </div>
        </div>
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
              />
            );
          })
        }
      </Container>
    );
  }
}

export default Feed;
