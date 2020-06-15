import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import MainJumbotron from './components/MainJumbotron'
import SideBar from './components/SideBar';
import {Container,Row,Col}from 'react-bootstrap'
import NavBar from './components/NavBar'

function App() {
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

export default App;
