import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import SliderForBanner from '../../Components/Slider/SliderForBanner';
import Advertise from '../../Components/Advertise/Advertise';
import ChecfContainer from '../../Components/ChecfContainer/ChecfContainer';
import MainSection from '../../Components/MainSection/MainSection';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const {user} = useContext(AuthContext);

    const chefInfo = useLoaderData();

    return (
        <div className='mt-5'>
            <NavigationBar/>
            <SliderForBanner/>
            <Advertise/>
            <ChecfContainer chefInfo= {chefInfo}/>
            <MainSection/>
        </div>
    );
};

export default Home;