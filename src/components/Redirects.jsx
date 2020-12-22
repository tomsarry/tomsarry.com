import React, { Component } from 'react';
// import { withTranslation } from 'react-i18next'
import { useTranslation } from 'react-i18next';


const Redirects = () => {
    const { t } = useTranslation()
    return ( 
        <div className="landing-main">
            <h1 className="name">tomsarry</h1>
            {/* <code>Student at McGill University in CS</code> */}
        
            <div className="table-links">
                <div>{t('Technologies')}<span></span></div>
                <div>{t('Projects')}<span></span></div>
                <div>{t('Smaller Projects')}<span></span></div>
            </div>

        </div>
     );
}
 
export default Redirects;