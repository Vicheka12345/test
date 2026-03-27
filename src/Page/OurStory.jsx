import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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
    <div className="font-sans overflow-x-hidden">
      <article className="py-10 md:py-20 lg:py-28 text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#4E362E] font-medium italic leading-tight">
          Beyond's <br />The Viz
        </h1>
      </article>

      <div className="full-container flex flex-col md:flex-row w-[90%] mx-auto gap-8 mb-20">
        <div className="left-container w-full md:w-[30%] mt-5 md:mt-48 order-2 md:order-1">
          <p className="text-lg text-[#4E362E] mb-5" data-aos="zoom-in-down" >We blend traditional baking methods with fresh, modern ideas to craft treats.</p>
          <img className="w-full rounded-lg shadow-lg" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" src={image1} alt="Story 1" />
        </div>

        <div className="Mid-container w-full md:w-[40%] order-1 md:order-2">
          <img className="w-full h-full object-cover rounded-2xl shadow-xl" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" src={image2} alt="Story 2" />
        </div>

        <div className="right-container w-full md:w-[30%] self-center order-3 space-y-5">
          <p className="text-lg text-[#4E362E]" data-aos="zoom-in-down">For us, baking isn't just about bread and cakes; it's about people.</p>
          <p className="text-lg text-[#4E362E]" data-aos="zoom-in-down">Our bakery is a place where neighbors gather, families meet, and every customer is part of our extended family.</p>
          <button 
            className="menu-btn bg-[#3B1F1A] text-white px-8 py-3.5 rounded-xl font-medium hover:bg-[#4E362E] transition-all hover:shadow-lg" 
            data-aos="zoom-in-down"
            onClick={() => navigate('/Menu')}
          >
            View Our Menu &rarr;
          </button>
        </div>
      </div>

      <div className="Reservation py-16 md:py-24 flex flex-col items-center justify-center gap-8 bg-transparent px-4">
        <p className="text-xl md:text-2xl text-[#4E362E] text-center max-w-[800px] leading-relaxed" data-aos="zoom-in-down">
          From humble beginnings to becoming a part of countless celebrations, our journey has always been guided by a love for baking and a desire to bring people together.
        </p>
        <button 
          className="reservation-btn bg-[#3B1F1A] text-white px-8 py-3.5 rounded-xl font-medium hover:bg-[#4E362E] transition-all hover:shadow-lg"
          onClick={() => navigate('/Reservation')}
        >
          Make Reservation &rarr;
        </button>
      </div>

      <div className="fan-container relative flex justify-center items-end h-[200px] md:h-[300px] w-[90%] mx-auto my-20 md:my-32">
        {images.map((img) => (
          <div
            key={img.id}
            className={`fan-card absolute bottom-0 w-[110px] sm:w-[150px] md:w-[230px] rounded-xl overflow-hidden shadow-2xl origin-bottom transition-all duration-500 ease-out ${img.class}`}
            data-aos={img.anim}
            data-aos-delay={img.delay}
          >
            <img className="w-full h-[180px] md:h-[350px] object-cover block" src={img.src} alt="Gallery item" />
          </div>
        ))}
      </div>

      <div className="bakery-section flex flex-col md:flex-row gap-10 md:gap-20 py-10 md:py-20 w-[90%] mx-auto items-center">
        <div className="bakery-image flex-1 w-full" data-aos="fade-right">
          <img className="w-full rounded-2xl shadow-2xl" src={cook} alt="Baker working at oven" />
        </div>

        <div className="bakery-content flex-1 w-full" data-aos="fade-left">
          <div className="accordion mb-8">
            {accordionItems.map((item, index) => (
              <div 
                key={index} 
                className={`accordion-item border border-[#cdc4b5] rounded-xl mb-4 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'border-[#3B1F1A] bg-[#4a3732]/5' : ''}`}
              >
                <button 
                  className="accordion-header w-full p-5 flex justify-between items-center text-lg md:text-xl font-medium text-left transition-colors" 
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={activeIndex === index ? 'text-[#3B1F1A]' : 'text-gray-800'}>{item.title}</span> 
                  <span className="text-2xl transition-transform duration-300">{activeIndex === index ? '−' : '+'}</span>
                </button>
                <div className={`accordion-body transition-all duration-500 ease-in-out px-5 overflow-hidden ${activeIndex === index ? 'max-h-60 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="menu-btn bg-[#3B1F1A] text-white px-8 py-3.5 rounded-xl font-medium hover:bg-[#4E362E] transition-all hover:shadow-lg"
            onClick={() => navigate('/Menu')}
          >
            View Our Menu &rarr;
          </button>
        </div>
      </div>

      <section className="oven-masters-section py-20 px-[5%] max-w-[1400px] mx-auto bg-[#e9e4d9]">
        <div className="content-header text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl text-[#4E362E] font-semibold mb-6">The Oven Masters</h1>
          <p className="text-lg md:text-2xl text-gray-500 max-w-[800px] mx-auto leading-relaxed">Our Oven Masters bring years of experience, creativity & heart into every batch ensuring each loaf, cake & cookie carries the taste of tradition & the joy of innovation.</p>
        </div>

        <div className="masters-grid">
          <div className="master-card" data-aos="fade-up" data-aos-delay="200">
            <div className="image-wrapper">
              <img src={pongtea} alt="pongtea" />
            </div>
            <div className="name-tag">
              <h3>pongtea </h3>
              <span>Bakery</span>
            </div>
          </div>

          <div className="master-card" data-aos="fade-up" data-aos-delay="400">
            <div className="image-wrapper">
              <img src={pongtea} alt="Pongtea" />
            </div>
            <div className="name-tag">
              <h3>Pongtea </h3>
              <span>Designer</span>
            </div>
          </div>
        </div>
      </section>

      <section className="articles-section bg-[#ede6d9] py-20 md:py-32 px-5">
        <div className="container max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-16 md:mb-24 text-[#1a1a1a]">Latest Articles</h2>
          
          <div className="articles-grid grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-12 lg:gap-20">
            {articles.map((article) => (
              <article key={article.id} className="article-card flex flex-col items-center group cursor-pointer">
                <div className="article-image-wrapper relative w-full mb-14" data-aos="flip-left">
                  <img src={article.image} alt="Bakery creation"  className="article-image w-full aspect-[1.4/1] object-cover rounded-2xl shadow-lg transition-transform group-hover:scale-[1.02]" />
                  <div className="date-badge absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white px-8 py-3 rounded-full text-sm md:text-base font-medium shadow-xl border border-gray-100 group-hover:bg-[#1a1a1a] group-hover:text-white transition-all">
                    {article.date}
                  </div>
                </div>
                <h3 className="article-title text-2xl md:text-3xl lg:text-4xl text-center leading-tight font-light group-hover:text-[#4a3732] transition-colors" data-aos="fade-up" data-aos-duration="3000">
                  {article.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default OurStory;