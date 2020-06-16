import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile'
import Signin from './components/SignIn'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import MyNetwork from './components/MyNetwork'; 
import ExperienceSubmitionForm from './components/ExperienceSubmitionForm'


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/' component={Signin}/>
        <Route path='/profile/:id' component={Profile}/>
        <Route path='/myNetwork' component={MyNetwork}/>
        <Route exact path='/addExperience' component={ExperienceSubmitionForm} />
      </Switch>
    </Router>
     </>
  )
}

export default App;
