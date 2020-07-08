import React from 'react';

import './footer.styles.scss'

const Footer = ({...themeProps}) => {
    return (
        <div className="footer">
            <div style={{ color: `${themeProps.textColor}` }}  className="footer-text">Created with React. All Rights Reserved. Kevin Jefferson © </div>
        </div>
    );
};

export default Footer;