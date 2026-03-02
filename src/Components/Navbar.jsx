import { Link } from 'react-router-dom'
import logo from '../assets/logo.avif'
function Navbar() {
  return (
    <nav className="navbar">
        <div className="container nav-content">
            <div className="logo">
                <img src={logo} alt="logo" className="logo-img" />
            </div>
            <ul className="nav-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                 </li>
                <li>
                  <Link to="/service">Service</Link>
                </li>
                <li>
                  <Link to="/user">User</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;