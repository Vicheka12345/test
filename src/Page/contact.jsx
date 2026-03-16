import React from "react";
import "./contact.css";
import smile from "../img/contact-smile.jpg";
import { Facebook, Instagram, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Left Side: Image */}
        <div className="image-section">
          <img src={smile} alt="Smiling person" className="contact-image" />
        </div>

        {/* Right Side: Content & Form */}
        <div className="form-section">
          <p className="contact-description">
            Whether you’re placing an order, sharing feedback, or just want to
            say hello, we’re always excited to connect and hear from you.
          </p>

          <form className="contact">
            <div className="input-group ">
              <label>Your Name*</label>
              <input type="text" placeholder="Your name" required />
            </div>

            <div className="input-group">
              <label>Email Address*</label>
              <input type="email" placeholder="Your email" required />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input type="text" placeholder="Your number" />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                rows="5"
                placeholder="Type message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="sub-btn">
              Submit Now
            </button>
          </form>

          {/* Social Platforms */}
          <div className="social-platforms">
            <a
              href="https://www.facebook.com/share/15iimqPh5bZ/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Facebook size={24} />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/vichekaz_?igsh=MWo1d2puZjlrbjYz&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Instagram size={24} />
              <span>Instagram</span>
            </a>
            <a
              href="https://t.me/Vichekazz"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Send size={24} />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

