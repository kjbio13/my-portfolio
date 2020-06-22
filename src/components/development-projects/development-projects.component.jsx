import React from 'react';

import './development-projects.styles.scss';

import Card from '../card/card.component';

import DEVELOPMENT_DATA from './development.data.js';

class DevelopmentProjects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: DEVELOPMENT_DATA,
            match: props.match
        }
    }

    render() {


        const { data } = this.state;



        return (
            <div>
                <div className="development-projects">

                    {data.map(({ id, ...otherCollectionProps }) => (
                        <Card key={id} {...otherCollectionProps} />
                    ))}

                </div>
            </div>
        );
    }
};

export default DevelopmentProjects;