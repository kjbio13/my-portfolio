import React from 'react';

import './card-button.styles.scss';

const CardButton = ({ text, buttonUrl }) => {
    return (
        <div className="card-button">
            <a href={buttonUrl}>{text}</a>
        </div>
    );
};

export default CardButton;