import { NavLink } from 'react-router-dom'
import logo from '../assets/logo1.png'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
const links = [
  {
    label: "Our Story",
    path: "/",
  },
  {
    label: "Menu",
    path: "/Menu",
  },
  {
    label: "Bakery",
    path: "/Bakery",
  },
  {
    label: "Blog",
    path: "/Blog",
  },
  {
    label: "User",
    path: "/user",
  },
  {
    label: "Reservation",
    path: "/Reservation"
  },
  {
    label: "Contact",
    path: "/Contact"
  }
];  
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setIsOpen(false); 
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <nav className="nav-bar" role="navigation" aria-label="Main navigation">
      <img className="logo" src={logo} alt="Viz logo" />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="nav-toggle"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <ul
        id="primary-navigation"
        className={isOpen ? 'nav-lists active' : 'nav-lists'}
      >
        {links.map((link) => (
          <li
            onClick={() => setIsOpen(false)}
            key={link.label}
            className="nav-link"
          >
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;