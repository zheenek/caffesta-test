import React, {Component} from 'react';
import BackButton from './BackButton';

class PageB extends Component {
    stateB = () => {
        console.log("B");
    }

    render() {
        return (
            <div>
                <h1>B</h1>
                <BackButton onClick={this.stateB}/>
            </div>
        );
    }
}

export default PageB;