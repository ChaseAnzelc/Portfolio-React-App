import React from "react";


const ProjectHeader = (props) => {
    return (
      <div id="header-project" className="home">
        <div className="container">
          <div className="header-content">
              <h1>{props.header}</h1>
          </div>
        </div>
      </div>
  );
};
export default ProjectHeader;