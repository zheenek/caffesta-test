import React, { Component } from 'react';
import Application from './App';
import {Route, Link} from 'react-router-dom';

class BackButton extends Component {
    render() {
        return (
            <div>
                <Link to="/"><button onClick={this.props.onClick}>Back</button></Link>
                <Route exact path="/" component={Application}/>
            </div>
        );
    }
}

export default BackButton;