import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const { id, name, sDetails, img } = props.service;
    return (
        <div>
            <Card style={{ height: '20rem', width: 'auto' }} className='border-0 shadow mx-auto'>
                <div className="bg-info rounded-top">
                    <Card.Img variant="top" src={img} className='mx-auto image-size my-3 rounded-3' />
                </div>
                <Card.Body>
                    <Card.Title className='fw-bold fs-4 text-center text-info '>{name}</Card.Title>
                    <Card.Text className='text-center text-muted mt-4'>
                        {sDetails.slice(0, 80)}...
                    </Card.Text>
                    <Link to={`/details/${id}`}>
                        <Button className='btn btn-outline-secondary px-5 text-white' variant="primary">Show Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;