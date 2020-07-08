import React from 'react';

import './card-button.styles.scss';

const CardButton = ({ text, buttonUrl, theme }) => {
    return (
        <div className={`${theme.class}--card`}>
            <div className="card-button" style={{
                backgroundColor: `${theme.color3}`
            }}
            >
                <a
                    href={buttonUrl}
                    style={{
                        color: `${theme.textColor}`
                    }}>{text}</a>
            </div>
        </div>
    );
};

export default CardButton;