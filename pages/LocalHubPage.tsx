
import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { attractions } from '../constants/attractions';
import { businessInfo } from '../constants/businessInfo';
import Breadcrumbs from '../components/Breadcrumbs';
import { Breadcrumb } from '../types';

const LocalHubPage: React.FC = () => {
    const pageUrl = `https://${businessInfo.domain}/#/local-attractions`;
    const crumbs: Breadcrumb[] = [{ name: 'Local Attractions', path: '/local-attractions' }];

    return (
        <div>
            <Seo
                title={`Local Attractions in Decatur, TX | ${businessInfo.name}`}
                description="Discover local attractions and points of interest in and around Decatur, Texas. Learn more about what makes our community a great place to live and work."
                canonicalUrl={pageUrl}
                breadcrumbs={crumbs}
            />

            <div className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-serif">Discover Decatur, TX</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        We're proud to be part of the vibrant Decatur community. Explore some of the local landmarks and attractions that make our area unique.
                    </p>
                </div>
            </div>
            
            <Breadcrumbs crumbs={crumbs} />

            <div className="py-16 md:py-24 bg-neutral-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {attractions.map(attraction => (
                            <Link 
                                key={attraction.slug} 
                                to={`/local-attractions/${attraction.slug}`}
                                className="group block bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
                            >
                                <img src={attraction.image} alt={attraction.altText} className="w-full h-56 object-cover" loading="lazy" />
                                <div className="p-6">
                                    <h2 className="text-xl font-bold font-serif text-primary group-hover:text-secondary mb-2">{attraction.name}</h2>
                                    <p className="text-neutral text-sm mb-4">{attraction.description.substring(0, 100)}...</p>
                                    <span className="font-semibold text-secondary group-hover:text-accent">Read More &rarr;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocalHubPage;