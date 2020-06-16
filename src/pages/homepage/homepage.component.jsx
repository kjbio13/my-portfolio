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
                    <SocialMediaIcon icon="facebook" url="https://facebook.com" />
                    <SocialMediaIcon icon="instagram" url="https://instagram.com" />
                    <SocialMediaIcon icon="twitter" url="https://twitter.com" />
                    <SocialMediaIcon icon="dribbble" url="https://dribbble.com" />
                    <SocialMediaIcon icon="behance" url="https://behance.net" />
                    <SocialMediaIcon icon="github" url="https://github.com" />
                </div>
            </div>
       
    );
};

export default HomePage;