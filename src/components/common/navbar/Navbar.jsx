import React from 'react';
import { Router, Link } from 'react-router-dom';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <Link to="/" className="navbar-item">Home</Link>
      <Link to="/about" className="navbar-item">About</Link>
      <Link to="/portfolio"className="navbar-item">Portfolio</Link>
      <Link to="/blog"className="navbar-item">Blog</Link>
      <Link to="/contact"className="navbar-item">Contact</Link>
  </section>
  )

}

export default Navbar;