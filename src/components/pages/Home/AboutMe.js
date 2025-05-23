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
                            <p className="separator">I am a Senior Software Engineer with 5+ years of experience delivering scalable, secure, and cloud-native solutions across backend, 
frontend, and infrastructure layers. Proven track record in healthcare interoperability, FHIR/HL7 standards, secure system 
integration (OAuth2, Keycloak), and real-time data pipelines. I am skilled in leading high-impact initiatives using modern tech 
stacks and AWS services to deliver reliable, business-aligned engineering outcomes. From idea to mock-up to production, 
I’m passionate about solving your complex problems and driving your projects across the finish line.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;