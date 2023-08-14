 
// Navbar.js 
import { NavLink } from 'react-router-dom';
import "../styles/navbar.css"
import React from "react"
import { useState } from "react"

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const closeMenu = () => {
    setIsNavExpanded(false);
  };


  return (
    <nav className="navigation">
      <NavLink to="/" className="brand-name" onClick={closeMenu}>
        JordanW
      </NavLink>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
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
          </svg>      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/resume" onClick={closeMenu}>Resume</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/about" onClick={closeMenu}>About</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/posts" onClick={closeMenu}>Posts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}