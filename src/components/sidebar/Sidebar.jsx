import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.svg";
import House from "../../assets/house-solid.svg";
import Book from "../../assets/briefcase-solid.svg";
import Layer from "../../assets/layer-group-solid.svg";
import Notes from "../../assets/clipboard-solid (1).svg";
import Award from "../../assets/award-solid.svg";
import Graduate from "../../assets/graduation-cap-solid.svg";
import Contact from "../../assets/address-book-solid.svg";



const Sidebar = () =>{
    return(
        <aside className='aside'>
            <a href="#home" className="nav__logo">
                <img src={Logo} alt="" />
            </a>
            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                    <li>
                    <a href="#home" className="nav__logo">
                    <img src={House} alt="" />
                    </a>
                    </li> 
                    <li><a href="#about" className="nav__logo">
                        <img src={Book} alt="" />
                    </a></li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                            <img src={Layer} alt="" />
                            </a>
                        </li>

                        

                        <li className="nav__item">
                            <a href="#education" className="nav__link">
                            <img src={Graduate} alt="" />
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#certificate" className="nav__link">
                            <img src={Award} alt="" />
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#project" className="nav__link">
                            <img src={Notes} alt="" />
                            </a>
                        </li>

                        

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                            <img src={Contact} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="nav__footer">
                <span className="copyright">&copy; 2022 - 2023.</span>
            </div>
        </aside>
    );
};
export default Sidebar;

