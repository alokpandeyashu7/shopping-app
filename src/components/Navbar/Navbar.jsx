import React, { useState, useContext } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'  

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext); 

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Pragya</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}><NavLink to="/" style={{ textDecoration: "none" }}>Shop</NavLink> {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("men")}><NavLink to="/mens" style={{ textDecoration: "none" }}>Men</NavLink> {menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("women")}><NavLink to="/womens" style={{ textDecoration: "none" }}>Women</NavLink>{menu === "women" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("kids")}><NavLink to="/kids" style={{ textDecoration: "none" }}>Kids</NavLink>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>

      <div className="nav-login-cart">
        <NavLink to="/login"><button>Login</button></NavLink>
        <NavLink to="/cart">
          <img src={cart_icon} alt="cart" />
        </NavLink>

        
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
