import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';

import api from "../assets/svgs/api.svg";
import cli from "../assets/svgs/cli.svg";
import sass from "../assets/svgs/sass.svg";
import react from "../assets/svgs/react.svg";
import go from "../assets/svgs/go.svg";
import ubuntu from "../assets/svgs/ubuntu.svg";
import js from "../assets/svgs/javascript.svg";
import git from "../assets/svgs/git.svg";
import netlify from "../assets/svgs/netlify.svg";
import heroku from "../assets/svgs/heroku.svg";

const Technologies = () => {
    const { t } = useTranslation()
    return ( 
        <div className="container">
            <h2 className="section-title">{t("Technologies")}</h2>

            <div className="content-lang">
                <div className="container-skills">
                    <h3 className="subsection-title">{t("Main")}</h3>

                    <div className="skills">
                        <div className="skill">
                            <img src={react} alt="react" className="svg-skill react"/>
                        </div>

                        <div className="skill">
                            <img src={go} alt="go" className="svg-skill"/>
                        </div>

                        <div className="skill">
                            <img src={js} alt="js" className="svg-skill"/>
                        </div>

                        <div className="skill">
                            <img src={sass} alt="sass" className="svg-skill"/>
                        </div>

                    </div>
                    
                </div>

                <div className="container-skills">
                    <h3 className="subsection-title">{t("Others")}</h3>

                    <div className="skills">

                         <div className="skill">
                            <img src={git} alt="git" className="svg-skill"/>
                        </div>

                        <div className="skill">
                            <img src={api} alt="api" className="svg-skill"/>
                        </div>

                        <div className="skill">
                            <img src={ubuntu} alt="ubuntu" className="svg-skill"/>
                        </div>

                        <div className="skill">
                            <img src={netlify} alt="netlify" className="svg-skill"/>
                        </div>

                        <div className="skill">
                            <img src={heroku} alt="heroku" className="svg-skill"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Technologies;