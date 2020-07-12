import React from "react";
import SplitSection from "../layout/SplitSection";
import wafflesUnamused from "../../assets/waffles-unamused.jpg";
import ContactContent from "./ContactContent";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact-page">
      <SplitSection
        img={wafflesUnamused}
        page="contact"
        imgAlt="waffles' funny, unamused face"
        childComp={<ContactContent />}
      />
    </div>
  );
}

export default Contact;
