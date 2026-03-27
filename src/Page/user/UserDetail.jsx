import { useParams, Link } from 'react-router-dom';
import { Data } from './Data';
import { Mail, Phone, Globe, ChevronLeft, User as UserIcon, Shield, Hash, Layout } from "lucide-react";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './User.css';

function UserDetail() {
    const { id } = useParams();
    const data = Data.find((user) => user.id === Number(id));

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    if (!data) {
        return (
            <div className="user-detail-wrapper">
                <div className="error-state">
                    <h2>Member Not Found</h2>
                    <Link to="/user" className="back-link">
                        <ChevronLeft size={20} /> Back to Directory
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="user-detail-wrapper bg-[#ebe5d9] min-h-screen py-10 md:py-24 px-5 flex justify-center items-start font-sans">
            <div className="profile-card bg-white w-full max-w-[950px] rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-[350px_1fr]" data-aos="zoom-in">
                <aside className="profile-sidebar bg-gradient-to-br from-[#432c28] to-[#2d1d1a] p-10 md:p-14 text-white flex flex-col items-center text-center">
                    <div className="profile-avatar-large w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-full overflow-hidden flex justify-center items-center mb-8 border-4 border-white/20 text-[#e6b17e] shadow-xl" data-aos="scale-up" data-aos-delay="200">
                        <img src={data.image} alt={data.name} className="profile-img-large w-full h-full object-cover" />
                    </div>

                    <h2 className="text-3xl font-semibold mb-2">{data.name}</h2>
                    <p className="username text-[#e6b17e] text-lg mb-10 opacity-90">@{data.username}</p>
                    
                    <Link to="/user" className="back-link mt-auto flex items-center gap-2 px-5 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all hover:-translate-x-1 font-medium">
                        <ChevronLeft size={18} /> Back to Directory
                    </Link>
                </aside>

                <main className="profile-main p-8 md:p-14 flex flex-col gap-10">
                    <section className="profile-section" data-aos="fade-up" data-aos-delay="400">
                        <h4 className="text-xs uppercase tracking-widest text-[#c26a38] font-bold mb-6">Identity Details</h4>
                        <div className="info-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            <div className="info-item flex items-center gap-5">
                                <div className="info-icon w-12 h-12 bg-[#fdfaf5] rounded-xl flex items-center justify-center text-[#c26a38]">
                                    <Hash size={20} />
                                </div>
                                <div className="info-text flex flex-col">
                                    <span className="info-label text-xs text-gray-400 mb-0.5">Member ID</span>
                                    <span className="info-value text-lg font-medium text-[#1a1a1a]">EMP-{data.id.toString().padStart(4, '0')}</span>
                                </div>
                            </div>
                            <div className="info-item flex items-center gap-5">
                                <div className="info-icon w-12 h-12 bg-[#fdfaf5] rounded-xl flex items-center justify-center text-[#c26a38]">
                                    <Shield size={20} />
                                </div>
                                <div className="info-text flex flex-col">
                                    <span className="info-label text-xs text-gray-400 mb-0.5">Access Level</span>
                                    <span className="info-value text-lg font-medium text-[#1a1a1a]">Verified Consultant</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="profile-section" data-aos="fade-up" data-aos-delay="500">
                        <h4 className="text-xs uppercase tracking-widest text-[#c26a38] font-bold mb-6">Contact Communication</h4>
                        <div className="info-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            <div className="info-item flex items-center gap-5">
                                <div className="info-icon w-12 h-12 bg-[#fdfaf5] rounded-xl flex items-center justify-center text-[#c26a38]">
                                    <Mail size={20} />
                                </div>
                                <div className="info-text flex flex-col">
                                    <span className="info-label text-xs text-gray-400 mb-0.5">Business Email</span>
                                    <span className="info-value text-md md:text-lg font-medium text-[#1a1a1a] break-all">{data.email}</span>
                                </div>
                            </div>
                            <div className="info-item flex items-center gap-5">
                                <div className="info-icon w-12 h-12 bg-[#fdfaf5] rounded-xl flex items-center justify-center text-[#c26a38]">
                                    <Phone size={20} />
                                </div>
                                <div className="info-text flex flex-col">
                                    <span className="info-label text-xs text-gray-400 mb-0.5">Direct Line</span>
                                    <span className="info-value text-lg font-medium text-[#1a1a1a]">{data.phone}</span>
                                </div>
                            </div>
                            <div className="info-item flex items-center gap-5">
                                <div className="info-icon w-12 h-12 bg-[#fdfaf5] rounded-xl flex items-center justify-center text-[#c26a38]">
                                    <Globe size={20} />
                                </div>
                                <div className="info-text flex flex-col">
                                    <span className="info-label text-xs text-gray-400 mb-0.5">Digital Presence</span>
                                    <span className="info-value text-lg font-medium text-[#1a1a1a]">{data.website}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default UserDetail;

