import React, { Component } from 'react';
import Application from './App';
import {Route, NavLink} from 'react-router-dom';

class BackButton extends Component {
    render() {
        return (
            <div>
                <NavLink to="/"><button onClick={this.props.onClick}>Back</button></NavLink>
                <Route exact path="/" component={Application}/>
            </div>
        );
    }
}

export default BackButton;