import React from 'react';
import Navbar from '../components/Navbar/navbar';
import HeroSection from '../components/Navbar/heroSection/HeroSection';
import AboutMe from '../components/AboutMe/AbouteMe';
import Contact from '../components/Contact/Contact';

const RootLayouts = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </div>
    );
};

export default RootLayouts;