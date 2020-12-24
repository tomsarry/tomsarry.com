import React from 'react';
// import { withTranslation } from 'react-i18next'
import { useTranslation } from 'react-i18next';


const Redirects = () => {
    const { t } = useTranslation()
    return ( 
        <div className="landing-main">
            <h1 className="name">
                <span className="letter1">t</span>
                <span className="letter2">o</span>
                <span className="letter3">m</span>
                <span className="letter4">s</span>
                <span className="letter5">a</span>
                <span className="letter6">r</span>
                <span className="letter7">r</span>
                <span className="letter8">y</span>
            </h1>
        
            <div className="table-links">
                <a href="#techs" className="redirect">
                    <div>{t('Technologies')}<span></span></div>
                </a>
                <a href="#projects" className="redirect">
                    <div>{t('Projects')}<span></span></div>
                </a>
                <a href="#sm-projects" className="redirect">
                    <div>{t('Smaller Projects')}<span></span></div>
                </a>
            </div>

        </div>
     );
}
 
export default Redirects;