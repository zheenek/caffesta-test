import React, {Component} from 'react';
import BackButton from './BackButton';

class PageA extends Component {
    stateA = () =>{
        this.setState({
            labelValue: "A"
        });
    }

    render() {
        return(
            <div>
                <h1>A</h1>
                <BackButton onClick={this.stateA}/>
            </div>
        );
    }
}

export default PageA;