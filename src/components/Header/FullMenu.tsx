import React from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

type FullMenuProps = {
  toggleSideMenu: () => void;
};

function FullMenu(props: FullMenuProps) {
  const { toggleSideMenu } = props;

  let location = useLocation();

  const isCurrentPage = (page: String): Boolean => {
    if (page === location.pathname) return true;
    return false;
  };

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
        <Link
          to="/"
          className={`nav-item ${isCurrentPage("/") && "current-page"}`}
        >
          home
        </Link>
        <Link
          to="/shop"
          className={`nav-item ${isCurrentPage("/shop") && "current-page"}`}
        >
          shop
        </Link>
        <Link
          to="/about"
          className={`nav-item ${isCurrentPage("/about") && "current-page"}`}
        >
          about
        </Link>
        <Link
          to="/contact"
          className={`nav-item ${isCurrentPage("/contact") && "current-page"}`}
        >
          contact
        </Link>
        <Link
          to="/faq"
          className={`nav-item ${isCurrentPage("/faq") && "current-page"}`}
        >
          faq
        </Link>
        <Link
          to="/cart"
          className={`nav-item ${isCurrentPage("/cart") && "current-page"}`}
        >
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
