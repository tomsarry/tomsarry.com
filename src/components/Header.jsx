import React from 'react';
import face from "../assets/face.jpg"
import github from "../assets/svgs/github.svg";
import linkedin from "../assets/svgs/linkedin.svg";

import LanguageSelector from "./LanguageSelector";

const Header = () => {
    return (
        <header className="header">
            <div className="pic-container">
                <img src={face} alt="Tom Sarry" className="pic" />
            </div>

            <div className="socials">
                <LanguageSelector />
                <span className="sep"></span>
                <a href="https://github.com/tomsarry" rel="noreferrer" target="_blank">
                    <img src={github} alt="github" className="svg-header anim gh"/>
                </a>
                <a href="hhttps://www.linkedin.com/in/tom-sarry-5525a8173/" rel="noreferrer" target="_blank">
                    <img src={linkedin} alt="linkedin" className="svg-header anim"/>
                </a>
            </div>
        </header>
    );
}

export default Header;