import React from 'react';

import './skill-bar.styles.scss';

const SkillBar = ({ text, bar, color }) => {



    return (

        <div className="skill-bar">
            <div className="skill-bar__text">{text}</div>
            <div className="skill-bar__tile" style={{ width: `${bar * 30}px`, backgroundColor: `${color}` }}>

                {bar === 4 ? "Confident" : null}
                {bar === 3 ? "Good" : null}
                {bar === 2 ? "Learning" : null}
                {bar === 1 ? "On My List" : null}

            </div>
        </div>
    );
};

export default SkillBar;