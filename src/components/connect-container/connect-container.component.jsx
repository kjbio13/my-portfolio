import React from 'react';

import SocialMediaIcon from '../social-media-icon/social-media-icon.component';

import './connect-container.styles.scss'

const ConnectContainer = ({ ...themeProps }) => {

    let inverse = "#000";
    let blank = "#fff"

    if (themeProps.color3 !== "") {
        inverse = themeProps.color3;
    }
    if (themeProps.class === "oasis") {
        inverse = "#000";
        blank = themeProps.color3;
    }

    return (
        <div className="connect">
            <div className="connect__social-media">
                <SocialMediaIcon color={inverse} backgroundColor={blank} size="150px" roundness="0" icon="facebook" url="https://facebook.com" />
                <SocialMediaIcon color={blank} backgroundColor={inverse} size="150px" roundness="0" icon="instagram" url="https://instagram.com" />
                <SocialMediaIcon color={blank} backgroundColor={inverse} size="150px" roundness="0" icon="dribbble" url="https://dribbble.com" />
                <SocialMediaIcon color={inverse} backgroundColor={blank} size="150px" roundness="0" icon="twitter" url="https://twitter.com" />
                <SocialMediaIcon color={inverse} backgroundColor={blank} size="150px" roundness="0" icon="behance" url="https://behance.net" />
                <SocialMediaIcon color={blank} backgroundColor={inverse} size="150px" roundness="0" icon="github" url="https://github.com" />
                <SocialMediaIcon color={blank} backgroundColor={inverse} size="150px" roundness="0" icon="mail" url="https://github.com" />
                <SocialMediaIcon color={inverse} backgroundColor={blank} size="150px" roundness="0" icon="mail" url="https://github.com" />

            </div>
        </div>
    );
};

export default ConnectContainer;