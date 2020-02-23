import React from "react";

import AboutMe from './AboutMe.js';
import HomeHeader from './HomeHeader.js';
import HomeNav from './HomeNav.js';
import Services from './Services.js';
import Portfolio from './Portfolio';
import Contact from './Contact.js';

const Home = () => {
    return (
    <div>
       <HomeNav />
       <HomeHeader />
       <AboutMe />
       <Services />
       <Portfolio />
       <Contact />
    </div>
    );
};
export default Home;