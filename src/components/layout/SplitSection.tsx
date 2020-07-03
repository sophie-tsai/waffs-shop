import React, { ReactNode } from "react";

type SplitSectionProps = {
  page: string;
  img: string;
  imgAlt: string;
  childComp: ReactNode;
}; /* could also use interface */

function SplitSection(props: SplitSectionProps) {
  const { page, img: imgSrc, imgAlt, childComp } = props;

  return (
    <>
      <section className="split-section">
        <div className="split-main-div">
          <img src={imgSrc} className={`main-img-${page}`} alt={imgAlt} />
        </div>

        <div className="split-secondary-div">{childComp}</div>
      </section>

      <hr className="theme-horizontal-bar" />
    </>
  );
}

export default SplitSection;
