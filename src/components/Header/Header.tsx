import React, { FC, useState, useEffect } from "react";
import FullMenu from "./FullMenu";
import SideMenu from "./SideMenu";

const Header: FC = () => {
  const [width, setWidth] = useState(900);

  const setWindowWidth = () => {
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    setWidth(windowWidth);
  };

  useEffect(() => {
    setWindowWidth();

    window.addEventListener("resize", setWindowWidth);

    return () => window.removeEventListener("resize", setWindowWidth);
  }, []);

  return (
    <>
      <FullMenu />
      <SideMenu width={width} />
    </>
  );
};

export default Header;
