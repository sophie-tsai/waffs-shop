import React, {
  FC,
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  FormEvent,
} from "react";

const ContactForm: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  interface IdataEncoded {
    "form-name": string;
    name: string;
    email: string;
    subject: string;
    message: string;
    [key: string]: string;
  }

  const encode = (data: IdataEncoded) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    setter: Dispatch<SetStateAction<string>>
  ) => {
    const { value } = e.currentTarget;
    setter(value);
  };

  const handleSubmit = (e: FormEvent) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
    })
      .then(() => console.log("Success!"))
      .catch((error) => console.error(error));

    e.preventDefault();
  };

  return (
    <div>
      <form
        className="contact-form"
        // method="POST"
        data-netlify="true"
        name="contact"
        data-netlify-recaptcha="true"
      >
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
        <div data-netlify-recaptcha="true"></div>
        <button className="form-button" onSubmit={(e) => handleSubmit(e)}>
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
