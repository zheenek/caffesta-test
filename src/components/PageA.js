import React, {Component} from 'react';
import BackButton from './BackButton';

class PageA extends Component {

    render() {
        return(
            <div>
                <h1>A</h1>
                <BackButton />
            </div>
        );
    }
}

export default PageA;