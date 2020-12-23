import React, { Component } from 'react';
import { useTranslation } from 'react-i18next'

import go from "../assets/svgs/go.svg";
import react from "../assets/svgs/react.svg"
import sass from "../assets/svgs/sass.svg";
import cli from "../assets/svgs/cli.svg";
import api from "../assets/svgs/api.svg";
import github from "../assets/svgs/github.svg";

const SmallerProjects = () => {
    const { t } = useTranslation()
    return ( 
        <div className="container">
            <h2 className="section-title">{t("Smaller Projects")}</h2>

            <div className="sm-project">
                <h4 className="sm-proj-name">[weather]</h4>
                <div className="sm-text">{t("Weather")}</div>
                <div className="sm-icons">
                    <img src={go} alt="go" className="small-svg"/>
                    <img src={api} alt="api" className="small-svg"/>
                    <img src={cli} alt="cli" className="small-svg"/>
                    <img src={github} alt="github" className="small-svg gh"/>
                </div>
            </div>

            <div className="sm-project">
                <h4 className="sm-proj-name">Quotes</h4>
                <div className="sm-text">{t("Quotes")}</div>
                <div className="sm-icons">
                    <img src={react} alt="react" className="small-svg"/>
                    <img src={sass} alt="sass" className="small-svg"/>
                    <img src={api} alt="api" className="small-svg"/>
                    <img src={github} alt="github" className="small-svg gh"/>
                </div>
            </div>
        </div>
     );
}
 
export default SmallerProjects;