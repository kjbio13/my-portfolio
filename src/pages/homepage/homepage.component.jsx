import React from 'react';

import './homepage.styles.scss'

import profilePhoto from '../../assets/profile-photo.png'
import SocialMediaIcon from '../../components/social-media-icon/social-media-icon.component'


const HomePage = () => {

    return (
        <div className="homepage">
            <div className="homepage__profile-photo"><img src={profilePhoto} alt="" /></div>
            <div className="homepage__description">

                Hi! I'm Kevin. <br /> A <strong>junior full stack developer</strong> with a passion for <strong>design</strong>.
                </div>
            <div className="homepage__social-media">
                <SocialMediaIcon size="75" roundness="50%" icon="facebook" color="#000" backgroundColor="#fff" url="https://facebook.com" />
                <SocialMediaIcon size="75" roundness="50%" icon="instagram" color="#000" backgroundColor="#fff" url="https://instagram.com" />
                <SocialMediaIcon size="75" roundness="50%" icon="twitter" color="#000" backgroundColor="#fff" url="https://twitter.com" />
                <SocialMediaIcon size="75" roundness="50%" icon="dribbble" color="#000" backgroundColor="#fff" url="https://dribbble.com" />
                <SocialMediaIcon size="75" roundness="50%" icon="behance" color="#000" backgroundColor="#fff" url="https://behance.net" />
                <SocialMediaIcon size="75" roundness="50%" icon="github" color="#000" backgroundColor="#fff" url="https://github.com" />
            </div>
        </div>

    );
};

export default HomePage;