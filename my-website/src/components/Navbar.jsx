import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar({ links }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleMenu = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="navigation">
      <NavLink to="/" onClick={toggleMenu}>
        JordanW
      </NavLink>
      <button className="hamburger" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12 a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12 a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6 a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={`navigation-menu ${isNavExpanded ? 'expanded' : ''}`}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to} onClick={toggleMenu}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
