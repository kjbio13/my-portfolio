import React from 'react';

import SkillsBar from '../skill-bar/skill-bar.component';

import './skills-list.styles.scss'

const SkillsList = ({ name, items }) => {
    return (
        <div className="skills-list">
            <strong>{name}</strong>
            {
                items.map(({ id, ...otherProps }) => (
                    <SkillsBar key={id} {...otherProps} />
                )

                )
            }
        </div>
    );
};

export default SkillsList;