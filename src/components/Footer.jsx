import React, { Component } from "react";
import { Container, Row, Col,ListGroup } from "react-bootstrap";

export default class footer extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={2}>
            <img
              className="img-fluid"
              src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png"
              alt=""
            />
            <ListGroup>
              <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={2}></Col>
          <Col lg={2}></Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    );
  }
}
