import React,{ Component } from 'react';
import ENV_VARIABLE, { IMAGE_URL } from '../Util/Environment'; 
import ScrollUp from './ScrollUp.js'
import Card from './Header/Card.js';
import BehindTheScene from './Header/BehindTheScene.js';
// import Footer from './Footer/Footer';
import SideNavigation from './SideNavigation/SideNavigation';
import mainStyle from '../.././styles/main.css';
import Style from '../.././styles/homepage.css';
import InputText from '../Util/FormElements';
// import DummyF   from './DummyF';
// import  DummyS  from './DummyS';
//<DummyF />
//<DummyS />

class HomaPage extends Component{
    constructor(props){
        super(props);
         window.scrollTo(0,0);
         console.log('check');
    }
    // componentDidMount() {
    //     window.scrollTo(0,0);
    // }
    controlFunc(e) {  
        this.setState({ ownerName: e.target.value });
      }
    render(){
        return(
            <div className={Style['hero-img']}>
             
                <SideNavigation/>
                <ScrollUp/>
                <ul className={mainStyle['flex-center']}>
                    <li>
                        <img className={Style['hero-img']} src={ENV_VARIABLE.IMAGE_URL+'Hero_01.png'} alt="Banner Image"/>                    
                    </li>
                </ul>
               
                <ul className={mainStyle.flex+ ' '+ mainStyle['space-evenly']+' '+Style['card-position']}>
                    <li>
                        <Card image="indirect_spend.png" title="Indirect Spend" description="Make Indirect Purchase Effective,Efficient & Automated"></Card>
                    </li>
                    <li>
                        <Card image="mro.png" title="MRO" description="Optimize your MRO purchase to get ahead of the curve"></Card>
                    </li>
                    <li>
                        <Card image="tailspend.png" title="Tail Spend" description="Manage tail spend on your terms"></Card>
                    </li>
                </ul>
                
                <div>
                    <p className={mainStyle['text-center']+' '+ mainStyle['text-style']}>mSupply partners with you to get the best in-class procurement solutions exclusively curated for your business need.</p>
                </div>
                <ul id="ourPromises" className={mainStyle['flex-center']+' '+ mainStyle['justify-center'] + ' '+Style['height-100']}>
                    <li className={Style['mar-45-right ']}>
                     <button className={Style['btn-contact']}>Contact Us</button>
                    </li>
                    <li className={Style['mar-45-left']}>
                     <button className={Style['btn-contact']}>Schedule a Demo</button>
                    </li>
                </ul>
                <ul  className={mainStyle['flex-center']+' '+ mainStyle['justify-center']+' '+ Style['services-div']}>
                 <li>
                   <img className={Style['srvices-img']} src={ENV_VARIABLE.IMAGE_URL+"services.png"} alt="Our Services"/>
                 </li>
                </ul>
                <ul className={mainStyle['text-center']+' '+Style.mSExperiance}>
                    <li>
                    <h3>A TASTE OF WHAT'S THERE IN <span>STORE</span></h3>
                    <p>mSupply helps connect end-to-end value chain to give a seamless experience across the organization</p>
                    </li>
                </ul>
                <ul className={Style['purchase-div']}>
                    <li className={Style['purchase-manager']    }>
                    <p className={Style.pInfo}><b>Purchase/Procurement/Supply Chain Manager</b></p>
                    <p className={Style.pInfo2}>Giving visibility of procurement across companies, projects & offices for immediate actions & better decisions</p>
                    </li>
                    <li className={Style['purchase-manager']}>
                        <img className={Style['purchase-img']} src={ENV_VARIABLE.IMAGE_URL+"Purchase_manager.png"} alt=""/>
                    </li>
                </ul>
                
                
                <hr/>
                <ul className={Style['purchase-div']}>
                    <li className={Style['purchase-manager']+ ' '+ mainStyle['text-center']}>
                        <img className={Style['business-img']} src={ENV_VARIABLE.IMAGE_URL+"Business_user.png"} alt="Busines_user"/>
                    </li>
                    <li className={Style['purchase-manager']    }>
                    <p className={Style.pInfo}><b>Purchase/Procurement/Supply Chain Head</b></p>
                    <p className={Style.pInfo2}>Get complete supply chain insights on your preferred device to equip you better for both Strategic & Tactical Decision Making</p>
                    </li>
                   
                </ul>
                <div>
                    <p className={mainStyle['text-center']+' '+ mainStyle['text-style']}>Instead? Say Hello, and we will get back to you.</p>
                </div>
                <ul className={mainStyle['flex-center']+' '+ mainStyle['justify-center'] + ' '+Style['height-100']}>
                    <li className={Style['mar-45-right ']}>
                     <button className={Style['btn-contact']}>Contact Us</button>
                    </li>
                    <li className={Style['mar-45-left']}>
                     <button className={Style['btn-contact']}>Schedule a Demo</button>
                    </li>
                </ul>
                <hr/>
                <ul className={Style['behind-scene']+ ' ' + Style['mar-top-20']}>
                        <li><BehindTheScene image="Power_to_source.png" title="Our Power to Source" description="We aggregate requests across customers & product categories to get you right prices"/></li>
                        <li><BehindTheScene image="Supplier_base.png" title="Our Supplier Base" description="Our suppliers are selected through a robust on boarding process to ensure you get the best service"/></li>
                        <li><BehindTheScene image="Inhouse_team.png" title="Our In-House Team" description="We take-on time consuming tasks such as supplier on boarding, follow-up & selection for you to focus more on Strategic work"/></li>
                        <li><BehindTheScene image="Customer_products.png" title="Our Customizable Platform" description="Our products are specifically designed to cater to varying customer needs. We also ensure integration with your existing systems"/></li>
                </ul>

                {/* <Footer/> */}
                
            </div>
        );
    }
}
export default HomaPage;