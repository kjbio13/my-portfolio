import React from 'react';
import './card.styles.scss'

import CardButton from '../card-button/card-button.component';

const Card = ({ imageUrl, descriptionTitle, descriptionText, buttonText1, buttonText2, buttonUrl1, buttonUrl2 }) => {
    return (
        <div>
            <div className="card">
                <div className="card__image"
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}>
                </div>
                <div className="card__details">
                    {descriptionTitle} <br />
                    {descriptionText}
                </div>
                <div className="card__buttons">
                    <CardButton text={buttonText1} buttonUrl={buttonUrl1} />
                    <CardButton text={buttonText2} buttonUrl={buttonUrl2} />
                </div>
            </div>
        </div>

    );
};

export default Card;