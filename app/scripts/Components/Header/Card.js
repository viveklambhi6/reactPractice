import React,{ Component } from 'react';
import ENV_VARIABLE from '../../Util/Environment';
import Style from '../../../styles/homepage.css';
import mainStyle from '../../../styles/main.css';
class Card extends Component{
    render(){
        return(
           <div className={Style['card-wrapper']}>
            <div><img className={Style['card-img']} src={ENV_VARIABLE.IMAGE_URL+this.props.image} alt="Card_Image"/></div>
            <h4 className={mainStyle['mar-top-15']}>{this.props.title}</h4>
            <p>{this.props.description}</p>
           </div>
        );
    }

}
export default Card;