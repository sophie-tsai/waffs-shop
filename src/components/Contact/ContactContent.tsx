import React, { FC } from "react";
import ContactForm from "./ContactForm";

const ContactContent: FC = () => {
  return (
    <>
      <div className="contact-div-headline">
        <h2 className="contact-headline">ask me anything!</h2>
      </div>
      <ContactForm />
    </>
  );
};

export default ContactContent;
