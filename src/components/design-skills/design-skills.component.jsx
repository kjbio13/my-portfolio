import React from 'react';

import './design-skills.styles.scss'

import SkillsBar from '../skill-bar/skill-bar.component'


const DesignSkills = () => {
    return (
        <div className="design-skills">
            <SkillsBar text="Adobe Photoshop" bar={4} />
            <SkillsBar text="Adobe Illustrator" bar={4} />
            <SkillsBar text="Adobe InDesign" bar={3} />
            <SkillsBar text="After Effects" bar={4} />
            <SkillsBar text="UI" bar={3} />
            <SkillsBar text="UX" bar={2} />
        </div>
    );
};

export default DesignSkills;