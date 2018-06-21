import React from "react";
import { connect } from "react-redux";
import * as commonActions from "../actions/commonActions";

class DummyF extends  React.Component{
  
    // decrement = ()=>{
    // 	debugger
    // 	const { dispatch } = this.props;
    	
    // 	dispatch(commonActions.decrement())

    // }

	render(){
		return (
                   <div>
                   	 <p onClick={this.props.onIncrementCounter}> increment 1</p>
                   	<p onClick={() => this.props.onAddCounter(5)}> increment 5</p>
                   	<p onClick={()=>this.props.decrement(2)}> decrement</p>



                   </div>
			)
	}


}

const mapStateToProps = (state) => {
return {
    cnt: state.increment.counter
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
    onIncrementCounter: () => dispatch(commonActions.increment()),
    // onAddCounter: value => dispatch({type: 'ADD_COUNTER', value}),
    onAddCounter: value => dispatch(commonActions.addCounter(value)),
    decrement: value => dispatch(commonActions.decrement(value)),
   }
}   
export default connect(mapStateToProps, mapDispatchToProps)(DummyF)
