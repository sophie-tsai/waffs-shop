import React, { FC } from "react";
import ContactForm from "./ContactForm";

const ContactContent: FC = () => {
  return (
    <>
      <div>
        <h2 className="contact-headline">ask waffles anything!</h2>
      </div>
      <ContactForm />
    </>
  );
};

export default ContactContent;
