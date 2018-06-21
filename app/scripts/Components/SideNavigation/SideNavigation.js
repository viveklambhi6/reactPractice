import React, { Component } from 'react';
import Style from './sidenavigation.css';
import ENV_VARIABLE from '../../Util/Environment';

class SideNavigation extends Component{
   
    render(){
        return(
            <div>
            <ul className={Style.sideNav}>
            <li>
             <img className={Style['biz-logo']} src={ENV_VARIABLE.IMAGE_URL+'msupply_biz_logo.png'} alt="msupply_biz_logo"/>
             </li>
             <li>
             <span className={Style.hemburgerMenue}>&#9776;</span>
             </li> 
            </ul>
            <ul>
            <li>
            </li>
            </ul>
            </div>
        )
    }
}
export default SideNavigation;