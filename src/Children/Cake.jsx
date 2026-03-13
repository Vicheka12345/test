import React from 'react'
import "./Cake.css"
import cake1 from "../img/cake1.avif"
import cake2 from "../img/cake2.avif"
import cake3 from "../img/cake3.avif"
import cake4 from "../img/cake4.avif"
import cake5 from "../img/cake5.avif"
import cake6 from "../img/cake6.avif"   
import item2 from "./image/item2.avif"
import item4 from "./image/item4.avif"
import item21 from "./image/item21.avif"
import item6 from "./image/item6.avif"
import item7 from "./image/item7.avif"
import item8 from "./image/item8.avif"
import item9 from "./image/item9.avif"
import item10 from "./image/item10.avif"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Manu() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const images = [
    { id: 1, src: cake1, label: "Freshly Baked", delay: "0" },
    { id: 2, src: cake2, label: "Daily Delights", delay: "200" },
    { id: 3, src: cake3, label: "Sweet Indulgence", delay: "400" },
    { id: 4, src: cake4, label: "Seasonal Favorites", delay: "0" },
    { id: 5, src: cake5, label: "Coffee Companions", delay: "200" },
    { id: 6, src: cake6, label: "Celebration Cakes", delay: "400" }
  ];
  const items = [
    { id: 1, 
      name: "Whole Wheat Multigrain",
      desc: "Whole wheat flour, oats, seeds, honey", 
      price: "$6.40", 
      img: item2 
    },
    { id: 2, 
      name: "Fresh Fruit Tart", 
      desc: "Short-crust pastry, seasonal fruits.", 
      price: "$10.00", 
      img: item4 
    },
    { id: 3, 
      name: "Tiramisu", 
      desc: "Sugar, strong coffee and cocoa powder.", 
      price: "$11.90", 
      img: item21 
    },
    { id: 4, 
      name: "French Baguette ", 
      desc: "Wheat flour, yeast, water, salt.", 
      price: "$12.00", 
      img: item6 
    
    },
    { id: 5, 
      name: "Almond Danish.", 
      desc: "Puff pastry, almond paste, sugar glaze", 
      price: "$9.90", 
      img: item7 
    },
    { id: 6, 
      name: "Sourdough Loaf", 
      desc: "Flour, natural starter, water, salt.", 
      price: "$10.00", 
      img: item8 
    },
    { id: 7, 
      name: "Glazed Donut", 
      desc: "Yeast dough, sugar glaze, milk, butter.", 
      price: "$6.40", 
      img: item9 
    },
    { id: 8, 
      name: "Lemon Tart", 
      desc: "Lemon curd, butter, sugar, pastry crust.", 
      price: "$5.58", 
      img: item10 
    },
  ];  

  return <div className="menu-outer-wrapper">
    <div className="gallery-container">
      <div className="menu-header" data-aos="fade-down">
        <h1>
          <img src={cake1} alt="" />
          Our Delicious Menu
        </h1>
      </div>
      <div className="gallery-grid">
        {images.map((img) => (
          <div 
            key={img.id} 
            className="gallery-item"
            data-aos="fade-up"
            data-aos-delay={img.delay}
          >
            <img src={img.src} alt={img.label} />
            <div className="label-overlay">
              <span>{img.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="menu-list-container">
      <div className="menu-items-grid">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className="menu-item-card"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="item-image">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="item-details">
              <h4 className="item-name">{item.name}</h4>
              <p className="item-desc">{item.desc}</p>
            </div>
            <div className="item-price-tag">
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
};

export default Manu    