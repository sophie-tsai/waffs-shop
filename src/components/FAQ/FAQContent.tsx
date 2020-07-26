import React from "react";
import { faqData } from "./faqData";

function FAQContent() {
  const displayFAQ = faqData.map((data, index) => (
    <div key={index} className="faq-question-answer">
      <p className="faq-question">{data.question}</p>
      <p className="faq-answer">{data.answer}</p>
    </div>
  ));

  return (
    <>
      <div className="faq-div-headline">
        <h2 className="faq-headline">faq</h2>
      </div>
      <div className="faq-div-copy">{displayFAQ}</div>
    </>
  );
}

export default FAQContent;
