import React, { useEffect, useState } from 'react';
import Team from '../../../Public/FullTeam/Team/Team';

const TeamsHome = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./expertTeam.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div className=' bg-dark bg-opacity-10 mx-auto '>
            <div className='container'>
                <p className="bg-info bg-opacity-25">
                    TEAM
                </p>
                <h1 className='text-info mb-5'>Meet Our Professionals
                </h1>
                <div className='row row-cols-4 gy-5'>
                    {
                        doctors.slice(0, 4).map(doctor => <Team key={doctor.name} doctor={doctor}
                        ></Team>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamsHome;