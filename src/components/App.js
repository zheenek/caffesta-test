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
        letter: "A",
        isActive: true,
        firstModalOpen: false,
        secondModalOpen: false
    }

    setA = () => {
        this.setState({
            letter: "A"
        });
        console.log(this.state.letter);
    }

    setB = () => {
        this.setState({
            letter: "B"
        });
        console.log(this.state.letter);
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
                <Label currentValue={this.state.letter}/>
                <NavLink exact to="/a"><Button id="btnA" onClick={this.setA} text="A"/></NavLink>
                <Button id="btnB" onClick={this.openModal} text="B"/>

                {/*FIRST MODAL*/}
                <Modal isOpen={this.state.firstModalOpen} style={modalStyle} ariaHideApp={false}>
                    <h2>First Modal</h2>
                    <Button onClick={this.openSecondModal} text="Ok" />
                    <Button id="closeFirstModal" onClick={this.closeModal} text="Cancel"/>
                </Modal>

                {/*SECOND MODAL*/}
                <Modal isOpen={this.state.secondModalOpen} style={modalStyle} ariaHideApp={false}>
                    <h2>Second Modal</h2>
                    <NavLink to="/b"><Button id="openB" onClick={this.setB} text="Ok" /></NavLink>
                    <Button id="closeSecondModal" onClick={this.closeModal} text="Cancel" />
                </Modal>
            </div>
        );
    }
}

export default Application;