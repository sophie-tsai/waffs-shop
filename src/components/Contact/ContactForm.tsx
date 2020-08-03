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
  const [button, setButton] = useState("submit");

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
      .then(() => setButton("sent successfully!"))
      .then(() => setName(""))
      .then(() => setEmail(""))
      .then(() => setSubject(""))
      .then(() => setMessage(""))
      .catch((error) => console.error(error));

    e.preventDefault();
  };

  return (
    <div>
      <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="contact-info">
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            placeholder="name"
            onChange={(e) => {
              handleChange(e, setName);
            }}
            value={name}
            className="form-element-name"
            name="name"
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
            name="email"
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
          name="subject"
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
          name="message"
          required
        />
        <br />
        <button type="submit" className="form-button">
          {button}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
