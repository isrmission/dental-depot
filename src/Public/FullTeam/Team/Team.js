import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

const Team = (props) => {
    const { name, experties, img } = props.doctor;
    return (
        <div>
            <Card style={{ width: '18rem' }} className=" bg-transparent border-0">
                <Card.Img variant="top" src={img} className="w-75 mx-auto bg-info rounded-3 bg-opacity-25" />
                <Card.Body>
                    <Card.Title className="fs-4">{name}</Card.Title>
                    <Card.Text className="fw-bold">
                        {experties}
                    </Card.Text>
                    <Button className="btn btn-light rounded-pill p-1" variant="primary">Appointment</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Team;