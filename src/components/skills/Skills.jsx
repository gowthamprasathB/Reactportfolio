import React from 'react';
import "./skills.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/sql.png";
import Image4 from "../../assets/pyt.png";
import Image5 from "../../assets/cloud.png";
import Image6 from "../../assets/engineer.ico";


const data = [
    {
      id: 1,
      image: Image1,
      title: "Web development",
      description:
        "",
    },
    {
      id: 2,
      image: Image2,    
      title: "JAVA",
      description:
        "",
    },
    {
      id: 3,
      image: Image3,
      title: "SQL",
      description:
        "",
    },
    {
        id: 4,
        image: Image4,
        title: "Python",
        description:
          "",
      },
      {
        id: 5,
        image: Image5,
        title: "Cloud",
        description:
          "",
      },
      {
        id: 6,
        image: Image6,
        title: "Tools",
        description:
          "Visual Studio code,InteliJ IDEA,Microsoft Excel",
      },
  ];

const Skills=()=>{
    return(
        <section className="services container section" id="skills">
            <h2 className="section__title">Skills</h2>
            <div className="services__container grid">
                {data.map(({id,image,title,description}) => {
                    return (
                        <div className="services__card"key={id}>
                            <img src={image} alt="" className="services__img" />
                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )

    
}
export default Skills;