import React from 'react';

import './skill-bar.styles.scss';

import { ReactComponent as Star } from '../../assets/star.svg'

const SkillBar = ({ text, bar, color, textColor }) => {


    return (

        <div className="skill-bar">
            {/* <div className="skill-bar__text" style={{ width: `${bar * 23}%`, borderColor: `${color}` }}>{text} </div> */}

            {bar === 1 ?
                <div className="skill-bar__text skill-bar__text--grey"> {text} </div>
                :
                <div className="skill-bar__text" style={{ color: `${textColor}` }}> {text} </div>
            }
            <div className="skill-bar__tile">

               
                {bar === 5 ? <div>
                    <Star style={{ fill: `${textColor}` }} />
                    <Star style={{ fill: `${textColor}` }} />
                    <Star style={{ fill: `${textColor}` }} />
                    <Star style={{ fill: `${textColor}` }} />
                    <Star style={{ fill: `${textColor}` }} />
                </div> : null}
                {bar === 4 ? <div>
                    <Star style={{ fill: `${textColor}` }} />
                    <Star style={{ fill: `${textColor}` }} />
                    <Star style={{ fill: `${textColor}` }} />
                    <Star style={{ fill: `${textColor}` }} />
                </div> : null}
                {bar === 3 ? <div>
                    <Star style={{ fill: `${textColor}` }} />
                    <Star style={{ fill: `${textColor}` }} />
                    <Star style={{ fill: `${textColor}` }} />
                </div> : null}
                {bar === 2 ? <div>
                    <Star style={{ fill: `${textColor}` }} />
                    <Star style={{ fill: `${textColor}` }} />
                </div> : null}
                {bar === 1 ? <div>
                    <Star style={{ fill: "grey" }} />
                </div> : null}
            </div>
        </div>
    );
};

export default SkillBar;