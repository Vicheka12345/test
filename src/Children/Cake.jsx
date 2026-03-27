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

  return (
    <div className="menu-outer-wrapper overflow-hidden bg-[#ede6d9] max-w-[1400px] mx-auto my-10 shadow-lg">
      <div className="gallery-container">
        <div className="menu-header text-center mb-8 px-4" data-aos="fade-down">
          <h1 className="flex flex-col md:flex-row items-center justify-center gap-5 text-4xl md:text-5xl lg:text-6xl text-[#ba652d] font-serif">
            <img className="hidden md:block w-[150px] h-[80px] object-cover rounded-[50px] shadow-xl transition-transform duration-500 hover:scale-105 hover:rotate-2" src={cake1} alt="" />
            Our Delicious Menu
          </h1>
        </div>
        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-[#ede6d9]">
          {images.map((img) => (
            <div 
              key={img.id} 
              className="gallery-item relative overflow-hidden aspect-square"
              data-aos="fade-up"
              data-aos-delay={img.delay}
            >
              <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src={img.src} alt={img.label} />
              <div className="label-overlay absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent text-white text-xl">
                <span>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="menu-list-container p-5 md:p-10 lg:p-14">
        <div className="menu-items-grid grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-[1200px] mx-auto">
          {items.map((item, index) => (
            <div 
              key={item.id} 
              className="menu-item-card flex items-center gap-4 bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="item-image w-20 h-20 md:w-24 md:h-24 shrink-0">
                <img className="w-full h-full object-cover rounded-lg" src={item.img} alt={item.name} />
              </div>
              <div className="item-details grow">
                <h3 className="item-name text-lg md:text-xl font-medium text-black mb-1">{item.name}</h3>
                <p className="item-desc text-sm md:text-base text-gray-500">{item.desc}</p>
              </div>
              <div className="item-price-tag shrink-0 px-4 py-1.5 border border-gray-100 rounded-full bg-white text-sm font-medium">
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manu    