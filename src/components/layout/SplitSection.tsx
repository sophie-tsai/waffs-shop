import React, { ReactNode, useContext } from "react";
import { WindowWidthContext } from "../../context/WindowWidthContext";
import { Animated } from "react-animated-css";

type SplitSectionProps = {
  page: string;
  img: string;
  imgAlt: string;
  childComp: ReactNode;
  extra?: ReactNode;
}; /* could also use interface */

function SplitSection(props: SplitSectionProps) {
  const { page, img: imgSrc, imgAlt, childComp, extra } = props;
  const windowWidth = useContext(WindowWidthContext);

  return (
    <>
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={1500}
        animationOutDuration={1000}
        isVisible={true}
      >
        <section className="split-section">
          <div className="split-main-div">
            <img src={imgSrc} className={`main-img-${page}`} alt={imgAlt} />
          </div>

          <div className="split-secondary-div">{childComp}</div>
        </section>

        {extra && windowWidth > 450 && extra}
      </Animated>
      <hr className="theme-horizontal-bar" />
    </>
  );
}

export default SplitSection;
