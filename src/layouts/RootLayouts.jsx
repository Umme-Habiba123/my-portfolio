import React from 'react';
import Navbar from '../components/Navbar/navbar';
import HeroSection from '../components/Navbar/heroSection/HeroSection';
import AboutMe from '../components/AboutMe/AbouteMe';

const RootLayouts = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <AboutMe></AboutMe>
        </div>
    );
};

export default RootLayouts;