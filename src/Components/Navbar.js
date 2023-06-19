import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';


function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);


    
  }, [location]);

  return (
    <div>
    <header className="header">
      <a href="/" className="logo">JM</a>

      <nav className="navbar">
        <a href="/" className="active">Home</a>
        <a href="about">About</a>
        <a href="projects">Projects</a>
        <a href="contact">Contact Me</a>
      </nav>
    </header>
</div>
  );
}

export default Navbar;
