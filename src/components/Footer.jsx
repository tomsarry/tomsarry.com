import React from 'react';

import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()
    return ( 
        <footer>
            <div className="info">
                <span className="cv anim">
                    <a href="/assets/cv.pdf" target="_blank" rel="noopener noreferrer">
                        {t("CV")}
                    </a>
                </span>
                <div className="contact">contact@tomsarry.com</div>              
            </div>
        </footer>
     );
}
 
export default Footer;