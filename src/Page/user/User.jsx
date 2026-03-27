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
    <div className="user-page-wrapper bg-[#ebe5d9] min-h-screen p-10 md:p-20 flex flex-col items-center">
      <header className="user-header text-center mb-16 max-w-[800px]" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#c26a38] font-medium mb-5 tracking-tighter">Our Creative Team</h1>
        <p className="text-lg text-[#4a4a4a] leading-relaxed">Meet the talented individuals who bring our vision to life. Each member brings unique expertise and passion to ensure the highest quality experience.</p>
      </header>

      <div className="user-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] w-full">
        {data.map((user, index) => (
          <div 
            key={user.id} 
            className="user-card bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-[#c26a38]/10 relative overflow-hidden" 
            data-aos="fade-up" 
            data-aos-delay={index * 100}
          >
            <div className="user-avatar w-20 h-20 bg-[#f5f0e6] rounded-full overflow-hidden flex justify-center items-center mb-5 border-2 border-white shadow-sm shrink-0">
              <img src={user.image} alt={user.name} className="user-avatar-img w-full h-full object-cover" />
            </div>

            <div className="user-info">
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-1">{user.name}</h3>
              <p className="user-username text-sm text-[#c26a38] font-medium mb-5">@{user.username}</p>
            </div>

            <div className="user-details w-full border-t border-gray-100 pt-5 mb-6 flex flex-col gap-3">
              <div className="user-detail-item flex items-center justify-center gap-2.5 text-gray-600 text-sm">
                <Mail size={16} className="text-[#c26a38] opacity-70" />
                <span>{user.email}</span>
              </div>
              <div className="user-detail-item flex items-center justify-center gap-2.5 text-gray-600 text-sm">
                <Phone size={16} className="text-[#c26a38] opacity-70" />
                <span>{user.phone}</span>
              </div>
              <div className="user-detail-item flex items-center justify-center gap-2.5 text-gray-600 text-sm">
                <Globe size={16} className="text-[#c26a38] opacity-70" />
                <span>{user.website}</span>
              </div>
            </div>

            <Link to={`/user/${user.id}`} className="view-detail-btn w-full bg-[#432c28] text-white py-3 rounded-lg font-medium hover:bg-[#c26a38] transition-all hover:shadow-lg">
              View Profile 
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;