import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = ({ cart }) => {
  const totalItems = Object.values(cart || {}).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span>The Tavern</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/menu">FULL MENU</Link></li>
        <li><Link to="/our-story">OUR STORY</Link></li> {/* Updated to Link */}
        <li><button className="order-btn">ORDER ONLINE</button></li>
        <li className="cart-icon">
          <Link to="/cart" className="cart-link">
            🛒
            {totalItems > 0 && (
              <span className="cartbadge">{totalItems}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;