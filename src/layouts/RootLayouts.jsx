import React from 'react';
import Navbar from '../components/Navbar/navbar';
import HeroSection from '../components/Navbar/heroSection/HeroSection';
import AboutMe from '../components/AboutMe/AbouteMe';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import MySkills from '../components/Skills/MySkills';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import ExperienceEducation from '../ExperienceEducation/ExperienceEducation';
import { Outlet } from 'react-router';

const RootLayouts = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <HeroSection></HeroSection>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <FeaturedProjects></FeaturedProjects>
            <ExperienceEducation></ExperienceEducation>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;