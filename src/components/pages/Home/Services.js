import React from "react";


const Services = () => {
return (
            <div id="services">
                <div className="container">
                    <div className="services-carousel owl-theme">
                    <div className="services-block">
                        <i className="ion-android-laptop"></i>
                        <span>Web Applications</span>
                        <p className="separator">Experience creating relevant and useful full stack web applications in a variety of languages and frameworks </p>
                    </div>
                    <div className="services-block">
                        <i className="ion-social-android-outline"></i>
                        <span>Mobile Applications</span>
                        <p className="separator">Experience creating visually appealing and highly functional mobile applications in Android Studio.</p>
                    </div>
                    <div className="services-block">
                        <i className="ion-code"></i>
                        <span>Console Applications</span>
                        <p className="separator">Experience creating a variety of complex console applications to solidify programming skills </p>
                    </div>
                    <div className="services-block">
                        <i className="ion-ios-analytics-outline"></i>
                        <span>Analytics</span>
                        <p className="separator">Experience deploying New Relic analytics to both web applications and mobile applications </p>
                    </div>
                    <div className="services-block">
                        <i className="ion-ios-camera-outline"></i>
                        <span>Photoshop</span>
                        <p className="separator">Experience creating and using visually appealing images, buttons, logos, ect. with Adobe Photoshop CC 2019 </p>
                    </div>
                    </div>
                </div>
            </div>
    );
};
export default Services;