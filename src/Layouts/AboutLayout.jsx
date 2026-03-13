import { NavLink, Outlet } from "react-router-dom";
import "./AboutLayout.css";

function AboutLayout() {
  return (
    <div className="about-layout-container">
      <div className="about-header">
        <h1 className="menu-title">
          <span className="title-large">MENU</span>
        </h1>
        <nav className="about-nav">
          <NavLink to="/Menu" end className={({ isActive }) => isActive ? "nav-link-sub active" : "nav-link-sub"}>
            <span className="nav-icon"></span> Cake
          </NavLink>
          <NavLink to="Drink" className={({ isActive }) => isActive ? "nav-link-sub active" : "nav-link-sub"}>
             <span className="nav-icon"></span> Drink
          </NavLink>
          <NavLink to="Breakfast" className={({ isActive }) => isActive ? "nav-link-sub active" : "nav-link-sub"}>
            <span className="nav-icon"></span> Breakfast
          </NavLink>
        </nav>
      </div>
      <div className="about-content">
        <Outlet />
      </div>
    </div>
  )
  
}

export default AboutLayout;

