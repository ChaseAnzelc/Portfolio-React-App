import React from "react";


const Contact = () => {
return (
<div id="contact" className="paddsection">
    <div className="container">
      <div className="contact-block1">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-contact">
              <h2 className="mb-30">Contact Info</h2>
                <ul className="contact-details">
                    <li><span>Chase Anzelc</span></li>
                    <li><span>816-602-7188</span></li>
                    <li><span>cja51230@ucmo.edu</span></li>
                </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="div-img-bg">
                <div className="contact-img">
                    <img src="images/contact-img.jpg" className="img-responsive" alt="me"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   );
};
export default Contact;