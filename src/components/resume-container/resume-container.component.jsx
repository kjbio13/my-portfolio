import React from 'react';

import './resume-container.styles.scss';

import ProfilePhoto from '../../assets/profile-photo.png';
import Resume from '../../assets/resume.pdf'
import ResumeWorkExperience from './resume-container-work.component';
import ResumeSkills from './resume-container-skills.component';

const ResumeContainer = () => {
    return (
        <div className="resume">
            <div className="resume__download">
                <a href={Resume} download>DOWNLOAD</a>
            </div>
            <div className="resume__header">
                <div className="resume__header__photo">
                    <img src={ProfilePhoto} alt="" />
                </div>
                <div className="resume__header__name"><h2>Kevin Jefferson Souribio</h2></div>
                <div className="resume__header__details-1">
                    <ul>
                        <li><strong>First Name:</strong></li>
                        <li>Kevin Jefferson</li>
                        <li><br /></li>
                        <li><strong>Last Name:</strong></li>
                        <li>Souribio</li>
                        <li><br /></li>
                        {/* <li><strong>Date of Birth:</strong></li> */}
                        {/* <li>13/01/1993</li> */}


                    </ul>
                </div>
                <div className="resume__header__details-2">
                    <ul>
                        <li><strong>Location:</strong></li>
                        <li>London, United Kingdom</li>
                        <li><br /></li>
                        {/* <li><strong>Phone Number:</strong></li> */}
                        {/* <li>07825124571</li> */}
                        <li><br /></li>
                        <li><strong>Email Address:</strong></li>
                        <li>kevinsouribio13@gmail.com</li>
                    </ul>
                </div>
                <div className="resume__header__profile__title"><h3>PROFILE</h3></div>
                <div className="resume__header__profile__title__details">
                    A junior full stack developer with a passion for design
                    (UI/UX and Graphic) with 3 years’ experience in the technology
                    field and a year’s working as a software engineer.
                </div>
            </div>
            <ResumeWorkExperience />
            <ResumeSkills />
        </div>
    );
};

export default ResumeContainer;