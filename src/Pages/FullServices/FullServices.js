import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const FullServices = () => {
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
                    <p>SERVICES</p>
                    <h1 className='text-info mb-5'>What We Offer</h1>
                    <div className='row row-cols-3 g-5 rounded-3'>
                        {Services.map(service => <Service key={service.id} service={service}
                        ></Service>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FullServices;