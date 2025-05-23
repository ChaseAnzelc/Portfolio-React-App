import React from "react";

import AboutMe from './AboutMe.js';
import HomeHeader from './HomeHeader.js';
import HomeNav from './HomeNav.js';
import Services from './Services.js';
import Projects from './Projects';
import Contact from './Contact.js';

var loadjs = require('loadjs');

class Home extends React.Component {

    componentDidMount() {
        loadjs('main.js');
    }

    render() {
        return (
        <div id="HomePage">
            <HomeNav />
            <HomeHeader />
            <AboutMe />
            <Services />
            <Projects />
            <Contact />
         </div>
        );
    }
}

/*
const Home = () => {
    return (
    <div id="HomePage">
       <HomeNav />
       <HomeHeader />
       <AboutMe />
       <Services />
       <Projects />
       <Contact />
    </div>
    );
};
*/
export default Home;