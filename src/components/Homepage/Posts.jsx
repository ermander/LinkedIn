import React, { Component } from "react";
import { Container, Modal, Button,Form,Dropdown } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { AiTwotoneLike } from "react-icons/ai";
import { IconContext } from "react-icons";
import { MdComment } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import '../../styles/HomePage.css'
import {Link} from 'react-router-dom'
export class Posts extends Component {
  state = { show: false,image: 'https://static.toiimg.com/thumb/msid-44945488,width-748,height-499,resizemode=4,imgsize-291921/Nice-in-pictures.jpg', };
  
  render() {
    return (
      <Container
        fluid
        style={{ minHeight: "600px" }}
        className="mt-3 home"
      >
        <div id="postHeader">
          <div>
            <img src="" alt="" />
            <div>
              <p><Link to={'/profile/'+this.props.username}>{this.props.name}</Link></p>
              <p style={{ fontSize: "12px", color: "grey" }}>{this.props.date}</p>
              <p style={{ fontSize: "12px", color: "grey" }}>
                {this.props.bio}
              </p>
            </div>
          </div>
          <div>
            {this.props.user === this.props.name ? (
              <>
                <Dropdown>
                    <Dropdown.Toggle>
                    <BsThreeDots/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => {
                    this.setState({ show: !this.state.show },
                    );
                  }}
                  >Edit Post</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Modal
                  show={this.state.show}
                  onHide={() => this.setState({ show: false })}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group>
                        <Form.File
                          label="Example file input"
                          onChange={
                            (event) => {
                                console.log(event.target.files[0]);
                                const formData = new FormData();
                                formData.append("post", event.target.files[0]);
                                console.log(formData);
                                fetch( `https://striveschool.herokuapp.com/api/posts/${this.props.id}`,
                                  {
                                    method: "POST",
                                    body: formData,
                                    headers: {
                                    Authorization: "Basic " + btoa("user7:3UU5dYFvenRuRP7E")}
                                  }
                                    ).then(element=> console.log(element.json()))
                              }}
                          
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="primary"
                      onClick={(e) => this.setState({ show: false })}
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            ) : null}
          </div>
        </div>
        <div id="postBody">
          <p>
            {this.props.text} 
          </p>
          <img
            className="img-fluid"
            src={this.props.image==='none' || !this.props.image ? this.state.image : this.props.image}
            alt=""
          />
        </div>
        <div id="postFooter">
          <div style={{ display: "flex", padding: "10px", fontSize: "12px" }}>
            <IconContext.Provider value={{ padding: "10px", color: "#007EC2" }}>
              <p>
                <AiTwotoneLike />
              </p>
            </IconContext.Provider>
            <p style={{ padding: "2px 10px 0 5px" }}>21 .</p>
            <p style={{ padding: "2px 0" }}>1 Comment</p>
          </div>
          <hr style={{ padding: "0", margin: "0" }}></hr>
          <div>
            <div style={{ display: "flex" }}>
              <IconContext.Provider value={{}}>
                <p>
                  <AiTwotoneLike />
                </p>
              </IconContext.Provider>
              <p>Like</p>
            </div>
            <div style={{ display: "flex" }}>
              <IconContext.Provider value={{}}>
                <p>
                  <MdComment />
                </p>
              </IconContext.Provider>
              <p>Comment</p>
            </div>
            <div style={{ display: "flex" }}>
              <IconContext.Provider value={{}}>
                <p>
                  <FaShare />
                </p>
              </IconContext.Provider>
              <p>Share</p>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Posts;
