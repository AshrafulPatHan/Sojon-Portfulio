import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import About_me from './About_me';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About_me/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;