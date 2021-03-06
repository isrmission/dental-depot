import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../../Service/Service';

const Services = () => {
    const [Services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div className='p-5 bg-dark bg-opacity-10 mx-auto pb-5'>
                <div className='container'>
                    <p className="bg-info bg-opacity-25">SERVICES</p>
                    <h1 className='text-info mb-5'>What We Offer</h1>
                    <div className='row row-cols-3 g-5 rounded-3'>
                        {Services.slice(0, 6).map(service => <Service key={service.id} service={service}
                        ></Service>
                        )}
                    </div>
                    <div className="mt-5">
                        <NavLink as={Link} className='btn btn-outline-secondary px-5 w-25 mx-auto' to="/allservices" variant="primary">Show More</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;