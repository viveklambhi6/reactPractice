import React,{ Component } from 'react';
import Style from '../../styles/formelement.css';
class InputText extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        console.log(e);
    }
    render(){
        return(
            <div className={Style['form-element']}>
                <label className={Style['label-text']} htmlFor={this.props.label}>{this.props.label}</label>
                <input className={Style.inputTextWrapper} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default InputText;
