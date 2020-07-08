import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import DesignProjects from '../../components/design-projects/design-projects.component';
import DesignSkills from '../../components/design-skills/design-skills.component';


import './design.styles.scss'

const DesignPage = ({ match, ...themeProps }) => {
    return (
        <div>
            <div className="design">
                <div className={`design__links ${themeProps.class}`}>
                    <NavLink to="/design/projects" activeClassName="active">Projects</NavLink>
                    <NavLink to="/design/skills" activeClassName="active">Skills</NavLink>

                </div>
            </div>

            <Route
                path={"/design/projects"}
                component={() => <DesignProjects  {...themeProps} />}
            />

            <Route
                path={"/design/skills"}
                component={() => <DesignSkills  {...themeProps} />}
            />

            <Route
                exact path={"/design/"}
                component={() => <DesignProjects  {...themeProps} />}
            />
        </div>

    );
};

export default DesignPage;