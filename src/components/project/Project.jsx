import React from "react";
import "./project.css";
import Image1 from "../../assets/customer-reviews-svgrepo-com.svg";
import Image2 from "../../assets/iot-develop.webp";


const Project = () => {
  return (
    <section className="project container section"id="project">
      <h2 className="section">Projects</h2>

      <div className="project__container grid">
        <div className="project__item">
          <img src={Image1} alt="" className="project__img" />
          <h3 className="project__plans">Online Assignment Submission System Using Python and Django Framework</h3>
          <p className="project__title"></p>
          <p className="project__support">Designed and Developed an online assignment submission  system using Django, a python web framework.Implemented user authentication,file uploads,and submission tracking.Enhanced efficiency and convenience for both students and instructor.</p>
          <a href="https://github.com/gowthamprasathB/Online-Assignment-Submission-System-Using-Django" target="_blank" rel="noopener noreferrer" className="project__link-button">
            View Project
          </a>
        </div>
        
        <div className="project__item">
          <img src={Image2} alt="" className="project__img" />
          <h3 className="project__plans">Service Support system Using Angular Framework </h3>
          <p className="project__title"></p>
          <p className="project__support">Designed and Built a service support system for efficient management of customer inquiries.Developed system using Angular,ensuring a user-friendly interface.Implemented features for tracking and resolving customer issues.</p>
          <a href="https://github.com/gowthamprasathB/Service-Support-System-Using-Angular" target="_blank" rel="noopener noreferrer" className="project__link-button">
            View Project
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Project;