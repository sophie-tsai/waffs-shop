import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

type FullMenuProps = {
  toggleSideMenu: () => void;
};

function FullMenu(props: FullMenuProps) {
  const { toggleSideMenu } = props;

  return (
    <div className="header">
      <FontAwesomeIcon
        icon={faBars}
        size="2x"
        className="nav-icon"
        onClick={toggleSideMenu}
      />
      <h1 className="header-title">corgowaffles</h1>
      <nav className="nav-bar">
        <Link to="/" className="nav-item current-page">
          home
        </Link>
        <Link to="/shop" className="nav-item">
          shop
        </Link>
        <Link to="/about" className="nav-item">
          about
        </Link>
        <Link to="/contact" className="nav-item">
          contact
        </Link>
        <Link to="/faq" className="nav-item">
          faq
        </Link>
        <Link to="/cart" className="nav-item">
          cart
        </Link>
      </nav>
      <Link to="/cart" className="nav-icon">
        <FontAwesomeIcon icon={faShoppingCart} size="1x" />
      </Link>
    </div>
  );
}

export default FullMenu;
