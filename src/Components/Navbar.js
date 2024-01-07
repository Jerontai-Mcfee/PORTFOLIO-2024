import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  
  const location = useLocation();

  useEffect(() => {
   
  }, [location]);

  return (
    <div>
      <header className="header">
        <Link to="/" className="logo">JM</Link>

        <nav className="navbar">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/projects" className={location.pathname.includes('/projects') ? 'active' : ''}>Projects</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Me</Link>
         
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
