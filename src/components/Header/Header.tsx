import React, { FC, useState, useEffect } from "react";
import FullMenu from "./FullMenu";
import SideMenu from "./SideMenu";

const Header: FC = () => {
  const [width, setWidth] = useState(900);
  const [isOpen, setIsOpen] = useState(false);

  const setWindowWidth = () => {
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    setWidth(windowWidth);
  };

  const toggleSideMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setWindowWidth();

    window.addEventListener("resize", setWindowWidth);

    return () => window.removeEventListener("resize", setWindowWidth);
  }, []);

  useEffect(() => {
    if (width > 900) {
      setIsOpen(false);
    }
  }, [width]);

  return (
    <>
      <FullMenu toggleSideMenu={toggleSideMenu} />
      <SideMenu width={width} isOpen={isOpen} toggleSideMenu={toggleSideMenu} />
    </>
  );
};

export default Header;
