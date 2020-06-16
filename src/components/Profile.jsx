import React from 'react';
import Footer from './Footer'
import MainJumbotron from './MainJumbotron'
import SideBar from './SideBar';
import {Container,Row,Col}from 'react-bootstrap'
import NavBar from './NavBar'

function Profile() {
  return (
    <>
    <NavBar/>
    <Container style={{marginTop:'58px'}}>
      <Row>
        <Col xs={8}>
          <MainJumbotron/>
        </Col>
        <SideBar />
      </Row>
     <Footer />
    </Container>
    </>
  )
}

export default Profile;
