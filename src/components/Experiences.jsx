import React, { Component } from 'react'
import {FaPlus,FaPencilAlt} from 'react-icons/fa'
import {IconContext} from 'react-icons'

class Experiences extends Component {
  render() {
    return (
      <div id='experiences'>
        <div id='header'>
          <p>Experience</p>
          <a><FaPlus/></a>
        </div>
        <div id='content'>
          <div id='experience'>
            <div >
              <img src="https://strive.school/hosted/images/21/472d398ad64694996ab8189cfc78a7/LOGO.jpg" alt=""/>
            </div>
            <div>
              <p>Training Developer</p>
              <p>Strive School </p>
              <p>Apr 2019 - Jul 2019 . 2 mos</p>
            </div>
          </div>
          <IconContext.Provider value={{color : "#0073B1",marginTop:'5px'}}>
            <div><FaPencilAlt/></div>
          </IconContext.Provider>
        </div>
        <hr style={{margin:'0'}}></hr>

        <div id='content'>
          <div id='experience'>
            <div >
              <img src="https://strive.school/hosted/images/21/472d398ad64694996ab8189cfc78a7/LOGO.jpg" alt=""/>
            </div>
            <div>
              <p>Training Developer</p>
              <p>Strive School </p>
              <p>Apr 2019 - Jul 2019 . 2 mos</p>
            </div>
          </div>
          <IconContext.Provider value={{color : "#0073B1",marginTop:'5px'}}>
            <div><FaPencilAlt/></div>
          </IconContext.Provider>
        </div>
      </div>
    )
  }
}

export default Experiences
