import React, { Component } from 'react'
import {Jumbotron,Container,Button,Dropdown,DropdownButton} from 'react-bootstrap'
import '../styles/MainJumbotron.css'
import {IconContext} from 'react-icons'
import {FaCamera,FaPencilAlt,FaEye} from 'react-icons/fa'
import {RiPencilLine} from 'react-icons/ri'
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom'
export class MainJumbotron extends Component {
  state={
    data :[],
    username : this.props.username
  }
  componentDidMount =async()=>{
    this.fetchData()
  }

  componentDidUpdate(){

    if(this.state.username !== this.props.username){
      this.setState({username:this.props.username},()=>{this.fetchData() })
    }
  }
  async fetchData(){
    let response = await fetch(`https://striveschool.herokuapp.com/api/profile/${this.state.username}`,{
      method :'GET',
      headers : new Headers({
        'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU=',
        'Content-type': "application/json"
      })
    })
    let parsedJson = await response.json()
    this.setState({data : parsedJson})
  }
  render() {
    return (
      <>
      <Jumbotron>
        <div className='bgImage'>
          <img src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg" alt=""/>
          <IconContext.Provider value={{className : "jumbotronCamera"}}>
            <div><FaCamera/></div>
          </IconContext.Provider>
        </div>
        <div id='profileSection'>
          <div >
            <img src="https://capenetworks.com/static/images/testimonials/user-icon.svg" alt=""/>
          </div>
          <div id='profileButtons'>
            <DropdownButton id="dropdown-basic-button" title="Add profile section">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <Button variant="outline-info">More..</Button>
            <IconContext.Provider value={{className : "editIcon"}}>
              <div><RiPencilLine/></div>
            </IconContext.Provider>
          </div>
        </div>
        <div id='profileInfo'>
           <div id='info' >
              <div id='personalInfo'>
                <p>{this.state.data.name + " " + this.state.data.surname}</p>
                <p>{this.state.data.title}</p>
                <p>{this.state.data.area} -<span> 51 connections </span>-<span> Contact info </span></p>
              </div>
              <p>Leibniz Universitat Hannover</p>
           </div>
        </div>
        <div id='present'>
          <div>
            <p>Open to job opportunities</p>
            <p>{this.state.data.bio}</p>
            <p>See all details</p>
          </div>
          <IconContext.Provider value={{className : "editIcon"}}>
            <div><RiPencilLine/></div>
          </IconContext.Provider>
        </div>
        <div id='presentBelowSection'>
          <IconContext.Provider  value={{className : "eyeIcon"}} >
                <div><FaEye/></div>
          </IconContext.Provider>
          <p>All LinkedIn members</p>
        </div>
      </Jumbotron>
      <div id='about'>
          <div>
            <p style={{fontSize:'24px'}}>About</p>
            <p>working on Computational methods in Engineering</p>
          </div>
          <IconContext.Provider value={{className : "editIcon"}}>
            <div><RiPencilLine/></div>
          </IconContext.Provider>
      </div>
      </>
    )
  }
}

export default withRouter (MainJumbotron)
