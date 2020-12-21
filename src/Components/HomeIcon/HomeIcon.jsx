import React from "react";
import auto from '../../utils/images/auto.png'
import './homeIconStyle.css'

const HomeIcon = () => {

  return ( 
    <div className='homeIconContainer'>   
        <img src={auto} className="iconHome" alt="home" />
    </div>
    )

} 

export default HomeIcon;