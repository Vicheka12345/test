import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from "../img/image-story1.avif";
import image2 from "../img/image-story2.avif";
import top from "../img/top.avif"
import left1 from "../img/left1.avif"
import left2 from "../img/left2.avif"
import right1 from "../img/right1.avif"
import right2 from "../img/right2.avif"
import cook from "../img/cook.avif"
import pongtea from "../img/pongtea.png"

import './Ourstory.css';

const OurStory = () => {
  // 1. Initialize AOS inside the main component
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: false,    
    });
  }, []);

  // 2. State for Accordion
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // 3. Images array defined inside (or outside) the component
  const images = [
    { id: 1, src: left2, class: 'fan-left-outer', anim: 'fade-up-right', delay: '400' },
    { id: 2, src: left1, class: 'fan-left-inner', anim: 'fade-up-right', delay: '200' },
    { id: 3, src: top ,class: 'fan-center',     anim: 'fade-up',       delay: '0'   },
    { id: 4, src: right2, class: 'fan-right-inner', anim: 'fade-up-left',  delay: '200' },
    { id: 5, src: right1, class: 'fan-right-outer', anim: 'fade-up-left',  delay: '400' },
  ];

  const accordionItems = [
    {
      title: "A Taste of Tomorrow",
      content: "Our commitment to crafting recipes that honor classic flavors while embracing fresh ideas, healthier choices & sustainable practices."
    },
    {
      title: "Passion in Action",
      content: " From the first crack of dawn to the last loaf out of the oven, our team pours heart, creativity, and dedication into every bake."
    },
    {
      title: "Innovating Every Bite",
      content: "From experimenting with modern techniques to exciting new recipes, we strive to make every bite feel fresh, unique, and unforgettable."
    }
  ];
  const articles = [
    {
      id: 1,
      image: left1,
      date: "03.11.2026",
      title: "Sweet traditions that continue to inspire our modern bakery creations"
    },
    {
      id: 2,
      image: right1,
      date: "03.11.2026",
      title: "From oven to table fresh treats crafted with love and care"
    }
  ];

  return (
    <div>
      <article>
        <h1>Beyond's <br />The Viz</h1>
      </article>

      <div className="full-container">
        <div className="left-container">
          <p data-aos="zoom-in-down" >We blend traditional baking methods with fresh, modern ideas to craft treats.</p>
          <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" src={image1} alt="Story 1" />
        </div>

        <div className="Mid-container">
          <img data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" src={image2} alt="Story 2" />
        </div>

        <div className="right-container">
          <p data-aos="zoom-in-down">For us, baking isn't just about bread and cakes; it's about people.</p>
          <p data-aos="zoom-in-down">Our bakery is a place where neighbors gather, families meet, and every customer is part of our extended family.</p>
          <button className="menu-btn" data-aos="zoom-in-down">View Our Menu &rarr;</button>
        </div>
      </div>

      <div className="Reservation">
        <p data-aos="zoom-in-down">
          From humble beginnings to becoming a part of countless celebrations, our <br /> 
          journey has always been guided by a love for baking and a desire to bring <br />
          people together.
        </p>
        <button className="reservation-btn">Make Reservation &rarr;</button>
      </div>

      <div className="fan-container">
        {images.map((img) => (
          <div
            key={img.id}
            className={`fan-card ${img.class}`}
            data-aos={img.anim}
            data-aos-delay={img.delay}
          >
            <img src={img.src} alt="Gallery item" />
          </div>
        ))}
      </div>
      <div className="bakery-section">
        <div className="bakery-image" data-aos="fade-right">
          <img src={cook} alt="Baker working at oven" />
        </div>

        <div className="bakery-content" data-aos="fade-left">
          <div className="accordion">
            {accordionItems.map((item, index) => (
              <div 
                key={index} 
                className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="accordion-header" 
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title} 
                  <span className="icon">{activeIndex === index ? '−' : '+'}</span>
                </button>
                <div className="accordion-body">
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#" className="menu-btn">View Our Menu &rarr;</a>
        </div>
      </div>
      <section className="oven-masters-section">
        <div className="content-header" data-aos="fade-up">
          <h1>The Oven Masters</h1>
          <p>Our Oven Masters bring years of experience, creativity & heart into every batch ensuring each loaf, cake & cookie carries the taste of tradition & the joy of innovation.</p>
        </div>

        <div className="masters-grid">
          <div className="master-card" data-aos="fade-up" data-aos-delay="200">
            <div className="image-wrapper">
              <img src={pongtea} alt="pongtea" />
            </div>
            <div className="name-tag">
              <h3>pongtea Sngaor</h3>
              <span>Head Bakery</span>
            </div>
          </div>

          <div className="master-card" data-aos="fade-up" data-aos-delay="400">
            <div className="image-wrapper">
              <img src={pongtea} alt="Pongtea" />
            </div>
            <div className="name-tag">
              <h3>Pongtea Sngaor</h3>
              <span>Cake Designer</span>
            </div>
          </div>
          </div>
      </section>
            <section className="articles-section">
      <div className="container">
        <h2 className="main-heading">Latest Articles</h2>
        
        <div className="articles-grid ">
          {articles.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-image-wrapper" data-aos="flip-left">
                <img src={article.image} alt="Bakery creation"  className="article-image" />
                <div className="date-badge" >{article.date}</div>
              </div>
              <h3 className="article-title" data-aos="fade-up" data-aos-duration="3000">{article.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};
export default OurStory;