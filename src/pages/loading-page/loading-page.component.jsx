import React from 'react';

import './loading-page.styles.scss'
import { ReactComponent as Logo } from '../../assets/K.svg';

const LoadingPage = () => {
    return (
        <div className="kevin-logo">
            <div className="kevin-logo__first">LOADING</div>
            <div><Logo /></div>
            <div>LOADING</div>
        </div>
    );
};

export default LoadingPage;