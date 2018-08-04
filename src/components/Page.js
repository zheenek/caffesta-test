import React, { Component } from 'react';
import BackButton from './BackButton';

class Page extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.letter}</h1>
                <BackButton />
            </div>
        );
    }
}

export default Page;