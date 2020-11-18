import React from "react";
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import cart from '../../utils/images/cart.svg'
import './cartStyle.css'

const CartIcon = (props) => {

  return ( 
    <div className='cartContainer'>
      <Link to='/cart'>
        <img src={cart} className="cart" alt="cart" />
      </Link>
      <p>{props.greeting} {props.name || <Skeleton duration={1} width={100} circle={true}/> }</p>
    </div>
    )

} 

export default CartIcon;