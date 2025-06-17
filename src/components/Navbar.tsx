// src/components/Navbar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const { pathname } = useLocation();

  const linkStyle = (path: string) =>
    `hover:text-custom-purple transition ${
      pathname === path ? 'text-custom-purple font-semibold' : 'text-custom-teal'
    }`;

  return (
    <nav className="bg-dark-gray text-light-gray py-4 px-8 border-b border-gray-700 flex gap-6">
      <Link to="/" className={linkStyle('/')}>Home</Link>
      <Link to="/registry" className={linkStyle('/registry')}>Registry</Link>
      <Link to="/about" className={linkStyle('/about')}>About</Link>
    </nav>
  );
};