import React from "react";


const Demo = (props) => {
    return (
        <div id="project-demo" className="paddsection">
            <div className="container">
                <p className="heading">Demo</p>
                <div className='embed-container'>
                    <iframe src={props.demo} frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
            </div>
      </div>
  );
};
export default Demo;