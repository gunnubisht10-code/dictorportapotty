
import React from 'react';
import Seo from '../components/Seo';
import ServiceCard from '../components/ServiceCard';
import { services } from '../constants/services';
import { businessInfo } from '../constants/businessInfo';
import Breadcrumbs from '../components/Breadcrumbs';
import { Breadcrumb } from '../types';

const ServicesHubPage: React.FC = () => {
    const pageUrl = `https://${businessInfo.domain}/#/services`;
    const crumbs: Breadcrumb[] = [{ name: 'Services', path: '/services' }];

    return (
        <div>
            <Seo
                title={`Porta Potty Services in Decatur, TX | ${businessInfo.name}`}
                description={`Explore all porta potty rental services offered by ${businessInfo.name}, including standard, deluxe, ADA, and luxury restroom trailers for any event or construction site in Decatur.`}
                canonicalUrl={pageUrl}
                breadcrumbs={crumbs}
            />

            <div className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-serif">Our Porta Potty Services</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        We provide a comprehensive range of portable sanitation solutions to meet the specific needs of your project or event in the Decatur area.
                    </p>
                </div>
            </div>
            
            <Breadcrumbs crumbs={crumbs} />

            <div className="py-16 md:py-24 bg-neutral-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map(service => (
                            <ServiceCard key={service.slug} service={service} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesHubPage;