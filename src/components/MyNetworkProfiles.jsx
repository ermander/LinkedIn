import React from 'react';
import { Card , Button , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNetworkProfiles = (data) => {
    return(
        <Col className='mb-3'>
            <Card className='h-100'>
                <Card.Img variant="top" src="https://capenetworks.com/static/images/testimonials/user-icon.svg" />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title>{data.data.name + " " + data.data.surname}</Card.Title>
                    <Card.Text>
                    {data.data.bio}
                    </Card.Text>
                    <Button className='mt-auto' variant="primary">View profile</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default MyNetworkProfiles;