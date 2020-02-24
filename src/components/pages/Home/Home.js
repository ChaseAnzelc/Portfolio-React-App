import React from "react";

import AboutMe from './AboutMe.js';
import HomeHeader from './HomeHeader.js';
import HomeNav from './HomeNav.js';
import Services from './Services.js';
import Portfolio from './Portfolio';
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
            <Portfolio />
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
       <Portfolio />
       <Contact />
    </div>
    );
};
*/
export default Home;