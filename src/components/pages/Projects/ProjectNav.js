import React from "react";
import {Link} from "react-router-dom";

const ProjectNav = (props) => {
    return (
      <nav id="main-nav">
        <div className="row">
          <div className="container">
            <div className="logo">
              <Link to="/"><img src="../images/logo.jpg" alt="logo"/></Link>
            </div>
            <div className="responsive"><i data-icon="m" className="ion-navicon-round"></i></div>
            <ul className="nav-menu list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><a href="#project-descr" className="smoothScroll">Description</a></li>
              <ShowPresentationNav id={props.id}/>
              <li><a href="#project-demo" className="smoothScroll">Demo</a></li>
            </ul>
          </div>
        </div>
    </nav>
  );
};
  export default ProjectNav;


  function ShowPresentationNav(props) {
    if (props.id == 0 || props.id == 1) {
      return <li><a href="#project-pres" className="smoothScroll">Presentation</a></li>;
    }
    return null;
  }