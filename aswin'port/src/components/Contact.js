import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="contact-input" />
        <input type="email" placeholder="Your Email" className="contact-input" />
        <textarea placeholder="Your Message" className="contact-textarea"></textarea>
        <button type="submit" className="contact-button">Send</button>
      </form>
    </div>
  );
}

export default Contact;
