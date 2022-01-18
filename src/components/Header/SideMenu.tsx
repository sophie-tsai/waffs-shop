import React, { useState, useEffect } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

type SideMenuProps = {
  width: number;
  isOpen: boolean;
  toggleSideMenu: () => void;
  showBanner: boolean;
};

function SideMenu(props: SideMenuProps) {
  const { width, isOpen, toggleSideMenu, showBanner } = props;
  const [menuGap, setMenuGap] = useState('5');

  const styles = {
    bmMenuWrap: {
      position: 'fixed',
      width: '12rem',
      top: `${menuGap}em`,
      height: '100%',
    },
  };

  useEffect(() => {
    if (width <= 600) setMenuGap(showBanner ? '6' : '4');
    if (width <= 450) setMenuGap(showBanner ? '6.2' : '4.2');
  }, [width]);

  return (
    <Menu noOverlay customBurgerIcon={false} isOpen={isOpen} styles={styles}>
      <Link to="/" className="menu-item" onClick={toggleSideMenu}>
        home
      </Link>
      <Link to="/shop" className="menu-item" onClick={toggleSideMenu}>
        shop
      </Link>
      <Link to="/about" className="menu-item" onClick={toggleSideMenu}>
        about
      </Link>
      <Link to="/contact" className="menu-item" onClick={toggleSideMenu}>
        contact
      </Link>
      <Link to="/faq" className="menu-item" onClick={toggleSideMenu}>
        faq
      </Link>
      <Link to="/cart" className="menu-item" onClick={toggleSideMenu}>
        cart
      </Link>
    </Menu>
  );
}

export default SideMenu;
