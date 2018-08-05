import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Label from './Label';
import Button from './Button';
import Modal from 'react-modal';

const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        width: '350px',
        height: '175px',
        textAlign: 'center',
        transform: 'translate(-50%, -50%)'
    }
};

class Application extends Component {
    state = {
        firstModalOpen: false,
        secondModalOpen: false
    }

    openModal = () => this.setState({firstModalOpen: true});
    openSecondModal = () => this.setState({secondModalOpen: true});
    
    closeFirstModal = () => this.setState({firstModalOpen: false});
    closeSecondModal = () => this.setState({secondModalOpen: false});

    render() {
        const active = this.props.letter;
        return (
            <div className="container">
                <Label currentValue={this.props.letter}/>
                <NavLink exact to="/a"><Button className={active==="A" ? "active" : ''} onClick={this.props.switchToA} text="A"/></NavLink>
                <Button id="btnB" className={active==="B" ? "active" : ''} onClick={this.openModal} text="B"/>

                {/*FIRST MODAL*/}
                <Modal isOpen={this.state.firstModalOpen} style={modalStyle} ariaHideApp={false}>
                    <h2>First Modal</h2>
                    <Button onClick={this.openSecondModal} text="Ok" />
                    <Button onClick={this.closeFirstModal} text="Cancel"/>
                </Modal>

                {/*SECOND MODAL*/}
                <Modal isOpen={this.state.secondModalOpen} style={modalStyle} ariaHideApp={false}>
                    <h2>Second Modal</h2>
                    <NavLink to="/b"><Button onClick={this.props.switchToB} text="Ok" /></NavLink>
                    <Button onClick={this.closeSecondModal} text="Cancel" />
                </Modal>
            </div>
        );
    }
}

export default Application;