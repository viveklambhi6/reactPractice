import React, { Component } from 'react';
import styles from './Modal.css';
// import Button,{ CheckBox } from './InputElements';

export default class Modal extends Component {
    // this.closeModal=this.closeModal.bind(this);
    
    closeModal(event){
        event.preventDefault();
        // alert("clicked")
        this.props.onClose();
        console.log(event)
    }
    render(props) {
       const style = {
           'width':this.props.width,
       }
       if(this.props.isOpen===false)
            return null
        return (
            
            <div className={styles.modalbody}>
                <div className={styles.modal} style={style}>

                    <div>{this.props.children}</div>
                    {/* <CheckBox></CheckBox> */}
                    {/* <Button type='submit'>Submit</Button> */}
                    <span className={styles.crossBtn} onClick={this.closeModal.bind(this)}>x</span>
                </div>                
            </div>
        )
    }
}

 