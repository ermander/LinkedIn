import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import MainJumbotron from './components/MainJumbotron'
import {Container,Row,Col}from 'react-bootstrap'

function App() {
  return (
    <>
    <Container>
      <Row>
        <Col xs={8}>
          <MainJumbotron/>
        </Col>
      </Row>
     <Footer />
    </Container>
    </>
  )
}

export default App;
