import React from "react";

const ProjectHeader = (props) => {
    return (
      <div id="header-project" className="home" style={Style(props.style)}>
        <div className="container">
          <div className="header-content">
              <h1>{props.header}</h1>
          </div>
        </div>
      </div>
  );
};
export default ProjectHeader;

//function to set header banner to correct image
function Style(props) {
    return {
      background: 'url(' + props +') repeat scroll center center / cover'
    };
}