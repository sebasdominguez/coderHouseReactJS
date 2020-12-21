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
        <div className='conte'>
          <span className='irHome'>
            <NavLink to='/' activeClassName='activeLink' className='links'>
                <HomeIcon />
                <span className='border border-top'></span>
                <span className='border border-right'></span>
                <span className='border border-bottom'></span>
                <span className='border border-left'></span>
            </NavLink>
          </span>
        </div>
        <NavLink to='/categories' activeClassName='activeLink' className='links'>
          <li>Categories</li>
        </NavLink>
        <NavLink to='/top3' activeClassName='activeLink' className='links'>
          <li>Top 3</li>
        </NavLink>
        <Cart greeting={"Cart:"} name={user} />
        <button onClick={handleVip} className="buttonVip">
          <p className={`to-${type}`}>{vip}</p>
        </button>
      </ul>
    </div>
  );
}
