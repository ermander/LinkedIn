import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile'
import Signin from './components/SignIn'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/' component={Signin}/>
        <Route path='/profile/:id' component={Profile}/>
      </Switch>
    </Router>
     </>
  )
}

export default App;
