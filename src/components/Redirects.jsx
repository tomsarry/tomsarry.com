import React from 'react';
// import { withTranslation } from 'react-i18next'
import { useTranslation } from 'react-i18next';


const Redirects = () => {
    const { t } = useTranslation()
    return ( 
        <div className="landing-main">
            <h1 className="name">tomsarry</h1>
            {/* <code>Student at McGill University in CS</code> */}
        
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