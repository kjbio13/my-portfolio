import React from 'react';

import { ReactComponent as Star } from '../../assets/star.svg';
import '../skills-legend/skills-legend.styles.scss';

const SkillsLegend = ({textColor}) => {
    return (
        <div className="legend" style={{ color: `${textColor}` }}>
            <div className="legend__rate" >
                <div className="legend__rate__text">Confident</div>
                <div className="legend__rate__star"><Star style={{ fill: `${textColor}` }}/><Star style={{ fill: `${textColor}` }}/><Star style={{ fill: `${textColor}` }}/><Star style={{ fill: `${textColor}` }}/><Star style={{ fill: `${textColor}` }}/></div>
            </div>
            <div className="legend__rate">
                <div className="legend__rate__text">Good</div>
                <div className="legend__rate__star"><Star style={{ fill: `${textColor}` }}/><Star style={{ fill: `${textColor}` }}/><Star style={{ fill: `${textColor}` }}/><Star style={{ fill: `${textColor}` }}/></div>
            </div>
            <div className="legend__rate">
                <div className="legend__rate__text">Needs Practice</div>
                <div className="legend__rate__star"><Star style={{ fill: `${textColor}` }}/><Star style={{ fill: `${textColor}` }}/><Star style={{ fill: `${textColor}` }}/></div>
            </div>
            <div className="legend__rate">
                <div className="legend__rate__text">Learning</div>
                <div className="legend__rate__star"><Star style={{ fill: `${textColor}` }}/><Star style={{ fill: `${textColor}` }}/></div>
            </div>
            <div className="legend__rate">
                <div className="legend__rate__text">On My List To Learn</div>
                <div className="legend__rate__star"><Star style={{ fill: "grey" }} /></div>
            </div>


        </div>
    );
};

export default SkillsLegend;