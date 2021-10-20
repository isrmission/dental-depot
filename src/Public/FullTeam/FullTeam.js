import React, { useEffect, useState } from 'react';
import Team from './Team/Team';

const FullTeam = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./expertTeam.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div className='p-5 bg-dark bg-opacity-10 mx-auto '>
            <div className='container'>
                <p>
                    TEAM
                </p>
                <h1 className='text-info mb-5'>Meet Our Professionals
                </h1>
                <div className='row row-cols-3 gy-5'>
                    {
                        doctors.map(doctor => <Team key={doctor.name} doctor={doctor}
                        ></Team>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default FullTeam;