import React from "react";


const Description = (props) => {
return (
<div id="project-descr" className="paddsection">
    <div className="container">
	    <div className="row justify-content-between">
            <div className="col-lg-7">
                <div className="description">
                    <p className="heading">Description</p>
                    <span className="separator">
                        <div dangerouslySetInnerHTML={{__html: props.description}} />
                    </span>
                </div>
            </div>	  
            <div className="col-lg-4 ">
                <div className="div-img-bg">
                    <img src={props.image} className="img-responsive" alt="project-img"/>
                </div>
            </div>
        </div>
    </div>
</div>
   );
};
export default Description;