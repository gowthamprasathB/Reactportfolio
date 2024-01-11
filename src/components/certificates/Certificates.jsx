import React,{useState} from 'react';
import "./certificates.css";
import Menu from './Menu';

const Certificates=()=>{
    const [items, setItems]= useState(Menu);
    const filterItem=(categoryItem)=>{
        const updatedItems=Menu.filter((curElem)=>{
            return curElem.category===categoryItem;
        })

        setItems(updatedItems);
    }
    return(
        <section className="work container section" id="certificate">
            <h2 className="section__title">Certificates</h2>

            <div className="work__filters">
                <span className="work--item"></span>
                <span className="work--item" onClick={() =>filterItem("Creative")}></span>
                <span className="work--item"></span>
                <span className="work--item"></span>
                <span className="work--item"></span>
            </div>

            <div className="work__container grid">
                {items.map((elem) =>{
                    const{id,image,title,category}=elem;
                    return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__img" />
                                <div className="work__mask"></div>
                            </div>
                            <span className="work_category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <a href="#" className="work__button">
                                <i className="icon-link work__button-icon"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>

    )
}
export default Certificates;