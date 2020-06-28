import React from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';

const SocialMediaIcon = ({icon, url, color, backgroundColor, roundness, size}) => {
    return (
        <div>
            <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                borderWidth="0"
                borderStyle="solid"
                icon={icon}
                iconColor={color}
                backgroundColor={backgroundColor}
                iconSize="1" 
                roundness={roundness}
                url={url}
                size={size} />
        </div>
    );
};

export default SocialMediaIcon;