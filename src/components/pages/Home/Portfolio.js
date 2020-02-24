import React from "react";
import {Link} from "react-router-dom";

var loadjs = require('loadjs');

class Portfolio extends React.Component {

    componentDidMount() {
      }

      render() {

return (
        <div id="portfolio" className="text-center paddsection">
            <div className="container">
            <div className="section-title text-center">
                <h2>My Projects</h2>
            </div>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="portfolio-list">
                    <ul className="nav list-unstyled" id="portfolio-flters">
                        <li className="filter filter-active" data-filter=".all">all</li>
                        <li className="filter" data-filter=".webapp">Web Applications</li>
                        <li className="filter" data-filter=".mobileapp">Mobile Applications</li>
                        <li className="filter" data-filter=".consoleapp">Console Applications</li>
                        <li className="filter" data-filter=".java">Java</li>
                        <li className="filter" data-filter=".csharp">C#</li>
                        <li className="filter" data-filter=".php">PHP</li>
                        <li className="filter" data-filter=".c">C</li>
                    </ul>
                </div>
                <div className="portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-thumbnail all java mobileapp">
                        <Link to="/Projects">
                             <img src="images/portfolio/kidsplay.jpg" alt="img"/>
                        </Link>
                    </div>
                        <div className="col-lg-4 col-md-6 portfolio-thumbnail all php webapp">
                            <a href="https://issueticketingsystem.com">
                        <img src="images/portfolio/luigipizzaria.jpg" alt="img"/>
                            </a>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-thumbnail all java webapp">
                    <a href="https://issueticketingsystem.com">
                        <img src="images/portfolio/issuetic.jpg" alt="img"/>
                            </a>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-thumbnail all csharp webapp consoleapp">
                    <a href="https://issueticketingsystem.com">
                        <img src="images/portfolio/banking.jpg" alt="img"/>
                            </a>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-thumbnail all java consoleapp">
                    <a href="https://issueticketingsystem.com">
                        <img src="images/portfolio/maze.jpg" alt="img"/>
                            </a>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-thumbnail all csharp consoleapp">
                    <a href="https://issueticketingsystem.com">
                        <img src="images/portfolio/hangman.jpg" alt="img"/>
                            </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}
}
export default Portfolio;