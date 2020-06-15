import React from 'react';
import { Col ,Image } from 'react-bootstrap';
import { FaQuestionCircle } from "react-icons/fa";
import PageViewer from './PageViewer';

const SideBar = () => {
    return(
        <Col className='col-4 sideBar'>
            <div className='mb-3'>
                <div className='d-flex justify-content-start align-items-center'>
                    <span>Edit public profile & URL</span><FaQuestionCircle />
                </div>
                <hr className='my-4'/>
                <div className='d-flex justify-content-start align-items-center'>
                    <span>Add profile in another language</span><FaQuestionCircle />
                </div>
            </div>
            <div className='banerContainer'>
                <Image src='' style={{width: 100 + "%", height: 300 + "px"}}/>
            </div>
            <div className='mt-4'>
                <h2>People Also Viewed</h2>
                <ul>
                    <PageViewer />
                    <PageViewer />
                    <PageViewer />
                    <PageViewer />
                    <PageViewer />
                    <PageViewer />
                </ul>
            </div>
        </Col>
    )
}

export default SideBar;