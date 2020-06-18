import React from 'react';
import { Col , Row , Button , Image, Container } from 'react-bootstrap';
import { GoInfo , GoPlus } from 'react-icons/go';
import { BsChevronCompactDown } from 'react-icons/bs';


class NewsFeedRightSidebar extends React.Component {
    render(){
        return(
            <Container className="sticky-top">
                <Row>
                    <Col className='col-12' style={{border: '2px solid grey'}}>
                            <div className='d-flex justify-content-between align-items-center my-3'>
                                <span style={{fontSize: '16px'}}> Add to your feedback </span> <GoInfo />
                            </div>
                            <Row>
                                <Col className='d-flex mb-3 align-items-center'>
                                    <Image src='https://capenetworks.com/static/images/testimonials/user-icon.svg' style={{width: 57.5 + "px", height: 57.5 + "px", borderRadius: 30 + 'px'}} alt="User's picture"/>
                                    <div className='ml-1'>
                                        <span>#JavaScript</span>
                                    </div>
                                    <Button variant="outline" className='d-flex justify-content-center align-items-center' style={{height: 50 + '%', marginLeft: 'auto', fontSize: 14 + 'px', fontWeight: 700, padding: "6px 8px", borderRadius: '2px', borderColor: '#0073b1', color: '#0073b1'}}><GoPlus />Follow</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex mb-3 align-items-center'>
                                    <Image src='https://capenetworks.com/static/images/testimonials/user-icon.svg' style={{width: 57.5 + "px", height: 57.5 + "px", borderRadius: 30 + 'px'}} alt="User's picture"/>
                                    <div className='ml-1'>
                                        <span>#programing</span>
                                    </div>
                                    <Button variant="outline" className='d-flex justify-content-center align-items-center' style={{height: 50 + '%', marginLeft: 'auto', fontSize: 14 + 'px', fontWeight: 700, padding: "6px 8px", borderRadius: '2px', borderColor: '#0073b1', color: '#0073b1'}}><GoPlus />Follow</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex mb-3 align-items-center'>
                                    <Image src='https://capenetworks.com/static/images/testimonials/user-icon.svg' style={{width: 57.5 + "px", height: 57.5 + "px", borderRadius: 30 + 'px'}} alt="User's picture"/>
                                    <div className='ml-1'>
                                        <span>Richard Branson</span>
                                    </div>
                                    <Button variant="outline" className='d-flex justify-content-center align-items-center' style={{height: 50 + '%', marginLeft: 'auto', fontSize: 14 + 'px', fontWeight: 700, padding: "6px 8px", borderRadius: '2px', borderColor: '#0073b1', color: '#0073b1'}}><GoPlus />Follow</Button>
                                </Col>
                            </Row>
                        <span style={{fontSize: '14px', color: "#0073b1"}}>View all recommendations</span>
                    </Col>
                    {/* //#DADDDF */}
                    <Col className='col-12 mt-2 ' style={{padding: '0px', border: '2px solid grey'}}>
                        <div className='banerContainer'>
                            <Image src='https://via.placeholder.com/300' style={{width: 100 + "%"}}/>
                        </div>
                    </Col>

                    <Col className='col-12 mt-2 mb-3 ' style={{border: '2px solid grey'}}>
                            <div className='d-flex justify-content-between align-items-center my-3'>
                                <span style={{fontSize: '16px'}}> LinkedIn Learning </span> <GoInfo />
                            </div>
                            <Row>
                                <Col className='d-flex mb-3 align-items-center'>
                                    <Image src='https://via.placeholder.com/100x56' style={{width: 35 + "%"}} alt="User's picture"/>
                                    <div className='ml-1'>
                                        <span style={{fontSize: '14px', fontWeight: 700}}>Video title</span>
                                    </div>
                                </Col>
                            </Row>
                        <span style={{fontSize: '11px'}}>What field is video from</span>
                    </Col>
                    <Col className='col-12 newsFeedRightSidebar pt-2 '  style={{borderTop: '2px solid grey'}}>
                        <ul>
                            <li className='d-flex justify-content-around'>
                                <li>About</li>
                                <li>Accessibility</li>
                                <li>Help</li>
                            </li>
                            <li className='d-flex justify-content-around'>
                                <li>Privacy & Terms <BsChevronCompactDown /></li>
                                <li>Ad Choices</li>
                                <li>Advertising</li>
                            </li>
                            <li className='d-flex justify-content-around'>
                                <li>Business Services <BsChevronCompactDown /></li>
                                <li>Get the LinkedIn app</li>
                            </li>
                            <li className='d-flex justify-content-around'>More</li>
                        </ul>
                    </Col>
                    <Col className='d-flex justify-content-center  align-items-center'>
                        <Image src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2003%E2%80%932011.png" style={{width: 25 + "%"}} />
                        <span style={{fontSize: 12 + 'px', paddingLeft: '2px'}}> LinkedIn Corporation © 2020</span>
                    </Col>
                
                </Row>
            </Container>
        )
    }
}

export default NewsFeedRightSidebar;