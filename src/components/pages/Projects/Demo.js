import React from "react";


const Demo = (props) => {
    return (
        <div id="project-demo" className="paddsection">
            <div className="container">
                <p className="heading">Demo</p>
                <div className='embed-container'>
                    <iframe title="demo" src={props.demo} frameBorder="0" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
            </div>
      </div>
  );
};
export default Demo;