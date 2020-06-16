import React from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';

const SocialMediaIcon = ({icon, url}) => {
    return (
        <div>
            <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                borderWidth="0"
                borderStyle="solid"
                icon={icon}
                iconColor="#000"
                backgroundColor="#fff"
                iconSize="1" 
                roundness="50%"
                url={url}
                size="75" />
        </div>
    );
};

export default SocialMediaIcon;