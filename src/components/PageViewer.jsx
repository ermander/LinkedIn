import React from 'react';
import { Row, Col , Image} from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';

const PageViewer = () => {
    return(
    <li className='mb-2'>
        <Row>
            <Col className='col-3'>
                <Image src='' style={{width: 100 + "%", height: 57.5 + "px", borderRadius: 25 + 'px'}} alt="User's picture"/>
            </Col>
                <Col className='col-7 d-flex flex-column'>
                    <span>Viewer Name</span>
                    <span>Viewers Job</span>
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