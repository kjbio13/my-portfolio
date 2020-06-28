import React from 'react';

import SocialMediaIcon from '../social-media-icon/social-media-icon.component';

import './connect-container.styles.scss'

const ConnectContainer = () => {
    return (
        <div className="connect">
            <div className="connect__social-media">
                <SocialMediaIcon color="#000" backgroundColor="#fff" size="150px" roundness="0" icon="facebook" url="https://facebook.com" />
                <SocialMediaIcon color="#fff" backgroundColor="#000" size="150px" roundness="0" icon="instagram" url="https://instagram.com" />
                <SocialMediaIcon color="#fff" backgroundColor="#000" size="150px" roundness="0" icon="dribbble" url="https://dribbble.com" />
                <SocialMediaIcon color="#000" backgroundColor="#fff" size="150px" roundness="0" icon="twitter" url="https://twitter.com" />
                <SocialMediaIcon color="#000" backgroundColor="#fff" size="150px" roundness="0" icon="behance" url="https://behance.net" />
                <SocialMediaIcon color="#fff" backgroundColor="#000" size="150px" roundness="0" icon="github" url="https://github.com" />
                <SocialMediaIcon color="#fff" backgroundColor="#000" size="150px" roundness="0" icon="mail" url="https://github.com" />
                <SocialMediaIcon color="#000" backgroundColor="#fff" size="150px" roundness="0" icon="mail" url="https://github.com" />

            </div>
        </div>
    );
};

export default ConnectContainer;