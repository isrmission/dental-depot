import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
// import img2 from "../../../images/details/details1.jpg"
const Details = () => {
    const { serviceId } = useParams();
    const [Services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.log(error.message))
            .finally(() => setIsLoading(false));

    }, [])

    if (isLoading) {
        return (
            <h1>
                Loading...
            </h1>
        )
    }
    const details = Services.filter(service => serviceId === service.id)

    // console.log(details)

    return (
        <div className=' bg-info bg-opacity-25'>
            <div className="container py-5 d-flex justify-content-center">
                <Card style={{ width: '40%' }}>
                    <Card.Img variant="top" src={details[0].imgD} />
                    <Card.Body className="bg-opacity-10 bg-danger">
                        <Card.Title className="fs-2">{details[0].name}</Card.Title>
                        <Card.Text>
                            {details[0].sDetails}
                        </Card.Text>
                        <Card.Text className="fs-4 text-danger">
                            Starts from: $20
                        </Card.Text>
                        <Button className="btn btn-primary rounded-pill" variant="primary">Book Now</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
};

export default Details;