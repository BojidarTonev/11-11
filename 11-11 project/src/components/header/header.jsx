import React from 'react';
import Link from "../../shared/link/link"
import Navigation from '../navigation/navigation'
import './header.css';

function Header() {
  return (
    <div className="site-header">
        <Link to="/">
          <h1>11-11</h1>
        </Link>
        <Navigation />
    </div>
  );
}

export default Header;