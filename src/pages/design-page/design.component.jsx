import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import DesignProjects from '../../components/design-projects/design-projects.component'
import DesignSkills from '../../components/design-skills/design-skills.component'

import './design.styles.scss'

const DesignPage = ({ match }) => {
    return (
        <div>
            <div className="design">
                <div className="design__links">
                    <NavLink to="/design/skills" activeClassName="active">Skills</NavLink>
                    <NavLink to="/design/projects" activeClassName="active">Projects</NavLink>
                </div>
            </div>
            <Route
                path={`${match.path}/projects`}
                component={DesignProjects}
            />

            <Route
                path={`${match.path}/skills`}
                component={DesignSkills}
            />

            <Route
                exact path={`${match.path}`}
                component={DesignSkills}
            />

            <Route
                exact path={`${match.path}`}
                component={DesignProjects}
            />
        </div>

    );
};

export default DesignPage;