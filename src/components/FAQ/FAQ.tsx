import React, { FC } from "react";
import SplitSection from "../layout/SplitSection";
import "./FAQ.scss";
import wafflesMeditate from "../../assets/compressed/waffles-meditate.jpg";
import FAQContent from "./FAQContent";

const FAQ: FC = () => {
  return (
    <div className="faq-page">
      <SplitSection
        page="faq"
        img={wafflesMeditate}
        imgAlt="Waffles on the beach with stones"
        childComp={<FAQContent />}
      />
    </div>
  );
};

export default FAQ;
