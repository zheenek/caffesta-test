import React, { Component } from 'react';

class Label extends Component {
    render() {
        return (
            <h1>{this.props.currentValue}</h1>
        );
    }
}

export default Label;