import React from 'react';
import Link from '../../shared/link/link'
import './navigation.css';

function Navigation() {
  return (
    <nav className="site-nav">
      <ul>
        <Link to="/artwork/all">Artwork</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/book-tattoo">Book tattoo</Link>
      </ul>
    </nav>
  );
}

export default Navigation;