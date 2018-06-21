import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import store from './store'
import Header from './Components/Header/Header';
import mainStyle from '../styles/main.css';
import { BrowserRouter as Router, Route, browserHistory} from 'react-router-dom';
import App from './Components/App';
import Main from './Components/Main';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer/Footer';




export default class Layout extends React.Component{
	constructor(props) {
		super(props);
		console.log("workss")
	}

	render(){
		return(
		<div>
			<Router>
			<Header/>
				<div>
					
					<Route exact path='/' component = {HomePage} />
					<Route path = '/rfq' component={App} />
					<Route exact path = '/my-action' component={Just} />
            		<Route exact path = '/PR-approval' component={About} />
            		<Route exact path = '/create-pr' component={Modal} />
					
				</div>
				<Footer />
			</Router>		 
		</div>);
	}

}

ReactDom.render(<Provider store={store}><Layout /></Provider>,document.getElementById('app'));
