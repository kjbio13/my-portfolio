import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './development.styles.scss'

import DevelopmentProjects from '../../components/development-projects/development-projects.component';
import DevelopmentSkills from '../../components/development-skills/development-skills.component';


const DevelopmentPage = ({ match }) => {
    return (
        <div>
            <div className="development">
                <div className="development__links">
                    <NavLink to="/development/projects" activeClassName="active">Projects</NavLink>
                    <NavLink to="/development/skills" activeClassName="active">Skills</NavLink>

                </div>
            </div>

            <Route
                exact path={`${match.path}`}
                component={DevelopmentProjects}
            />

            <Route
                exact path={`${match.path}/projects`}
                component={DevelopmentProjects}
            />

            <Route
                exact path={`${match.path}/skills`}
                component={DevelopmentSkills}
            />


        </div>
    );
};

export default DevelopmentPage;