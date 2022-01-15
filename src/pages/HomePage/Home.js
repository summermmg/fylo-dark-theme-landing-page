import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import SubscriptionCard from '../../components/SubscriptionCard/SubscriptionCard';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';

const Home = () => {
    return (
        <div>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <SubscriptionCard />
        </div>
    )
};

export default Home;
