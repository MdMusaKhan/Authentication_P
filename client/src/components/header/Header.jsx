import React from 'react';
import { Link } from 'react-router-dom'; // Correct import
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Auth App</h1>
      <nav>
        <Link to="/register" className="link">Register</Link> {/* Correct usage of Link */}
        <Link to="/login" className="link">Login</Link> {/* Correct usage of Link */}
      </nav>
    </header>
  );
};

export default Header;
