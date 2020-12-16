import React, { useContext } from 'react'
import { Context } from '../context/cartContext';
import Cart from '../Components/Cart/Cart'

export default function CartContainer() {

    const [cartItems] = useContext(Context) 

    return (
        <Cart cartItems={cartItems} />
    )
}
