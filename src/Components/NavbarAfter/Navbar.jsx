import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import Cart from "../CartIcon/CartIcon";
import HomeIcon from "../HomeIcon/HomeIcon";
import "./navbarAfter.css";

export function NavBar({ type, setTipo }) {

  const [vip, setVip] = useState("GET VIP");
  const [user, setUser] = useState("");

  useEffect(() => {
    const name = setTimeout(() => {
        setUser("Sebastián")
    }, 2000);
    return () => clearTimeout(name);
  }, []);

  const handleVip = () => {
    if (type === "classic") {
      setTipo("vip");
      setVip("CLASSIC");
    } else {
      setTipo("classic");
      setVip("GET VIP");
    }
  };

  return (
    <div className={`navStyle-${type}`}>
      <ul className="ulStyle">
        <HomeIcon />
        <NavLink to='/categories' activeClassName='activeLink' className='links'>
          <li>Categories</li>
        </NavLink>
        <NavLink to='/top5' activeClassName='activeLink' className='links'>
          <li>Top 5</li>
        </NavLink>
        <NavLink to='/news' activeClassName='activeLink' className='links'>
          <li>News</li>
        </NavLink>  
        <NavLink to='/login' activeClassName='activeLink' className='links'>
         <li>Login</li>
        </NavLink>
        
        <Cart greeting={"Bienvenido"} name={user} />
        <button onClick={handleVip} className="buttonVip">
          <p className={`to-${type}`}>{vip}</p>
        </button>
      </ul>
    </div>
  );
}
