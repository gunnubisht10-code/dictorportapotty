
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { businessInfo } from '../constants/businessInfo';
import { navLinks } from '../constants/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderNavLinks = (isMobile: boolean) => (
    navLinks.map((link) => (
      <li key={link.path} className="relative group">
        <NavLink
          to={link.path}
          className={({ isActive }) =>
            `block py-2 px-3 rounded ${
              isActive ? 'text-accent' : 'text-white'
            } hover:text-accent transition-colors duration-300 font-semibold ${isMobile ? 'text-lg' : ''}`
          }
          onClick={() => isMobile && setIsMenuOpen(false)}
        >
          {link.name}
        </NavLink>
        {link.subLinks && (
          <ul className="absolute left-0 mt-1 w-56 bg-primary shadow-lg rounded-md hidden group-hover:block z-50">
            {link.subLinks.map((subLink) => (
              <li key={subLink.path}>
                <Link to={subLink.path} className="block px-4 py-2 text-white hover:bg-secondary hover:text-accent transition-colors duration-300">
                  {subLink.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))
  );

  return (
    <header className="bg-primary shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold font-serif">
              {businessInfo.name}
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4">
              {renderNavLinks(false)}
            </ul>
          </nav>
          <div className="hidden md:flex items-center space-x-4 text-white">
            <a href={`tel:${businessInfo.phone.replace(/\D/g, '')}`} className="font-bold text-accent hover:underline">
              {businessInfo.phone}
            </a>
            <Link to="/contact" className="bg-accent text-primary font-bold py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors duration-300">
              Get a Quote
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {renderNavLinks(true)}
             <li className="pt-4">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block text-center w-full bg-accent text-primary font-bold py-3 px-4 rounded-md hover:bg-yellow-400 transition-colors duration-300">
                    Get a Free Quote
                </Link>
             </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
