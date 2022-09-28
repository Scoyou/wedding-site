import emailjs from "@emailjs/browser";

export const sendForm = (form) => {
  return emailjs
    .sendForm(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      form,
      process.env.REACT_APP_EMAIL_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

export const sendConfirmation = (templateParams) => {
  return emailjs
    .send(
      process.env.REACT_APP_SENDGRID_SERVICE_ID,
      process.env.REACT_APP_SENDGRID_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAIL_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
