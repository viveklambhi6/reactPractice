import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './left-panel.css';
// import Just from '../Just';
// import About from '../About';

class LeftNavigation extends Component {

    leftPanelTab = [
        {
            key:1,
            exact:true,
            tab:"My Actions",
            pathname: "/my-action",
        },
        {
            key:2,
            tab:"PR Approval",
            pathname:"/PR-approval",

        },
        {
            key:3,
            tab:"Create PRs",
            pathname:"/create-pr"
        },
        {
            key:4,
            tab:"Active PRs",
            pathname:"/active-pr"
        },
        {
            key:5,
            tab:"Past PRs",
            pathname:"/past-pr"
        },
        {
            key:6,
            tab:"Draft PRs",
            pathname:"/draft-pr"
        },
        {
            key:7,
            tab:"Insights",
            pathname:"/insights"
        },
        {
            key:8,
            tab:"Settings",
            pathname:"/settings"
        }
    ]
    render(){
            const tabs=this.leftPanelTab.map((value)=>(
         <li key={value.key} className={styles.leftPanelLi}><Link to={value.pathname}>{value.tab}</Link></li>
            ))
        return (
            <div className={styles["left-panel-div"]}>
                <div className={styles['profile-section'] + ' ' + styles.flex}>
                    <span className={styles['font-18']}>Mr. Jacob Tony</span>
                </div>
                <div className={styles.flex}>
                    <ul className={styles['font-16'] + ' ' +styles['Nav-ul']}>
                        {/* <li><Link to="/">My Actions</Link></li>
                        <li><Link to="/PR-approval">PR Approval</Link></li>
                        <li><Link to="/create-pr">Create PRs</Link></li>
                        <li><Link to="/active-pr">Active PRs</Link></li>
                        <li><Link to="/past-pr">Past PRs</Link></li>
                        <li><Link to="/draft-pr">Draft PRs</Link></li>
                        <li><Link to="/insights">Insights</Link></li>
                        <li><Link to="/settings">Settings</Link></li> */}
                        {tabs}
                    </ul>
                    {/* {this.leftPanelTab.map((route,index)=>(
                    <Route
                    key={route.key}
                    path={route.pathname}
                    exact={route.exact}
                    component={route.component}
                  /> */}
                  {/* ))} */}
                </div>
            </div>
        )
    }
}

export default LeftNavigation;

