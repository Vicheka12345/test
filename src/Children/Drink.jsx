import React from 'react';
import './Drink.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cafe1 from "./image/cafe1.jpg"
import cafe2 from "./image/cafe2.jpg"
import cafe3 from "./image/cafe3.png"
import america from "./image/americano.webp"
import matcha from "./image/matcha.webp"  

const Drink = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const images = [
    { id: 1, src: matcha, type: 'large' },
    { id: 2, src: cafe1, type: 'small', overlay: 'We\'re Hiring' },
    { id: 3, src: cafe2, type: 'small' },
    { id: 4, src: cafe3, type: 'small' },
    { id: 5, src: america, type: 'small' },
  ];

  const drinkItems = [
    { id: 1, name: "Matcha Latte", desc: "Premium grade matcha with steamed milk", price: "$5.50" },
    { id: 2, name: "Iced Americano", desc: "Double shot espresso over ice", price: "$4.00" },
    { id: 3, name: "Caramel Macchiato", desc: "Espresso with vanilla and caramel", price: "$6.00" },
    { id: 4, name: "Nitro Cold Brew", desc: "Smooth, velvety cold brew on tap", price: "$5.00" },
  ];

  return <div className="drink-container">

    <div className="drink-menu-section" data-aos="fade-up">
      <h2 className="section-title">Nourishing Brews</h2>
      <div className="drink-grid">
        {drinkItems.map(item => (
          <div key={item.id} className="drink-card">
            <div className="drink-info">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
            <div className="drink-price">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="insta-section">
      <h2 className="section-title">Follow Our Journey</h2>
      <div className="insta-grid">
        {images.map((img) => (
          <div key={img.id} className={`insta-item ${img.type}`} data-aos="zoom-in" data-aos-delay={img.id * 100}>
            <img src={img.src} alt="Gallery" />
            {img.overlay && <div className="text-overlay">{img.overlay}</div>}
            {img.id === 1 && <button className="follow-btn">Follow Us</button>}
          </div>
        ))}
      </div>
    </div>
  </div>
};

export default Drink;
