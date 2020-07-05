import React, { useState, useEffect } from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

type SideMenuProps = {
  width: number;
};

function SideMenu(props: SideMenuProps) {
  const { width } = props;
  const [menuGap, setMenuGap] = useState("5");

  const styles = {
    bmMenuWrap: {
      position: "fixed",
      width: "12rem",
      top: `${menuGap}em`,
      height: "100%",
    },
  };

  useEffect(() => {
    if (width < 600) setMenuGap("4.5");
    if (width < 450) setMenuGap("4");
  }, [width]);

  return (
    <Menu noOverlay customBurgerIcon={false} isOpen={true} styles={styles}>
      <Link to="/" className="menu-item">
        HOME
      </Link>
      <Link to="/shop" className="menu-item">
        SHOP
      </Link>
      <Link to="/about" className="menu-item">
        ABOUT
      </Link>
      <Link to="/contact" className="menu-item">
        CONTACT
      </Link>
      <Link to="/faq" className="menu-item">
        FAQ
      </Link>
      <Link to="/cart" className="menu-item">
        CART
      </Link>
    </Menu>
  );
}

export default SideMenu;
