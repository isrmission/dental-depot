import React from 'react';
import Blogs from '../../Blogs/Blogs';
import EmergencyAndInfo from '../Header/EmergencyAndInfo/EmergencyAndInfo';
import Header from '../Header/Header';
import Services from '../Services/Services';
import TeamsHome from '../TeamsHome/TeamsHome';
import TrustCount from '../TrustCount/TrustCount';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <EmergencyAndInfo></EmergencyAndInfo>
            <TrustCount></TrustCount>
            <Services></Services>
            <TeamsHome></TeamsHome>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;