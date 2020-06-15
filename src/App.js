import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar';

import { Container , Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <SideBar />
        </Row>
      </Container>
    </div>
  );
}

export default App;
