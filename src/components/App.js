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

    handleClick = () => {
        const buttonB = document.getElementById("B");
        if(buttonB) {
            this.openModal();
        }
    }

    openModal = () => {
        this.setState({
            firstModalOpen: true
        });
    }

    openSecondModal = () => {
        this.setState({
            secondModalOpen: true
        });
    }

    closeModal = () => {
        const cancelOne = document.getElementById("closeFirstModal");
        const cancelTwo = document.getElementById("closeSecondModal");

        if(cancelTwo) {
            this.setState({
                secondModalOpen: false
            });
        } else if (cancelOne) {
            this.setState({
                firstModalOpen: false
            });
        }
    }

    render() {
        return (
            <div className="container">
                <Label currentValue={this.props.labelValue}/>
                <NavLink to="/a"><Button id="A" className="active" onClick={this.handleClick} text="A"/></NavLink>
                <Button id="B" onClick={this.handleClick} text="B"/>

                {/*FIRST MODAL*/}
                <Modal isOpen={this.state.firstModalOpen} style={modalStyle} ariaHideApp={false}>
                    <h2>First Modal</h2>
                    <Button onClick={this.openSecondModal} text="Ok" />
                    <Button id="closeFirstModal" onClick={this.closeModal} text="Cancel"/>
                </Modal>

                {/*SECOND MODAL*/}
                <Modal isOpen={this.state.secondModalOpen} style={modalStyle} ariaHideApp={false}>
                    <h2>Second Modal</h2>
                    <NavLink to="/b"><Button text="Ok" /></NavLink>
                    <Button id="closeSecondModal" onClick={this.closeModal} text="Cancel" />
                </Modal>
            </div>
        );
    }
}

export default Application;