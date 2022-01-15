import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';

const Home = () => {
    return (
        <div>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
        </div>
    )
};

export default Home;
