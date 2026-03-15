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
        <div className="user-detail-wrapper">
            <div className="profile-card" data-aos="zoom-in">
                <aside className="profile-sidebar">
                    <div className="profile-avatar-large" data-aos="scale-up" data-aos-delay="200">
                        <UserIcon size={80} strokeWidth={1} />
                    </div>
                    <h2>{data.name}</h2>
                    <p className="username">@{data.username}</p>
                    
                    <Link to="/user" className="back-link">
                        <ChevronLeft size={18} /> Directory
                    </Link>
                </aside>

                <main className="profile-main">
                    <section className="profile-section" data-aos="fade-up" data-aos-delay="400">
                        <h4>Identity Details</h4>
                        <div className="info-grid">
                            <div className="info-item">
                                <div className="info-icon"><Hash size={20} /></div>
                                <div className="info-text">
                                    <span className="info-label">Member ID</span>
                                    <span className="info-value">EMP-{data.id.toString().padStart(4, '0')}</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon"><Shield size={20} /></div>
                                <div className="info-text">
                                    <span className="info-label">Access Level</span>
                                    <span className="info-value">Verified Consultant</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="profile-section" data-aos="fade-up" data-aos-delay="500">
                        <h4>Contact Communication</h4>
                        <div className="info-grid">
                            <div className="info-item">
                                <div className="info-icon"><Mail size={20} /></div>
                                <div className="info-text">
                                    <span className="info-label">Business Email</span>
                                    <span className="info-value">{data.email}</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon"><Phone size={20} /></div>
                                <div className="info-text">
                                    <span className="info-label">Direct Line</span>
                                    <span className="info-value">{data.phone}</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon"><Globe size={20} /></div>
                                <div className="info-text">
                                    <span className="info-label">Digital Presence</span>
                                    <span className="info-value">{data.website}</span>
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

