import React,{ Component } from 'react';
import Scroll from '../../Util/Scroll'
import ENV_VARIABLE from "../../Util/Environment";
import { Link } from 'react-router-dom';
import Style from './navbar.css';
import mainStyle from '../../../styles/main.css';
class NavBar extends Component{
    constructor(props){
        super(props);
        console.log(props);
       
    }
    onListClick(e){
		debugger;
		if(e.target.value !== 4){
			setTimeout(function(){
				Scroll.scroll(location.hash.substring(1,location.hash.length));
		 	}, 100);
		}
	}
  
    render(){
        return(
            <div className={Style.navHeight}>
             <ul className={mainStyle['flex-center']+ ' ' +mainStyle['align-center']+' '+mainStyle['space-evenly']+' '+mainStyle['mar-top-10']}>
                <li className={mainStyle['mar-left-25']} >
                    <img className={Style['biz-logo']} src={ENV_VARIABLE.IMAGE_URL+"msupply_biz_logo.png"} alt="msupply_biz_logo"/>
                </li>
                <li onClick={this.onListClick} value="0"><Link to="/#ourPromises">Our Promises</Link></li>
                <li><a>How it works</a></li>
                <li><a>mSupply Experience</a></li>
                <li><a>Behind The Scene</a></li>
                <li className={Style.schedule}><a>Schedule a demo</a></li>
                <li className={Style.schedule}><Link to="/rfq">Login</ Link></li>
             </ul>
            </div>
        );
    }
}

export default NavBar;