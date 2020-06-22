import React from 'react';

import './skill-bar.styles.scss';

const SkillBar = ({ text, bar, color }) => {



    return (

        <div className="skill-bar">
            <div className="skill-bar__text" style={{ width: `${bar * 23}%`, borderColor: `${color}` }}>{text}</div>
            {/* <div className="skill-bar__tile" style={{ width: `${bar * 35}px`, backgroundColor: `${color}` }}>

                {bar === 4 ? "Confident" : null}
                {bar === 3 ? "Good" : null}
                {bar === 2 ? "Improving" : null}
                {bar === 1 ? "Learning" : null}

            </div> */}
        </div>
    );
};

export default SkillBar;