import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <Link to="/cart" className="nav-icon">
        <FontAwesomeIcon icon={faBars} size="1x" />
      </Link>
      <h1 className="header-title">CORGOWAFFLES</h1>
      <nav className="nav-bar">
        <Link to="/" className="nav-item current-page">
          HOME
        </Link>
        <Link to="/shop" className="nav-item">
          SHOP
        </Link>
        <Link to="/about" className="nav-item">
          ABOUT
        </Link>
        <Link to="/contact" className="nav-item">
          CONTACT
        </Link>
        <Link to="/faq" className="nav-item">
          FAQ
        </Link>
        <Link to="/cart" className="nav-item">
          CART
        </Link>
      </nav>
      <Link to="/cart" className="nav-icon">
        <FontAwesomeIcon icon={faShoppingCart} size="1x" />
      </Link>
    </div>
  );
}

export default Header;
