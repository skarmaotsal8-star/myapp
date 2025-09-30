import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>SkillHub</h1>
      <ul>
        <li>
          <Link to="/profile" className="nav-link">Profile</Link>
        </li>
        <li>
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/requests" className="nav-link">Request</Link>
        </li>
        <li>
          <Link to="/responses" className="nav-link">Response</Link>
        </li>
        <li>
          <Link to="/premium" className="nav-link">Premium</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
