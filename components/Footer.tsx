import React from 'react';
import { Link } from 'react-router-dom';
import { businessInfo } from '../constants/businessInfo';
import { navLinks } from '../constants/navigation';
import { services } from '../constants/services';
import { areas } from '../constants/areas';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold font-serif mb-4 text-accent">{businessInfo.name}</h3>
          <p className="text-gray-300 text-sm mb-4">
            Your trusted local partner for all portable sanitation needs in Decatur, TX, and surrounding areas. We offer fast, reliable, and clean solutions for construction sites, events, and more.
          </p>
          <div className="space-y-2 text-sm">
              <p className="flex items-start"><strong className="w-16">Address:</strong><span>{businessInfo.address}</span></p>
              <p><strong className="w-16">Phone:</strong> <a href={`tel:${businessInfo.phone.replace(/\D/g, '')}`} className="hover:text-accent">{businessInfo.phone}</a></p>
              <p><strong className="w-16">Email:</strong> <a href={`mailto:${businessInfo.email}`} className="hover:text-accent">{businessInfo.email}</a></p>
              <p><strong className="w-16">Hours:</strong> {businessInfo.hours}</p>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-accent transition-colors">{link.name}</Link>
              </li>
            ))}
            <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map(service => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} className="hover:text-accent transition-colors">{service.title}</Link>
              </li>
            ))}
             <li><Link to="/services" className="hover:text-accent transition-colors font-semibold">View All Services...</Link></li>
          </ul>
        </div>
        
        {/* Service Areas */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
          <ul className="space-y-2 text-sm">
             <li><Link to="/" className="hover:text-accent transition-colors">Decatur, TX</Link></li>
            {areas.slice(0, 5).map(area => (
              <li key={area.slug}>
                <Link to={`/service-areas/${area.slug}`} className="hover:text-accent transition-colors">{area.city}, {area.state}</Link>
              </li>
            ))}
            <li><Link to="/service-areas" className="hover:text-accent transition-colors font-semibold">View All Areas...</Link></li>
          </ul>
        </div>

      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} {businessInfo.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;