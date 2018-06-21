import React,{ Component } from 'react';
import ENV_VARIABLE from '../../Util/Environment.js';
import Style from '../../../styles/homepage.css';
import mainStyle from '../../../styles/main.css';
class BehindTheScene extends Component{

    render(){
        const { image, title, description } = this.props;
        return(
            <div className={mainStyle['text-center']+' '+ Style['type-image']}>
                <img className={Style['image-width']} src={ENV_VARIABLE.IMAGE_URL+image} alt=""/>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        )
    }
}

export default BehindTheScene;