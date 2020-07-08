import React from 'react';

import './hobbies-container.styles.scss';

import HOBBIES_DATA from './hobbies.data'
import Card from '../card/card.component';

class HobbiesContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: HOBBIES_DATA,
            match: props.match
        }
    }

    render() {


        const { data } = this.state;



        return (
            <div>
                <div className="development-projects">

                    {data.map(({ id, ...otherCollectionProps }) => (
                        <Card key={id} {...otherCollectionProps} theme={this.props}/>
                    ))}

                </div>
            </div>
        );
    }
};
export default HobbiesContainer;