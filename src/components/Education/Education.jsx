import React from 'react';
import "./education.css";
import Data from "./Data";
import Card from "./Card";
import graduationCapImage from "../../assets/graduation-cap-solid.svg"; // Import the graduation cap image

const Education = () => {
    return (
        <section className="resume container section" id="education">
            <h2 className="section__title">Academics</h2>

            {/* Graduation cap image */}
            <img src={graduationCapImage} alt="Graduation Cap" className="graduation-cap-image" />

            <div className="resume__container grid">
                {/* Removed the timeline divs and directly mapped Data for Cards */}
                {Data.map((val, id) => {
                    if (val.category === "education") {
                        return (
                            <Card key={id}
                                icon={val.icon}
                                title={val.title}
                                year={val.year}
                                desc={val.desc}
                            />
                        );
                    }
                })}

                {Data.map((val, index) => {
                    if (val.category === "experience") {
                        return (
                            <Card key={index}
                                icon={val.icon}
                                title={val.title}
                                year={val.year}
                                desc={val.desc}
                            />
                        );
                    }
                })}
            </div>
        </section>
    )
}

export default Education;
