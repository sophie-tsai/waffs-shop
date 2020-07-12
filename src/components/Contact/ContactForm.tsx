import React, {
  FC,
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from "react";

const ContactForm: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    setter: Dispatch<SetStateAction<string>>
  ) => {
    const { value } = e.currentTarget;
    setter(value);
  };
  return (
    <div>
      <form className="contact-form">
        <div className="contact-info">
          <input
            type="text"
            placeholder="name"
            onChange={(e) => {
              handleChange(e, setName);
            }}
            value={name}
            className="form-element-name"
            required
          />
          <input
            type="email"
            placeholder="email"
            onChange={(e) => {
              handleChange(e, setEmail);
            }}
            value={email}
            className="form-element-email"
            required
          />
        </div>
        <input
          type="text"
          placeholder="subject"
          onChange={(e) => {
            handleChange(e, setSubject);
          }}
          value={subject}
          className="form-element-subject"
        />
        <br />
        <textarea
          rows={5}
          placeholder="message"
          onChange={(e) => {
            handleChange(e, setMessage);
          }}
          value={message}
          className="form-element-message"
          required
        />
        <br />

        <button className="form-button">submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
