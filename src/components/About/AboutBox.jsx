import React from 'react';
import fire from"../../assets/fire-solid.svg";
import Tropy from"../../assets/trophy-solid.svg";
import People from"../../assets/users-solid.svg";
import Badge from"../../assets/certificate-solid.svg";


const AboutBox=()=>{
    return(
        <div className="about__boxes">
            <div className="about__box">
                <img src={fire} alt=""  className="about__icon"/>
                <div>
                    <h3 className="about__title">3</h3>
                    <span className="about__subtitle"> Projects completed</span>
                    </div>
            </div>

            <div className="about__box">
                <img src={Tropy} alt="" className="about__icon "/>
                <div>
                    <h3 className="about__title">15</h3>
                    <span className="about__subtitle"> Certificates Earned</span>
                    </div>
            </div>

            <div className="about__box">
                <img src={People} alt="" />
                <div>
                    <h3 className="about__title">10</h3>
                    <span className="about__subtitle"> Workshops Attended</span>
                    </div>
            </div>
            <div className="about__box">
                <img src={Badge} alt=""className="about__icon" />
                <div>
                    <h3 className="about__title">2</h3>
                    <span className="about__subtitle">Completed 2 Internship</span>
                    </div>
            </div>
        </div>

    )
}
export default AboutBox;