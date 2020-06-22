import React from 'react';

import './development-skills.styles.scss'

import SkillsContainer from '../skills-container/skills-container.component'

import DEVELOPMENT_DATA from '../../data/development-skills.data'

class DevelopmentSkills extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            frontend_data: DEVELOPMENT_DATA.frontend,
            backend_data: DEVELOPMENT_DATA.backend,
            devops_data: DEVELOPMENT_DATA.devops,
            data: "frontend"
        }

        this.handleFrontendClick = this.handleFrontendClick.bind(this);
        this.handleBackendClick = this.handleBackendClick.bind(this);
        this.handleDevopsClick = this.handleDevopsClick.bind(this);
    }


    handleFrontendClick() {
        this.setState({
            data: "frontend"
        })
    }

    handleBackendClick() {
        this.setState({
            data: "backend"
        })
    }

    handleDevopsClick() {
        this.setState({
            data: "devops"
        })
    }

    render() {

        const { frontend_data, backend_data, devops_data, data } = this.state;

        return (
            <div>

                <div className="development-skills__links">

                    {
                        (data === "frontend")
                            ?
                            <p className="development-skills__links--active" onClick={this.handleFrontendClick}>Front End</p>
                            :
                            <p onClick={this.handleFrontendClick}>Front End</p>
                    }

                    {
                        (data === "backend")
                            ?
                            <p className="development-skills__links--active" onClick={this.handleBackendClick}>Back End</p>
                            :
                            <p onClick={this.handleBackendClick}>Back End</p>
                    }



                    {
                        (data === "devops")
                            ?
                            <p className="development-skills__links--active" onClick={this.handleDevopsClick}>Dev Ops</p> :
                            <p onClick={this.handleDevopsClick}>Dev Ops</p>
                    }


                </div>

                <div className="development-skills">

                    {(data === "frontend") ? <SkillsContainer data={frontend_data} /> : null}
                    {(data === "backend") ? <SkillsContainer data={backend_data} /> : null}
                    {(data === "devops") ? <SkillsContainer data={devops_data} /> : null}

                </div>
            </div>
        );
    }
};

export default DevelopmentSkills;