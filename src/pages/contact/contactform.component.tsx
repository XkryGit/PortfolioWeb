import React, { useState } from "react";
import { emails } from "./emails";

export const ContactformComponent: React.FC = () => {
    const [name, setName] = useState("");
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const [email, setEmail] = useState("");
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const [subject, setSubject] = useState("");
  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };
  const [message, setMessage] = useState("");
  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    emails.push({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
    if (name === "") {
      document.getElementById("half1").style.border = "1.5px solid red";
      alert("Fill in all the fields");
    } else if (email === "") {
      document.getElementById("half2").style.border = "1.5px solid red";
      alert("Fill in all the fields");
    } else if (subject === "") {
      document.getElementById("onea").style.border = "1.5px solid red";
      alert("Fill in all the fields");
    } else if (message === "") {
      document.getElementById("oneb").style.border = "1.5px solid red";
      alert("Fill in all the fields");
    } else {
      document.getElementById("half1").style.border = "";
      document.getElementById("half2").style.border = "";
      document.getElementById("onea").style.border = "";
      document.getElementById("oneb").style.border = "";
      alert("Message sent");
      setName(""), setEmail(""), setMessage(""), setSubject("");
    }
  };
    return (
        <>
    <div id="form">
          <div id="contactform">
            <input
              id="half1"
              type="text"
              placeholder="Name"
              onChange={handleChangeName}
              value={name}
            />
            <input
              id="half2"
              type="email"
              placeholder="Email"
              onChange={handleChangeEmail}
              value={email}
            />
            <input
              id="onea"
              type="text"
              placeholder="Subject"
              onChange={handleChangeSubject}
              value={subject}
            />
            <textarea
              id="oneb"
              placeholder="Message"
              onChange={handleChangeMessage}
              value={message}
            />
          </div>
          <button onClick={handleSend} id="form">
            Send message
          </button>
        </div>
        </>
);
}