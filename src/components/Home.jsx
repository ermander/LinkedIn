import React, { Component } from 'react'
import { Container,Row,Col, } from 'react-bootstrap'
import NavBar from './NavBar'
import Leftsidebar from './leftsidebar'
export default class Home extends Component {
    render() {
        return (
            <>
<NavBar/>
<Container>
        
        <Row style={{textAlign:"center", marginTop:"70px"}} >
<Col xs={2} >

<Leftsidebar style={{width:"100%"}}/>
    
</Col>
<Col xs={7}>
    hello
</Col>
<Col xs={3} style={{outline:"solid red 1px"}}>
    hello
    
    </Col> 

        </Row>


</Container>


        
</>
        )
    }
}
