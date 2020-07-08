import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import ResumeContainer from '../../components/resume-container/resume-container.component';
import HobbiesContainer from '../../components/hobbies-container/hobbies-container.component';
import ConnectContainer from '../../components/connect-container/connect-container.component';

import './personal.styles.scss'

const PersonalPage = ({ match, ...themeProps }) => {
    return (
        <div>
            <div className="personal">
                <div className={`personal__links  ${themeProps.class}`}>
                    <NavLink to="/personal/hobbies" activeClassName="active">Hobbies</NavLink>
                    <NavLink to="/personal/resume" activeClassName="active">Resume</NavLink>
                    <NavLink to="/personal/connect" activeClassName="active">Connect</NavLink>

                </div>
            </div>
            <Route
                path={"/personal/hobbies"}
                component={() => <HobbiesContainer {...themeProps} />}
            />

            <Route
                path={"/personal/resume"}
                component={() => <ResumeContainer {...themeProps} />}
            />

            <Route
                exact path={"/personal/"}
                component={() => <HobbiesContainer {...themeProps} />}
            />

            <Route
                exact path={"/personal/connect"}
                component={() => <ConnectContainer {...themeProps} />}
            />
        </div>

    );
};

export default PersonalPage;