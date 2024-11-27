import React, { useState } from "react";
import "./contact.css";
import Navbar from "../../components/shared/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar></Navbar>

      <video autoPlay muted loop id="myVideo">
        <source src="/assets/videos/bg.mp4" type="video/mp4" />
      </video>

      <div className="container">
        <div className="form">
          <div className="contact-form">
            <form>
              <h2 className="title">Contact Us</h2>
              <div className="input-container">
                <input type="text" className="input" placeholder="name" required />
              </div>
              <div className="input-container">
                <input type="email" className="input" placeholder="email" required />
              </div>
              <div className="input-container textarea">
                <textarea className="input" placeholder="message" required></textarea>
              </div>
              <button type="submit" className="btn">Send</button>
            </form>
          </div>
          <div className="contact-info">
            <h2 className="title">Get in touch</h2>
            <p className="text">
              We'd love to hear from you! Send us a message and we'll get back to
              you as soon as possible.
            </p>
            <div className="information">
              <img src=".\assets\images\contactImages\location.png" alt="icon" className="icon" />
              <p>Your address here</p>
            </div>
            <div className="information">
              <img src=".\assets\images\contactImages\phone.png" alt="icon" className="icon" />
              <p>+123 456 789</p>
            </div>
            <div className="information">
              <img src=".\assets\images\contactImages\email.png" alt="icon" className="icon" />
              <p>email@domain.com</p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Contact;
