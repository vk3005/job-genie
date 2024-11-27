import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/assets/images/favicons/favicon-32x32.png" alt="logo" />
        </Link>
        <p className="job-genie">
          Job <span className="genie">Genie</span>
        </p>
      </div>
      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/JobSearch">Job</Link>
        </li>
        <li>
          <Link to="/AboutPage">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login" className="myBtn">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;