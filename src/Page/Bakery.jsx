import React, { useEffect } from 'react';
import './Bakery.css'
import image from "../img/top.avif"
import vannda from "../img/vannda.jpg"
import tena from "../img/tena.jpg"
import szana from "../img/szana.png"
import Solika from "../img/Solika.jpg"
import votey from "../img/votey.jpg"
import melia from "../img/melia.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Bakery = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const team = [
    {
      id: 1,
      name: "Vannda",
      role: "Head Baker",
      image: vannda,
    },
    {
      id: 2,
      name: "Szana",
      role: "Cake Designer",
      image: szana,
    },
    {
      id: 3,
      name: "Solika",
      role: "Pastry Chef",
      image: Solika,
    },
    {
      id: 4,
      name: "Tena",
      role: "Artisan Baker",
      image: tena,
    },
    {
      id: 5,
      name: "Melia",
      role: "Master Baker",
      image: melia,
    },
    {
      id: 6,
      name: "Votey",
      role: "Baking Specialist",
      image: votey,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting email...");
  };

  return <div>
    <section className="team-container">
      <div className="menu-header" data-aos="fade-down">
              <h1>
                <img src={image} alt="" />
                Our Bakers
              </h1>
            </div>
      <div className="team-grid">
        {team.map((member, index) => (
          <div
            key={member.id}
            className="team-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="800"
          >
            {/* Image Wrapper */}
            <div className="image-container">
              <img src={member.image} alt={member.name} className="team-img" />
            </div>
            
            {/* Overlapping Info Box */}
            <div className="info-box">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="newsletter-title" data-aos="fade-up">
          Join our bakers family & never miss out on sweet new arrivals
        </h2>
        
        <form className="newsletter-form" data-aos="zoom-in" data-aos-delay="200" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <span className="email-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </span>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input" 
              required 
            />
          </div>
          
          <button type="submit" className="submits-btn">
            Submit Now <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  </div>
};

export default Bakery;