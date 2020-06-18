import React from 'react';
import { Row, Col , Image} from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';

const PageViewer = (data) => {
    console.log(data)
    return(
    <li className='mb-2'>
        <Row>
            <Col className='col-3'>
                <Image src='https://capenetworks.com/static/images/testimonials/user-icon.svg' style={{width: 57.5 + "px", borderRadius: 30 + 'px'}} alt="User's picture"/>
            </Col>
                <Col className='col-7 d-flex flex-column'>
                    <span>{data.data.name + " " + data.data.surname}</span>
                    <span>{data.data.title}</span>
                </Col>
                <Col className='col-2'>
                    <FaUserPlus style={{fontSize: 1.6 + "rem"}}/>
                </Col>
        </Row>
        <hr/>
    </li>
    )
}

export default PageViewer;