import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { Context } from '../../context/cartContext';
import Skeleton from 'react-loading-skeleton';
import cart from '../../utils/images/cart.svg';
import './cartStyle.css'

const CartIcon = (props) => {

  const [cartItems] = useContext(Context) 

  return ( 
    <div className='cartContainer'>
      <div className='carrito'>
        <Link to='/cart'>
          <img src={cart} className="cart" alt="cart" />
        </Link>
        <div>
          <Badge variant="secondary">
            {cartItems.length > 0 && cartItems.length}
          </Badge>
        </div>
      </div>
      <p>{props.greeting} {props.name || <Skeleton duration={1} width={100} circle={true}/> }</p>
    </div>
    )

} 

export default CartIcon;