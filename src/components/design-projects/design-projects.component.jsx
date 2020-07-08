import React from 'react';

import './design-projects.styles.scss';

import Card from '../../components/card/card.component';

import DESIGN_DATA from './design.data.js';

class DesignProjects extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {
            data: DESIGN_DATA,
            match: props.match
        }
    }

    render() {


        const { data } = this.state;



        return (
            <div>
                <div className="design-projects">

                    {data.map(({ id, ...otherCollectionProps }) => (
                        <Card key={id} {...otherCollectionProps} theme={this.props}/>
                    ))}


                </div>
            </div>
        );
    }
};

export default DesignProjects;