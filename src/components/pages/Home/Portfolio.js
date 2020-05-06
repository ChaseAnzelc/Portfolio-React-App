import React from "react";
import {Link} from "react-router-dom";


class Portfolio extends React.Component {

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
                    </ul>
                </div>
                <div className="portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-thumbnail all webapp">
                        <Link to="/Projects/rbmarketplace">
                             <img src="images/portfolio/rbmarketplace.jpg" alt="img"/>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-thumbnail all mobileapp">
                        <Link to="/Projects/kidsplay">
                             <img src="images/portfolio/kidsplay.jpg" alt="img"/>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-thumbnail all webapp">
                        <Link to="/Projects/luigispizzeria">
                            <img src="images/portfolio/luigipizzaria.jpg" alt="img"/>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-thumbnail all webapp">
                        <Link to="/Projects/issueticketingsystem">
                            <img src="images/portfolio/issuetic.jpg" alt="img"/>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-thumbnail webapp consoleapp">
                        <Link to="/Projects/bankingledger">
                            <img src="images/portfolio/banking.jpg" alt="img"/>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-thumbnail all consoleapp">
                        <Link to="/Projects/mazesolver">
                            <img src="images/portfolio/maze.jpg" alt="img"/>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-thumbnail all consoleapp">
                        <Link to="/Projects/hangman">
                            <img src="images/portfolio/hangman.jpg" alt="img"/>
                        </Link>
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