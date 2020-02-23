import React from "react";

const HomeNav = () => {
    return (
          <nav id="main-nav">
              <div className="row">
                <div className="container">

                  <div className="logo">
                    <a href="\"><img src="./images/logo.png" alt="logo"/></a>        
                  </div>

                  <div className="responsive"><i data-icon="m" className="ion-navicon-round"></i></div>

                  <ul className="nav-menu list-unstyled">
                    <li><a href="\" className="smoothScroll">Home</a></li>
                    <li><a href="#about" className="smoothScroll">About</a></li>
                    <li><a href="#portfolio" className="smoothScroll">Projects</a></li>
                    <li><a href="#contact" className="smoothScroll">Contact</a></li>
                  </ul>
                </div>
              </div>
            </nav>
  );
};
  export default HomeNav;