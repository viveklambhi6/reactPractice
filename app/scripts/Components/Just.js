import React, {Component} from 'react';
// import DatePicker from 'react-date-picker';
import './just.css';

class Just extends Component {
    state = {
        date : new Date()
    }
    class="onBlur";
    // onChange = (date) => {
         
    //  this.setState({date})
    // }

    render(){
        return (
        <div>
            <p>JUST CHECK</p>
           {/* < DatePicker
            onChange={this.onChange}
            value={this.state.date}
            
            /> */}
           
        </div>
        )
    }
}

export default Just;