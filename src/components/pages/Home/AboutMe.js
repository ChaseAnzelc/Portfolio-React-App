import React from "react";

const AboutMe = () => {
    return (
        <div id="about" className="paddsection">
            <div className="container">
                <div className="section-title text-center mb-3">
                    <h2>About Me</h2>
                </div>
                <div className="row justify-content-between">
                    <div className="col-lg-4 align-self-start">
                        <div className="div-img-bg">
                            <div className="about-img">
                                <img src="images/me.jpg" className="img-responsive" alt="me"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-descr">
                            <p className="separator">I'm a full-stack senior software engineer who specializes in building practical, scalable systems tailored to each project's unique needs. Whether it's designing cloud-native applications, integrating third-party services through webhooks, or delivering real-time APIs and microservices, I bring a solutions-focused mindset to every challenge. I work across the stack, front-end, back-end, and cloud infrastructure to create reliable and maintainable systems that align with business goals. Whether you need a complete system overhaul or a new application built from the ground up, I provide end-to-end solutions that align with your business objectives.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;