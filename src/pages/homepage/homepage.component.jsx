import React from 'react';

import './homepage.styles.scss'

import profilePhoto from '../../assets/profile-photo.png'
import SocialMediaIcon from '../../components/social-media-icon/social-media-icon.component'


const HomePage = ({ ...themeProps }) => {

    return (
        <div className="homepage">
            <div className="homepage__profile-photo"><img src={profilePhoto} alt="" /></div>

            <div
                className="homepage__description"
                style={{ color: `${themeProps.textColor}` }}
            >

                Hi! I'm Kevin. <br /> A <strong>junior full stack developer</strong> with a passion for <strong>design</strong>.
                </div>

            <div className="homepage__social-media">
                <SocialMediaIcon size="75" roundness="50%" icon="facebook" color={themeProps.textColor} backgroundColor={themeProps.color3} url="https://facebook.com" />
                <SocialMediaIcon size="75" roundness="50%" icon="instagram" color={themeProps.textColor} backgroundColor={themeProps.color3} url="https://instagram.com" />
                <SocialMediaIcon size="75" roundness="50%" icon="twitter" color={themeProps.textColor} backgroundColor={themeProps.color3} url="https://twitter.com" />
                <SocialMediaIcon size="75" roundness="50%" icon="dribbble" color={themeProps.textColor} backgroundColor={themeProps.color3} url="https://dribbble.com" />
                <SocialMediaIcon size="75" roundness="50%" icon="behance" color={themeProps.textColor} backgroundColor={themeProps.color3} url="https://behance.net" />
                <SocialMediaIcon size="75" roundness="50%" icon="github" color={themeProps.textColor} backgroundColor={themeProps.color3} url="https://github.com" />
            </div>
        </div>

    );
};

export default HomePage;