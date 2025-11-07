
import React from 'react';
import { Link } from 'react-router-dom';
import { businessInfo } from '../constants/businessInfo';

const StickyFooter: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-primary shadow-lg z-50 border-t-2 border-accent">
      <div className="flex justify-around items-center h-16">
        <a 
          href={`tel:${businessInfo.phone.replace(/\D/g, '')}`} 
          className="flex-1 flex flex-col items-center justify-center h-full text-white hover:bg-secondary transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-sm font-semibold">Click to Call</span>
        </a>
        <div className="w-px h-full bg-secondary"></div>
        <Link 
          to="/contact" 
          className="flex-1 flex flex-col items-center justify-center h-full bg-accent text-primary hover:bg-yellow-400 transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <span className="text-sm font-semibold">Get a Quote</span>
        </Link>
      </div>
    </div>
  );
};

export default StickyFooter;
