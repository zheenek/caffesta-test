import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';

class BackButton extends Component {
    render() {
        return (
            <div>
                <NavLink to="/"><button >Back</button></NavLink>
                <Route exact path="/" render={this.props.rendered}/>
            </div>
        );
    }
}

export default BackButton;