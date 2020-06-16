import React, { Component } from 'react'
import {FaPlus,FaPencilAlt} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import { Link } from 'react-router-dom'

class Experiences extends Component {
  render() {
    return (
      <div id='experiences'>
        <div id='header'>
          <p>Experience</p>
          <Link to='/addExperience'><FaPlus/></Link>
        </div>
        <div id='content'>
          <div id='experience'>
            <div >
              <img src={this.props.image} alt=""/>
            </div>
            <div>
              <p>{this.props.role}</p>
              <p>{this.props.company}</p>
              <p>{this.props.startDate}</p>
            </div>
          </div>
          <IconContext.Provider value={{color : "#0073B1",marginTop:'5px'}}>
            <div><FaPencilAlt/></div>
          </IconContext.Provider>
        </div>
        <hr style={{margin:'0'}}></hr>
      </div>
    )
  }
}

export default Experiences
