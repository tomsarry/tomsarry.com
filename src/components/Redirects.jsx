import React from 'react';
// import { withTranslation } from 'react-i18next'
import { useTranslation } from 'react-i18next';
import arrow from "../assets/svgs/arrow.svg";


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
                <div>
                    <a href="#techs" className="redirect">
                        <span>
                            {t('Technologies')}
                            <img src={arrow} alt="arrow" className="arrow"/>
                        </span>
                    </a>

                </div>

                <div>
                    <a href="#projects" className="redirect">
                        <span>
                            {t('Projects')}
                            <img src={arrow} alt="arrow" className="arrow"/>
                        </span>
                    </a>
                </div>
                
                <div>
                    <a href="#sm-projects" className="redirect">
                        <span>
                            {t('Smaller Projects')}
                            <img src={arrow} alt="arrow" className="arrow"/>
                        </span>
                    </a>
                </div>
            </div>

        </div>
     );
}
 
export default Redirects;