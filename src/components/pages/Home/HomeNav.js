import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const HomeNav = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
          <nav id="main-nav">
              <div className="row">
                <div className="container">

                  <div className="logo">
                    <Link to="/"><img src="./images/logo.jpg" alt="logo"/></Link>        
                  </div>

                  <div className="responsive"><i data-icon="m" className="ion-navicon-round"></i></div>

                  <ul className="nav-menu list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/#about">About</Link></li>
                    <li><Link to="/#projects">Projects</Link></li>
                    <li><Link to="/#contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
  );
};
  export default HomeNav;