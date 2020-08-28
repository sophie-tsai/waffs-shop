import React, { FC, useState, useEffect, useContext } from "react";
import FullMenu from "./FullMenu";
import SideMenu from "./SideMenu";
import { WindowWidthContext } from "../../context/WindowWidthContext";
import Banner from "../Banner/Banner";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = useContext(WindowWidthContext);

  const toggleSideMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (windowWidth > 900) {
      setIsOpen(false);
    }
  }, [windowWidth]);

  return (
    <div className="header-combo">
      <Banner />
      <FullMenu toggleSideMenu={toggleSideMenu} isOpen={isOpen} />
      <SideMenu
        width={windowWidth}
        isOpen={isOpen}
        toggleSideMenu={toggleSideMenu}
      />
    </div>
  );
};

export default Header;
