import React from "react";
import { connect } from "react-redux";

class DummyS extends  React.Component{

	render(){
		return (
              <div> hello {this.props.value}</div>
			)
	}

}

const mapStateToProps = state => {
    console.log('chk-----',state)
    debugger
    return {
        value: state.increment.counter
    }
}

export default connect(mapStateToProps)(DummyS);
