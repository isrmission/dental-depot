import React from 'react';
import EmergencyAndInfo from '../Header/EmergencyAndInfo/EmergencyAndInfo';
import Header from '../Header/Header';
import Services from '../Services/Services';
import TrustCount from '../TrustCount/TrustCount';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <EmergencyAndInfo></EmergencyAndInfo>
            <TrustCount></TrustCount>
            <Services></Services>
        </div>
    );
};

export default Home;