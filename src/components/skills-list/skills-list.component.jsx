import React from 'react';

import SkillsBar from '../skill-bar/skill-bar.component';

import './skills-list.styles.scss'

const SkillsList = ({ name, items, textColor }) => {
    return (
        <div className="skills-list">
            <strong style={{ color: `${textColor}` }}>{name}</strong>
            {
                items.map(({ id, ...otherProps }) => (
                    <SkillsBar key={id} {...otherProps} textColor={textColor} />
                )

                )
            }
        </div>
    );
};

export default SkillsList;