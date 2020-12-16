import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Cart({cartItems}) {

    useEffect(()=>{
        console.log("cartItems",cartItems)
    },[cartItems])
    
    return (
        <ul>
            {   
                cartItems.length ?
                 cartItems.map((item)=>{
                    return <li>{item.title}</li>
                 })
                 :
                 <div>
                    <h2>
                        No hay items aun
                    </h2>
                    <Link to={'/'} className='links'>
                        <button> Volver a Home</button>
                    </Link>
                </div>
            }
        </ul>
    )
}
