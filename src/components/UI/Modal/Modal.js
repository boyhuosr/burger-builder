import React, { Component } from 'react';
import classes from './Modal.module.css';
import Auu from '../../../hoc/Auu'
import Backdrop from '../Backdrop/Backdrop'


class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show
    }

    componentWillUpdate () {
        console.log('Modal will update')
    }
    render() { 
        return ( 
            <Auu>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                        opacity: this.props.show ? '1': '0'
                    }}
                >
                    {this.props.children}
                </div> 
            </Auu> 
         );
    }
}
 
export default Modal;
