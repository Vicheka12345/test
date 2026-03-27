import React from "react";
import "./contact.css";
import smile from "../img/contact-smile.jpg";
import { Facebook, Instagram, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="contact-container min-h-screen bg-[#e8e2d9] flex items-center justify-center p-5 md:p-10 font-sans">
      <div className="contact-wrapper max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 p-3 md:p-5 bg-white rounded-2xl shadow-xl">
        {/* Left Side: Image */}
        <div className="image-section w-full h-[350px] md:h-[600px] rounded-lg overflow-hidden">
          <img src={smile} alt="Smiling person" className="contact-image w-full h-full object-cover" />
        </div>

        {/* Right Side: Content & Form */}
        <div className="form-section flex flex-col gap-8">
          <p className="contact-description text-[#3e2723] text-lg leading-relaxed">
            Whether you’re placing an order, sharing feedback, or just want to
            say hello, we’re always excited to connect and hear from you.
          </p>

          <form className="contact flex flex-col gap-6">
            <div className="input-group relative w-full">
              <label className="block text-xs font-semibold text-[#4a322d] uppercase tracking-wider mb-1">Your Name*</label>
              <input className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-[#3e2723] transition-colors" type="text" placeholder="Your name" required />
            </div>

            <div className="input-group relative w-full">
              <label className="block text-xs font-semibold text-[#4a322d] uppercase tracking-wider mb-1">Email Address*</label>
              <input className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-[#3e2723] transition-colors" type="email" placeholder="Your email" required />
            </div>

            <div className="input-group relative w-full">
              <label className="block text-xs font-semibold text-[#4a322d] uppercase tracking-wider mb-1">Phone Number</label>
              <input className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-[#3e2723] transition-colors" type="text" placeholder="Your number" />
            </div>

            <div className="input-group relative w-full">
              <label className="block text-xs font-semibold text-[#4a322d] uppercase tracking-wider mb-1">Message</label>
              <textarea
                className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-[#3e2723] transition-colors resize-none"
                rows="4"
                placeholder="Type message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="sub-btn w-full bg-[#4a322d] text-white py-4 rounded-md font-bold hover:bg-[#3e2723] hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg">
              Submit Now
            </button>
          </form>

          {/* Social Platforms */}
          <div className="social-platforms flex flex-wrap gap-3 mt-4">
            <a
              href="https://www.facebook.com/share/15iimqPh5bZ/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link flex-1 flex items-center justify-center gap-2 text-[#4a322d] bg-[#f9f6f2] p-3 rounded-md hover:bg-[#4a322d] hover:text-white hover:-translate-y-1 transition-all"
            >
              <Facebook size={20} />
              <span className="text-sm">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/vichekaz_?igsh=MWo1d2puZjlrbjYz&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link flex-1 flex items-center justify-center gap-2 text-[#4a322d] bg-[#f9f6f2] p-3 rounded-md hover:bg-[#4a322d] hover:text-white hover:-translate-y-1 transition-all"
            >
              <Instagram size={20} />
              <span className="text-sm">Instagram</span>
            </a>
            <a
              href="https://t.me/Vichekazz"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link flex-1 flex items-center justify-center gap-2 text-[#4a322d] bg-[#f9f6f2] p-3 rounded-md hover:bg-[#4a322d] hover:text-white hover:-translate-y-1 transition-all"
            >
              <Send size={20} />
              <span className="text-sm">Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

