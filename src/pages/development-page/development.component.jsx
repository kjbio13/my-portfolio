import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './development.styles.scss'

import DevelopmentProjects from '../../components/development-projects/development-projects.component';
import DevelopmentSkills from '../../components/development-skills/development-skills.component';


const DevelopmentPage = ({ match, ...themeProps }) => {
    return (
        <div>
            <div className="development">
                <div className={`development__links ${themeProps.class}`}>
                    <NavLink to="/development/projects" activeClassName="active">Projects</NavLink>
                    <NavLink to="/development/skills" activeClassName="active">Skills</NavLink>

                </div>
            </div>

            <Route
                exact path={"/development/"}
                component={() => <DevelopmentProjects  {...themeProps} />}
            />

            <Route
                exact path={"/development/projects"}
                component={() => <DevelopmentProjects  {...themeProps} />}
            />

            <Route
                exact path={"/development/skills"}
                component={() => <DevelopmentSkills  {...themeProps} />}
            />


        </div >
    );
};

export default DevelopmentPage;