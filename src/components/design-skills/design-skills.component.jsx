import React from 'react';

import './design-skills.styles.scss'

import SkillsBar from '../skill-bar/skill-bar.component'

import SKILLS_DATA from '../../data/skills.data';

class DesignSkills extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            data: SKILLS_DATA
        }
    }



    render() {


        const { data } = this.state;

        return (
            <div className="design-skills">
                <div className="design-skills__tech">
                    <h3>Technical</h3>
                    {
                        data.design.tech.map(({ id, ...otherProps }) => (
                            <SkillsBar key={id} {...otherProps} />
                        )

                        )
                    }
                </div>
                <div className="design-skills__user">
                    <h3>User</h3>
                    {
                        data.design.user.map(({ id, ...otherProps }) => (
                            <SkillsBar key={id} {...otherProps} />
                        )

                        )
                    }
                </div>
                <div className="design-skills__graphic">
                    <h3>Graphic</h3>
                    {
                        data.design.graphic.map(({ id, ...otherProps }) => (
                            <SkillsBar key={id} {...otherProps} />
                        )

                        )
                    }
                </div>
            </div>
        );
    }
};

export default DesignSkills;