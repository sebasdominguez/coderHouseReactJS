import React from "react";
import { Link } from 'react-router-dom';
import auto from '../../utils/images/auto.png'
import './homeIconStyle.css'

const HomeIcon = () => {

  return ( 
    <div className='homeIconContainer'>
      <Link to='/'>
        <img src={auto} className="iconHome" alt="home" />
      </Link>
    </div>
    )

} 

export default HomeIcon;