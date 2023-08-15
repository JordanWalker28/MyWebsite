import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const closeMenu = () => {
    setIsNavExpanded(false);
  };

  const toggleMenu = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="navigation">
      <Link to="/" className="brand-name" onClick={closeMenu}>
        JordanW
      </Link>
      <button className="hamburger" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={`navigation-menu ${isNavExpanded ? 'expanded' : ''}`}>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/projects" onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/posts" onClick={closeMenu}>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/resume" onClick={closeMenu}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
