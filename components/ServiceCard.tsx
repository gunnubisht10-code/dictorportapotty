
import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <Link 
            to={`/services/${service.slug}`} 
            className="group block bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 h-full"
        >
            <div className="relative">
                <img 
                    src={service.image} 
                    alt={service.altText} 
                    className="w-full h-48 object-cover" 
                    loading="lazy" 
                    width="400"
                    height="192"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-colors duration-300"></div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold font-serif text-primary group-hover:text-secondary mb-2">{service.title}</h3>
                <p className="text-neutral text-sm mb-4">{service.description}</p>
                <span className="font-semibold text-secondary group-hover:text-accent">
                    Learn More &rarr;
                </span>
            </div>
        </Link>
    );
};

export default ServiceCard;
