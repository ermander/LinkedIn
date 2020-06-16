import React, { Component } from 'react'
import {Navbar, Nav , FormControl , Form,Container,Row} from 'react-bootstrap'
import { GrLinkedin, } from 'react-icons/gr';
import {AiOutlineHome,AiOutlineTeam , AiOutlinePlaySquare} from 'react-icons/ai'
import {RiBriefcaseLine} from 'react-icons/ri'
import {MdMessage} from 'react-icons/md'
import {IoMdNotificationsOutline} from 'react-icons/io'
import photo from '../images/photo.png'
import {BsGrid3X3GapFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
    
     
    render() {
        return (
        <Navbar  className="navbar mt-0 fixed-top " style={{height: "55px"}} variant="dark">
          <Container>              
              <Navbar.Brand href="#home"  ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1200px-Linkedin_icon.svg.png" className="linked"></img> </Navbar.Brand>
              <Form >
                <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width:"250px", height:"33px"}} />
              </Form>
              <Nav className="ml-auto  ">
                <Nav.Link className='navIcon' href="#home"  ><AiOutlineHome  style={{fontSize:"20px"}} /><div style={{fontSize:"13px"}}>Home</div></Nav.Link>
                <Link className='navIcon nav-link' to='/myNetwork'> <AiOutlineTeam style={{fontSize:"20px"}}/><div style={{fontSize:"13px"}}>My Network</div></Link>
                <Nav.Link className='navIcon' href="#jobs"  ><RiBriefcaseLine  style={{fontSize:"20px"}}/><div style={{fontSize:"13px"}}> Jobs</div></Nav.Link>
                <Nav.Link className='navIcon' href="#messaging" ><MdMessage style={{fontSize:"20px"}}/><div style={{fontSize:"13px"}}> Messaging</div></Nav.Link>
                <Nav.Link className='navIcon' href="#notifications"  ><IoMdNotificationsOutline style={{fontSize:"20px"}}/><div style={{fontSize:"13px"}}> Notifications</div></Nav.Link>
                <Nav.Link className='navIcon' href="#profile"  ><img src={photo} style={{borderRadius: "50%", height:"20px" , width:"20px" }}></img><div style={{fontSize:"13px"}} onClick="clickme()" >Me <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                  <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
                  </svg></div></Nav.Link>
                <Nav.Link style={{borderRight:"1px grey solid", height:"59px"}}></Nav.Link>
                <Nav.Link className='navIcon' href="#work" ><BsGrid3X3GapFill style={{fontSize:"20px"}}/><div style={{fontSize:"13px"}}> Work <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                  <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path></svg></div></Nav.Link>
                  <Nav.Link className='navIcon' href="#learning" ><AiOutlinePlaySquare style={{fontSize:"20px"}}/><div style={{fontSize:"13px"}}>Learning</div></Nav.Link>
              </Nav>
          </Container>
        </Navbar>
        )
    }
}