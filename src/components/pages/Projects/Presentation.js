import React from "react";


const Presentation = (props) => {
    return (
        <div id="project-pres" className="paddsection">
            <div className="container">
                <p className="heading">Presentation</p>
                    <div className='embed-container'><iframe title="presentation" src={props.pres} frameBorder="0" width="1440" height="839" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>
            </div>
        </div>
  );
};
export default Presentation;