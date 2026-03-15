import React, { useState, useEffect } from 'react';
import './Reservation.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Reservation = () => {
  const [activeIndex, setActiveIndex] = useState(null); // No card active by default

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const faqs = [
    {
      question: "Do you bake everything fresh daily?",
      answer: "Yes, our ovens start early every morning to ensure everything you buy is made that same day."
    },
    {
      question: "Can I place a custom cake order?",
      answer: "Absolutely! We specialize in custom cakes for birthdays, weddings, & all occasions. Just share your idea, & our bakers will bring it to life."
    },
    {
      question: "Do you offer eggless or vegan options?",
      answer: "Yes, we offer a variety of eggless and vegan-friendly treats to suit your preferences without compromising taste."
    },
    {
      question: "How far in advance should I order?",
      answer: "For standard items, 24 hours is great. For custom cakes, we recommend 3-5 days notice."
    },
    {
      question: "What are your bakery timings?",
      answer: "We are open from 7:00 AM to 11:00 PM Monday through Thursday, with adjusted hours on weekends."
    }
  ];
  return <div>
    <div className="reservation-container">
      <h1 className="main-title" data-aos="fade-down">Join Our Table</h1>
      <div className="reservation-content">
        
        {/* Left Section */}
        <div className="info-section" data-aos="fade-right">
          <h1>Dine & Reserve</h1>
          <p>
            For quick bookings, just text us your details in 
            <strong> +(855) 126-21443</strong> and we'll call back to confirm your table as soon as possible.
          </p>
          <div className="image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" 
              alt="Table setting" 
            />
          </div>
        </div>

        {/* Right Section / Form */}
        <form className="form-section" data-aos="fade-left">
          <div className="input-group">
            <label>Your Name*</label>
            <input type="text" placeholder="Full name" required />
          </div>

          <div className="input-group">
            <label>Email Address*</label>
            <input type="email" placeholder="Your email address" required />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Your Phone number" />
          </div>

          <div className="input-group">
            <label>Message*</label>
            <textarea rows="6" placeholder="Type message here..." required></textarea>
          </div>

          <button type="submit" className="submits-btn">
            Submit Now
          </button>
        </form>

      </div>
    </div>
    <section className="cards-container">
      <div className="cards-grid">
        
        {/* Opening Hours */}
        <div className="info-card card-hours" data-aos="fade-up" data-aos-delay="0">
          <h2 className="card-title">Opening Hours</h2>
          <hr className="separator" />
          <div className="card-content">
            <p>Mon to Thu: 06.00AM to 23.00PM</p>
            <p>Fri & Sat: 08.00AM  to  21.00PM</p>
            <p>Sunday Open's at 09.00AM to 18.00PM</p>
          </div>
        </div>

        {/* Location */}
        <div className="info-card card-location" data-aos="fade-up" data-aos-delay="200">
          <h2 className="card-title">Location</h2>
          <hr className="separator" />
          <div className="card-content">
            <p>2002st, Teuk Thla, SenSok</p>
            <p>Phnom Penh</p>
            <p>CAMBODIA</p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="info-card card-contact" data-aos="fade-up" data-aos-delay="400">
          <h2 className="card-title">Contact Us</h2>
          <hr className="separator" />
          <div className="card-content">
            <p>+(855) 126-214-43</p>
            <p>Theviz@gmail.com</p>
            <p>info@example.com</p>
          </div>
        </div>

      </div>
    </section>
    {/* Questions */}
    <section className="faq-container">
      <h2 className="faq-title" data-aos="fade-down">Have Any Questions?</h2>
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={`faq-card ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div>
              <p className="que-label">Que:</p>
              <p className="question-text">{faq.question}</p>
            </div>

            <div className="ans-section">
              <span className="ans-label">Ans:</span>
              <p className="answer-text">{faq.answer}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  </div>
};

export default Reservation;
