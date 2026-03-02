import React from 'react'

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-grid">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Building beautiful React applications with passion.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/service">Service</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: Mrvichz190@gmail.com</p>
                    <p>Phone:  (+855) 12-621-443</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Hello React. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer   