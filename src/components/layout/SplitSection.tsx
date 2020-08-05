import React, { ReactNode, useState, useEffect } from "react";

type SplitSectionProps = {
  page: string;
  img: string;
  imgAlt: string;
  childComp: ReactNode;
  extra?: ReactNode;
}; /* could also use interface */

function SplitSection(props: SplitSectionProps) {
  const { page, img: imgSrc, imgAlt, childComp, extra } = props;
  const [width, setWidth] = useState<Number>(0);

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
      <section className="split-section">
        <div className="split-main-div">
          <img src={imgSrc} className={`main-img-${page}`} alt={imgAlt} />
        </div>

        <div className="split-secondary-div">{childComp}</div>
      </section>

      {extra && width > 450 && extra}

      <hr className="theme-horizontal-bar" />
    </>
  );
}

export default SplitSection;
