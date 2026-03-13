import React from 'react';
import './breakfast.css';
import leaf from "./image/leafs.png"
import protein from "./image/protein.jpg"
const Data = {
  mainCourse: [
    { name: "Fried Rice", price: "99" },
    { name: "Sirloin Steak", price: "99" },
    { name: "Spicy Chicken", price: "99" },
    { name: "Grilled Salmon Fish", price: "99" },
  ],
  appetizers: [
    { name: "Avocado Toast", price: "119" },
    { name: "Spaghetti Pasta", price: "1191" },
    { name: "Chicken Pie", price: "119" },
    { name: "Fish Sandwich", price: "119" },
  ],
  drinks: [
    { name: "Avocado", price: "90" },
    { name: "Chicken", price: "70" },
    { name: "Corn", price: "80" },
    { name: "Rice", price: "30" },
  ]
};

const Breakfast = () => {
  const menuCategories = [
    {
      title: "MAIN COURSE",
      items: Data.mainCourse,
      img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1000"
    },
    {
      title: "APPETIZERS",
      items: Data.appetizers,
      img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1000"
    },
    {
      title: "Protein",
      items: Data.drinks,
      img: protein
    }
  ];

  return (
    <div className="menu-page">
      <img src={leaf} className="bg-leaf" alt="" />
      
      {/* Vertical Side Banner */}
      <div className="side-menu-banner">
        <span>ALL DAY BREAKFAST </span>
      </div>

      <div className="menu-container">
        <header className="menu-header">
          <div className="title-wrapper">
            <div className="title-line"></div>
            <h1 className="food-menu-title">Breakfast</h1>
            <div className="title-line"></div>
          </div>
        </header>

        <div className="menu-content-grid">
          {menuCategories.map((category, catIdx) => (
            <section key={catIdx} className="menu-section">
              <div className="yellow-side-bar"></div>
              <div className="menu-content">
                <div className="menu-text-card">
                  <div className="category-header">
                    <h2 className="category-title">{category.title}</h2>
                    <div className="category-underline"></div>
                  </div>
                  <ul className="menu-items">
                    {category.items.map((item, index) => (
                      <li key={index} className="menu-item">
                        <span className="item-name">{item.name}</span>
                        <span className="item-price">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="menu-image-card">
                  <div className="yellow-arc"></div>
                  <div className="image-circle">
                    <img src={category.img} alt={category.title} />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* 3. Footer Section */}
        <footer className="menu-footer">
          <div className="footer-pill-container">
            <div className="footer-pill">
              <span className="icon">📞</span>
              <span className="text">984566***</span>
            </div>
            <div className="footer-pill">
              <span className="icon">🌐</span>
              <span className="text">www.hariedits.com</span>
            </div>
          </div>
          <div className="footer-line"></div>
        </footer>
      </div>
    </div>
  );
};

export default Breakfast;