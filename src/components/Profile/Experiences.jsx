import React, { Component } from 'react'
import {FaPlus} from 'react-icons/fa'
import {RiPencilLine} from 'react-icons/ri'
import {IconContext} from 'react-icons'
import { Link } from 'react-router-dom'
import {Modal,Form,Button} from 'react-bootstrap'

class Experiences extends Component {
  state ={
    show : false
  }
  render() {
    return (
      <>
       {/* <div id='experiences'> */}
        {/* <div id='header'>
          <p>Experience</p>
          <Link to='/addExperience'><FaPlus/></Link>
        </div> */}
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
          {(this.props.user === this.props.currentUser) ? 
        <IconContext.Provider value={{color : "#0073B1",marginTop:'5px'}}>
        <div style={{cursor:'pointer'}}        
        onClick={() => {this.setState({ show: !this.state.show } );}}
        ><RiPencilLine/></div>

                <Modal
                  show={this.state.show}
                  onHide={() => this.setState({ show: false })}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Edit picture</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group>
                        <Form.File
                          label="Example file input"
                          onChange={
                            (event) => {
                                console.log(event.target.files[0]);
                                const formData = new FormData();
                                formData.append("experience", event.target.files[0]);
                                console.log(formData);
                                fetch( `https://striveschool.herokuapp.com/api/profile/${this.props.user}/experiences/${this.props.id}/picture`,
                                  {
                                    method: "POST",
                                    body: formData,
                                    headers: {
                                    Authorization: "Basic " + btoa("user7:3UU5dYFvenRuRP7E")}
                                  }
                                    ).then(element=> console.log(element.json()))
                              }}                         
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="primary"
                          onClick={(e) => this.setState({ show: false })}
                        >
                          Save Changes
                        </Button>
                      </Modal.Footer>
                </Modal>
        </IconContext.Provider>  
       : null }
        </div>
        <hr style={{margin:'0'}}></hr>
     {/* </div> */}
      </>
    )
  }
}

export default Experiences
