import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2191obh",
        "template_hax6x8h",
        form.current,
        "AdiFoT97UTNYIuEjo"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setIsEmailSent(true);
        },
        (error) => {
          console.log(error.text);
          setIsEmailSent(false);
        }
      );
  };

  return (
    <StyledContactForm>
      {isEmailSent ? (
        <p>Email sent successfully!</p>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <div className="container">
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </div>
        </form>
      )}
    </StyledContactForm>
  );
};

const StyledContactForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 352px;
  margin-bottom:300px;
  color: white;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    background-color: #1E3A75;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
    font-size: 16px;

    input,
    textarea {
      width: 100%;
      padding: 7px;
      margin-top: 10px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 10px;
    }

    input[type="submit"] {
      margin-top: 20px;
      cursor: pointer;
      background: #00Abf0;
      color: white;
      border: none;
    }
  }

  p {
    background: #FFD700;
    color: black;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    margin-top:200px;
  }
`;

export default Contact;
