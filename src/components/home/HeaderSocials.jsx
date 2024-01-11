import React from 'react';
import Insta from"../../assets/instagram.svg";
import Tweet from "../../assets/square-x-twitter.svg";
import Git from "../../assets/github.svg";
import Linked from "../../assets/linkedin.svg";
import Telegram from "../../assets/telegram.svg";


const HeaderSocials=()=>{
    return(
        <div className="home__socials">
            <a href="https://www.instagram.com/" className="home__social-link" target="_blank">
            <img src={Insta} alt="" />
            </a>
            <a href="https://www.twitter.com/" className="home__social-link" target="_blank">
            <img src={Tweet} alt="" />
            </a>
            <a href="https://www.github.com/" className="home__social-link" target="_blank">
            <img src={Git} alt="" />
            </a>
            <a href="https://www.linkedin.com/" className="home__social-link" target="_blank">
            <img src={Linked} alt="" />
            </a>
            <a href="https://www.telegram.com/" className="home__social-link" target="_blank">
            <img src={Telegram} alt="" />
            </a>
        </div>
    )
}
export default HeaderSocials