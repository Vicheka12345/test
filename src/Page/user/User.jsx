import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Data } from "./Data";
import { User as UserIcon, Mail, Phone, Globe, ArrowRight } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './User.css';

const User = () => {
  const data = Data;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="user-page-wrapper">
      <header className="user-header" data-aos="fade-down">
        <h1>Our Creative Team</h1>
        <p>Meet the talented individuals who bring our vision to life. Each member brings unique expertise and passion to ensure the highest quality experience.</p>
      </header>

      <div className="user-grid">
        {data.map((user, index) => (
          <div 
            key={user.id} 
            className="user-card" 
            data-aos="fade-up" 
            data-aos-delay={index * 100}
          >
            <div className="user-avatar">
              <img src={user.image} alt={user.name} className="user-avatar-img" />
            </div>

            
            <div className="user-info">
              <h3>{user.name}</h3>
              <p className="user-username">@{user.username}</p>
            </div>

            <div className="user-details">
              <div className="user-detail-item">
                <Mail size={16} />
                <span>{user.email}</span>
              </div>
              <div className="user-detail-item">
                <Phone size={16} />
                <span>{user.phone}</span>
              </div>
              <div className="user-detail-item">
                <Globe size={16} />
                <span>{user.website}</span>
              </div>
            </div>

            <Link to={`/user/${user.id}`} className="view-detail-btn">
              View Profile 
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;