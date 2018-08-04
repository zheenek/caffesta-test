import React from 'react';
import Button from './Button';

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.handler = this.handler.bind(this);
    }

    handler(e) {
        e.preventDefault();
        this.setState({
            someVar: "Some Val"
        });
    }

    render() {
        return <Child handler={this.handler} />
    }
}

class Child extends React.Component {
    render() {
        return <Button onClick = {this.props.handler} />
    }
}