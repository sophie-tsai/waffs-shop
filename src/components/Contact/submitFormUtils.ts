export const submit = (data: any) => {
  const { name, email, subject, message } = data;
  return fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "contact",
      name: name,
      email: email,
      subject: subject,
      message: message,
    }),
  });
};

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
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
