import React from "react";

import AboutMe from './AboutMe.js';
import HomeHeader from './HomeHeader.js';
import HomeNav from './HomeNav.js';
import Services from './Services.js';
import Portfolio from './Portfolio';
import Contact from './Contact.js';
import isotope from 'isotope-layout';


var loadjs = require('loadjs');

class Home extends React.Component {

    componentWillMount() {
        loadjs('../../../lib/jquery/jquery.min.js');
        loadjs('../../../lib/jquery/jquery-migrate.min.js');
        loadjs('../../../lib/bootstrap/js/bootstrap.bundle.min.js');
        loadjs('../../../lib/typed/typed.js');
        loadjs('../../../lib/owlcarousel/owl.carousel.min.js');
        loadjs('../../../lib/magnific-popup/magnific-popup.min.js');
        loadjs('https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js');
        loadjs('../../../main.js');
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