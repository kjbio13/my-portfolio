import React from 'react';

import './development-skills.styles.scss'

import SkillsBar from '../skill-bar/skill-bar.component'

import SKILLS_DATA from '../../data/skills.data'

class DevelopmentSkills extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: SKILLS_DATA
        }
    }

    render() {

        const { data } = this.state;
        
        return (
            <div className="development-skills">
                <div className="development-skills__frontend">
                    <h3>Front End</h3>
                    {
                        data.development.frontend.map(({ id, ...otherProps }) => (
                            <SkillsBar key={id} {...otherProps} />
                        )

                        )
                    }

                </div>
                <div className="development-skills__backend">
                    <h3>Backend</h3>
                    <SkillsBar text="Node.js" bar={4} />
                    <SkillsBar text="Express" bar={4} />
                    <SkillsBar text="Java" bar={3} />
                    <SkillsBar text="Python" bar={2} />
                    <SkillsBar text="Django" bar={2} />
                    <SkillsBar text="C#" bar={3} />

                </div>
                <div className="development-skills__graphic">
                    <h3>Version Control & Testing</h3>
                    <SkillsBar text="Graphic Design" bar={4} />
                    <SkillsBar text="Graphic Design" bar={4} />
                </div>

            </div>
        );
    }
};

export default DevelopmentSkills;