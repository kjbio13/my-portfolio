import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import ResumeContainer from '../../components/resume-container/resume-container.component';
import HobbiesContainer from '../../components/hobbies-container/hobbies-container.component';
import ConnectContainer from '../../components/connect-container/connect-container.component';

import './personal.styles.scss'

const PersonalPage = ({ match }) => {
    return (
        <div>
            <div className="personal">
                <div className="personal__links">
                    <NavLink to="/personal/hobbies" activeClassName="active">Hobbies</NavLink>
                    <NavLink to="/personal/resume" activeClassName="active">Resume</NavLink>
                    <NavLink to="/personal/connect" activeClassName="active">Connect</NavLink>

                </div>
            </div>
            <Route
                path={`${match.path}/hobbies`}
                component={HobbiesContainer}
            />

            <Route
                path={`${match.path}/resume`}
                component={ResumeContainer}
            />

            <Route
                exact path={`${match.path}`}
                component={HobbiesContainer}
            />

            <Route
                exact path={`${match.path}/connect`}
                component={ConnectContainer}
            />
        </div>

    );
};

export default PersonalPage;