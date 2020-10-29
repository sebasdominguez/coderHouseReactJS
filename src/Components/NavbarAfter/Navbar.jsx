import React from 'react'
import Cart from '../CartIcon/CartIcon'
import './navbarAfter.css'

export function NavBar({type, setTipo, tipo}) {
    return (
        <div className={`navStyle-${type}`}>
            <ul className='ulStyle'>
                <li>Categories</li>
                <li>Top 5</li>
                <li>News</li>
                <li>Login</li>
                <Cart />
                {/*<button onClick={()=>{tipo==='classic' ? setTipo('vip') : setTipo('classic')}}>+</button>*/}
            </ul>
        </div>
    )
}

