import React from "react";


const HomeHeader = () => {
    return (
            <div id="header" className="home">
                <div className="container">
                <div className="header-content">
                    <h1>I'm <span className="typed"></span></h1>
                    <p>Developer . Programmer . Problem Solver</p>
                    <ul className="list-unstyled list-social">
                    <li><a href="https://www.linkedin.com/in/chase-anzelc/"><i className="ion-social-linkedin"></i></a></li>
                    <li><a href="https://github.com/ChaseAnzelc"><i className="ion-social-github"></i></a></li>
                    <li><a href="https://www.facebook.com/chase.anzelc"><i className="ion-social-facebook"></i></a></li>
                    <li><a href="https://twitter.com/AnzelcChase"><i className="ion-social-twitter"></i></a></li>
                    </ul>
                </div>
                </div>
            </div>
  );
};
export default HomeHeader;