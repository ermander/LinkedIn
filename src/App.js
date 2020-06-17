import React from 'react';
import './App.css';
<<<<<<< Updated upstream


function App() {
  return ()
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile'
import Signin from './components/SignIn'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import MyNetwork from './components/MyNetwork'; 
import ExperienceSubmitionForm from './components/ExperienceSubmitionForm'
import Home from './components/Home'


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/' component={Signin}/>
        <Route path='/profile/:id' component={Profile}/>
        <Route path='/myNetwork' component={MyNetwork}/> 
        <Route path='/home' component = {Home}/>
        <Route exact path='/addExperience' component={ExperienceSubmitionForm} />
      </Switch>
    </Router>
     </>
  )
>>>>>>> Stashed changes
}

export default App;
