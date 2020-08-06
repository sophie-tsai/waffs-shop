import React, { createContext, useState, useEffect } from "react";

const WindowWidthContext = createContext(0);

function WindowWidthProvider(props: any) {
  const [windowWidth, setWindowWidth] = useState(0);

  const grabAndSetWidth = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    setWindowWidth(width);
  };

  useEffect(() => {
    // window width
    grabAndSetWidth();
    window.addEventListener("resize", grabAndSetWidth);

    return () => window.removeEventListener("resize", grabAndSetWidth);
  }, []);

  return (
    <WindowWidthContext.Provider value={windowWidth}>
      {props.children}
    </WindowWidthContext.Provider>
  );
}

export { WindowWidthContext, WindowWidthProvider };
