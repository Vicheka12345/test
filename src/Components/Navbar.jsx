import { NavLink } from 'react-router-dom'
import logo from '../assets/logo1.png'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
const links = [
  {
    label: "Story",
    path: "/",
  },
  {
    label: "Menu",
    path: "/Menu",
  },
  {
    label: "Bakers",
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
    label: "Contact us",
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
    <nav className="nav-bar flex items-center justify-between md:px-16 lg:px-28 py-4 bg-[#233D4C] sticky top-0 z-[200]" role="navigation" aria-label="Main navigation">
      <div className="px-5 md:px-0">
         <img className="w-[120px] md:w-[150px]" src={logo} alt="Viz logo" />
      </div>
      
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-transparent border-none outline-none text-white cursor-pointer px-5"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links */}
      <ul
        id="primary-navigation"
        className={`
          nav-lists flex gap-4 font-medium transition-all duration-300 ease-in-out
          absolute md:static top-full left-0 right-0 bg-[#233D4C] md:bg-transparent
          flex-col md:flex-row items-start md:items-center overflow-hidden md:overflow-visible
          pl-10 md:px-0
          ${isOpen ? 'active max-h-[500px] py-10 md:py-0' : 'max-h-0 md:max-h-full py-0'}
          md:flex
        `}
      >
        {links.map((link) => (
          <li
            onClick={() => setIsOpen(false)}
            key={link.label}
            className="w-full md:w-auto ml-2.5 md:ml-0"
          >
            <NavLink
              to={link.path}
              className={({ isActive }) => `
                block py-3 md:py-2 px-0 md:px-3 text-lg text-white hover:text-orange-400 transition-colors
                ${isActive ? 'text-orange-400 font-bold underline' : ''}
              `}
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