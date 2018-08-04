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
        labelValue: "A",
        firstModalOpen: false,
        secondModalOpen: false
    }

    handleClick = () => {
        const buttonB = document.getElementById("B");
        if(this.state.labelValue === "A") {
            this.setState({
                labelValue: "A"
            });
        }
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
            <div>
                <Label currentValue={this.state.labelValue}/>
                <NavLink to="/a"><Button id="A" onClick={this.handleClick} text="A"/></NavLink>
                <Button id="B" onClick={this.handleClick} text="B"/>

                {/*FIRST MODAL*/}
                <Modal isOpen={this.state.firstModalOpen} style={modalStyle}>
                    <h1>First Modal</h1>
                    <hr/>
                    <button onClick={this.openSecondModal}>Ok</button>
                    <button id="closeFirstModal" onClick={this.closeModal}>Cancel</button>
                </Modal>

                {/*SECOND MODAL*/}
                <Modal isOpen={this.state.secondModalOpen} style={modalStyle}>
                    <h1>Second Modal</h1>
                    <hr/>
                    <NavLink to="/b"><button>Ok</button></NavLink>
                    <button id="closeSecondModal" onClick={this.closeModal}>Cancel</button>
                </Modal>
            </div>
        );
    }
}

export default Application;