import React from 'react';

import SkillsList from '../skills-list/skills-list.component';

import './skills-container.styles.scss'

const SkillsContainer = ({ data }) => {
    return (
        <div className="skills-container">
            {
                data.map(({ id, ...otherProps }) => (

                    <SkillsList key={id} {...otherProps} />

                )
                )
            }

        </div>
    );
};

export default SkillsContainer;