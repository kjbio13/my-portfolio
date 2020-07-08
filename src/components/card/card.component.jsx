import React from 'react';
import './card.styles.scss'

import CardButton from '../card-button/card-button.component';

const Card = ({ imageUrl, descriptionTitle, descriptionText, buttonText1, buttonText2, buttonUrl1, buttonUrl2, theme }) => {

    const { textColor, color3 } = theme;

    return (
        <div>
            <div className="card"
                style={{
                    borderLeft: `13px solid ${color3}`
                }}>
                {console.log(theme)}
                <div className="card__image"
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}>
                </div>
                <div className="card__details"
                    style={{
                        color: `${textColor}`
                    }}>
                    {descriptionTitle} <br />
                    {descriptionText}
                </div>
                <div className="card__buttons">
                    <CardButton text={buttonText1} buttonUrl={buttonUrl1} theme={theme} />
                    <CardButton text={buttonText2} buttonUrl={buttonUrl2} theme={theme}/>
                </div>
            </div>
        </div>

    );
};

export default Card;