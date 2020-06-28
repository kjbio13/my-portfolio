import React from 'react';

import './design-skills.styles.scss'

import SkillsContainer from '../skills-container/skills-container.component'

import DESIGN_DATA from '../../data/design-skills.data'
import SkillsLegend from '../../components/skills-legend/skills-legend.component';

class designSkills extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            tools_data: DESIGN_DATA.tools,
            uiux_data: DESIGN_DATA.uiux,
            coding_data: DESIGN_DATA.coding,
            data: "tools"
        }

        this.handleToolsClick = this.handleToolsClick.bind(this);
        this.handleUIUXClick = this.handleUIUXClick.bind(this);
        this.handlecodingClick = this.handlecodingClick.bind(this);
    }


    handleToolsClick() {
        this.setState({
            data: "tools"
        })
    }

    handleUIUXClick() {
        this.setState({
            data: "uiux"
        })
    }

    handlecodingClick() {
        this.setState({
            data: "coding"
        })
    }

    render() {

        const { tools_data, uiux_data, coding_data, data } = this.state;

        return (
            <div>

                <div className="design-skills__links">

                    {
                        (data === "tools")
                            ?
                            <p className="design-skills__links--active" onClick={this.handleToolsClick}>Tools</p>
                            :
                            <p onClick={this.handleToolsClick}>Tools</p>
                    }

                    {
                        (data === "uiux")
                            ?
                            <p className="design-skills__links--active" onClick={this.handleUIUXClick}>UI/UX</p>
                            :
                            <p onClick={this.handleUIUXClick}>UI/UX</p>
                    }



                    {
                        (data === "coding")
                            ?
                            <p className="design-skills__links--active" onClick={this.handlecodingClick}>Coding</p> :
                            <p onClick={this.handlecodingClick}>Coding</p>
                    }


                </div>
                
                    <SkillsLegend />
               
                <div className="design-skills">

                    {(data === "tools") ? <SkillsContainer data={tools_data} /> : null}
                    {(data === "uiux") ? <SkillsContainer data={uiux_data} /> : null}
                    {(data === "coding") ? <SkillsContainer data={coding_data} /> : null}

                </div>
            </div>
        );
    }
};

export default designSkills;