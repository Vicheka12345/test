import { Facebook, Instagram, Send } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bakzy-footer">
      <div className="footer-container">

        {/* Main Content Area */}
        <div className="footer-content">
          <div className="footer-columns">
            {/* Newsletter Section */}
            <div className="footer-col newsletter">
              <h4 className="col-title highlight">DELIGHTS IN YOUR INBOX</h4>
              <p>Freshly baked updates, special deals, and sweet stories in your inbox.</p>
              <div className="email-input-wrapper">
                <span className="mail-icon">✉</span>
                <input type="email" placeholder="Your email address" />
                <button className="submit-btn">↗</button>
                
              </div>
              <aside className="social-sidebar">
          <div className="social-icons">
            <a  href="https://www.facebook.com/share/15iimqPh5bZ/?mibextid=wwXIfr" className="icon-link"><Facebook size={20} /></a>
            <a  href = "https://www.instagram.com/vichekaz_?igsh=MWo1d2puZjlrbjYz&utm_source=qr" className="icon-link"><Instagram size={20} /></a>
            <a href="#" className="icon-link"><Send size={20} /></a>
          </div>
        </aside>
            </div>

            {/* Pages Section */}
            <div className="footer-col">
              <h4 className="col-title highlight">PAGES</h4>
              <ul>
                <li className="active-link">Our Story</li>
                <li>Our Menu</li>
                <li>Reservation</li>
                <li>Our Chef's</li>
                <li>Blogs</li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="footer-col">
              <h4 className="col-title highlight">RESOURCES</h4>
              <ul>
                <li>Contact us</li>

                <li>Reservation Policy</li>
                <li>Licensing</li>
                <li>Changelog</li>
              </ul>
            </div>

            {/* About Section */}
            <div className="footer-col">
              <h4 className="col-title highlight">ABOUT VICHEKA</h4>
              <p>Toul Kork<br />Phnom Penh City</p>
              <p className="contact-info">info@Viz.come</p>
              <p className="contact-info">+(855) 126-21443, 031-477-7288</p>
            </div>
          </div>

          {/* Large Brand Name */}
          <div className="footer-brand">
            <h1>VICHEKA</h1>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;