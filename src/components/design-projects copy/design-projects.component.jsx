import React from 'react';

import './design-projects.styles.scss';

import Card from '../card/card.component';

import DESIGN_DATA from './design.data.js';

class DesignProjects extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {
            data: DESIGN_DATA
        }
    }

    render() {


        const { data } = this.state;


        return (
            <div>
                <div className="design-projects">

                    {data.map(({ id, ...otherCollectionProps }) => (
                        <Card key={id} {...otherCollectionProps} />
                    ))}


                </div>
            </div>
        );
    }
};

export default DesignProjects;