import React from 'react';
import Link from '../../shared/link/link'
import { NavLink } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <nav className="site-nav">
        <NavLink to="/artwork/all" activeClassName="selected-link">Artwork</NavLink>
        <NavLink to="/contact" activeClassName="selected-link">Contact</NavLink>
        <NavLink to="/book-tattoo" activeClassName="selected-link">Book tattoo</NavLink>
    </nav>
  );
}

export default Navigation;