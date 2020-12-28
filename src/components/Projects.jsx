import React from 'react';
import { useTranslation } from 'react-i18next';
import github from "../assets/svgs/github.svg";
import link from "../assets/svgs/link.svg";

import woyt from "../assets/pics/woyt.PNG";
import kattis from "../assets/pics/kattis.PNG";

import go from "../assets/svgs/go.svg";
import react from "../assets/svgs/react.svg"
import sass from "../assets/svgs/sass.svg";
import heroku from "../assets/svgs/heroku.svg";
import netlify from "../assets/svgs/netlify.svg";
import ts from "../assets/svgs/typescript.svg";
import api from "../assets/svgs/api.svg";

const Projects = () => {
    const { t } = useTranslation()
    return (
        <div className="container" id="projects">
            <h2 className="section-title">{t("Projects")}</h2>

            <div className="project">
                <div className="proj-header">
                    <h3 className="proj-name">Wasted On YouTube</h3>
                    <div className="links">
                        <a href="https://wasted-on-yt.netlify.app/" rel="noreferrer" target="_blank">
                            <img src={link} alt="link" className="svg-header anim"/>
                        </a>

                        <a href="https://github.com/tomsarry/WOYT#wasted-on-youtube" rel="noreferrer" target="_blank">
                            <img src={github} alt="github" className="svg-header anim"/>
                        </a>
                    </div>
                </div>

                <div className="proj-content">
                    <div className="proj-pic">
                        <a href="https://wasted-on-yt.netlify.app/" target="_blank" rel="noreferrer" className="proj-site">
                            <img src={woyt} alt="woyt" className="proj-img"/>
                            <span className="reveal-pic">{t("To Site")}</span>
                        </a>
                    </div>
                
                    <div className="proj-desc">
                        <p className="proj-text">{t("WOYT")}</p>
                        <div className="proj-skills">
                            <img src={react} alt="react" className="small-svg skill-standout"/>
                            <img src={ts} alt="ts" className="small-svg skill-standout"/>
                            <img src={go} alt="go" className="small-svg skill-standout"/>
                            <img src={sass} alt="sass" className="small-svg skill-standout"/>
                            <img src={netlify} alt="netlify" className="small-svg skill-standout"/>
                            <img src={heroku} alt="heroku" className="small-svg skill-standout"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="proj-header">
                    <h3 className="proj-name">Kattis Scrapper 🔎</h3>
                    <div className="links">
                        <a href="https://github.com/tomsarry/kattis-scraper#kattis-scraper" rel="noreferrer" target="_blank">
                            <img src={github} alt="github" className="svg-header anim"/>
                        </a>
                    </div>
                </div>

                <div className="proj-content">
                        <img src={kattis} alt="kattis" className="noreveal"/>     
                
                    <div className="proj-desc">
                        <p className="proj-text">{t("Kattis")}</p>
                        <div className="proj-skills">
                            <img src={go} alt="go" className="small-svg skill-standout"/>
                            <img src={api} alt="api" className="small-svg skill-standout"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>

      );
}
 
export default Projects;