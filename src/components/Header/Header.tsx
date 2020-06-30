import React from "react";
import "./Header.sass";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1 className="header-title">CORGOWAFFLES</h1>
      <nav className="nav-bar">
        <Link to="/">HOME</Link>
        <Link to="/shop">SHOP</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/cart">CART</Link>
      </nav>
    </div>
  );
}

export default Header;
