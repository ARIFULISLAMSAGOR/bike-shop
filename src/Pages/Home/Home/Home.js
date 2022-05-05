import React from 'react';
import SocialService from '../../Service/SocialService/SocialService';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SocialService></SocialService>
        </div>
    );
};

export default Home;