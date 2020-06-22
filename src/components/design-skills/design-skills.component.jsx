import React from 'react';

import './design-skills.styles.scss'

import SkillsContainer from '../skills-container/skills-container.component'

import DESIGN_DATA from '../../data/design-skills.data'

class designSkills extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            graphic_data: DESIGN_DATA.graphic,
            uiux_data: DESIGN_DATA.uiux,
            branding_data: DESIGN_DATA.branding,
            data: "graphic"
        }

        this.handleGraphicClick = this.handleGraphicClick.bind(this);
        this.handleUIUXClick = this.handleUIUXClick.bind(this);
        this.handleBrandingClick = this.handleBrandingClick.bind(this);
    }


    handleGraphicClick() {
        this.setState({
            data: "graphic"
        })
    }

    handleUIUXClick() {
        this.setState({
            data: "uiux"
        })
    }

    handleBrandingClick() {
        this.setState({
            data: "branding"
        })
    }

    render() {

        const { graphic_data, uiux_data, branding_data, data } = this.state;

        return (
            <div>

                <div className="design-skills__links">

                    {
                        (data === "graphic")
                            ?
                            <p className="design-skills__links--active" onClick={this.handleGraphicClick}>Graphic</p>
                            :
                            <p onClick={this.handleGraphicClick}>Graphic</p>
                    }

                    {
                        (data === "uiux")
                            ?
                            <p className="design-skills__links--active" onClick={this.handleUIUXClick}>UI/UX</p>
                            :
                            <p onClick={this.handleUIUXClick}>UI/UX</p>
                    }



                    {
                        (data === "branding")
                            ?
                            <p className="design-skills__links--active" onClick={this.handleBrandingClick}>Branding</p> :
                            <p onClick={this.handleBrandingClick}>Branding</p>
                    }


                </div>

                <div className="design-skills">

                    {(data === "graphic") ? <SkillsContainer data={graphic_data} /> : null}
                    {(data === "uiux") ? <SkillsContainer data={uiux_data} /> : null}
                    {(data === "branding") ? <SkillsContainer data={branding_data} /> : null}

                </div>
            </div>
        );
    }
};

export default designSkills;