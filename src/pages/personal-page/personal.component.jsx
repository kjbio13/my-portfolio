import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import ResumeContainer from '../../components/resume-container/resume-container.component';
import HobbiesContainer from '../../components/hobbies-container/hobbies-container.component'

import './personal.styles.scss'

const PersonalPage = ({ match }) => {
    return (
        <div>
            <div className="personal">
                <div className="personal__links">
                    <NavLink to="/personal/hobbies" activeClassName="active">Hobbies</NavLink>
                    <NavLink to="/personal/resume" activeClassName="active">Resume</NavLink>
                    <NavLink to="/personal/contact" activeClassName="active">Contact</NavLink>

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
        </div>

    );
};

export default PersonalPage;