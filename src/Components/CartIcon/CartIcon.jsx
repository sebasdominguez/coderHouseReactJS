import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { Context } from '../../context/cartContext';
import Skeleton from 'react-loading-skeleton';
import cart from '../../utils/images/cart.svg';
import './cartStyle.css'

const CartIcon = (props) => {

  const [cartItems] = useContext(Context) 

  console.log("cartItems",cartItems)

  return ( 
    <Link to='/cart' className="links">
      <div className='cartContainer'>
        <div className='carrito'>
            <img src={cart} className="cart" alt="cart" />
          <div>
            <Badge variant="secondary">
              {cartItems.length > 0 && cartItems.length}
            </Badge>
          </div>
        </div>
        <p className="greet">{props.greeting} {props.name || <Skeleton duration={1} width={100} circle={true}/> }</p>
      </div>
    </Link>
    )
} 

export default CartIcon;