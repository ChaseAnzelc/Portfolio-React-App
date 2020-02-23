import React from "react";


const AboutMe = () => {
    return (
                <div id="about" className="paddsection">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-4 ">
                                <div className="div-img-bg">
                                    <div className="about-img">
                                        <img src="images/me.jpg" className="img-responsive" alt="me"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="about-descr">
                                    <p className="p-heading">I'm a full stack software engineer with a passion to solve problems and create your vision. </p>
                                    <p className="separator">I’m a recent honors Software Development graduate from UCM who wants to help your company grow and succeed. Whether I’m designing an elegant front-end UI / UX, optimizing back-end code, or creating efficient database queries, Full stack engineering excites me at every level. Time and space complexities are always on my mind while also considering how the application will scale. Of great importance is gathering intelligent real-time analytics monitoring to help with the optimization and performance of any modern software. From mockup to production I am excited to solve your complex problems to get us across the finish line! I enjoy hiking, climbing, exploring.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  );
};
export default AboutMe;