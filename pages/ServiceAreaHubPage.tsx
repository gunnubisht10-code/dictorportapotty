
import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { areas } from '../constants/areas';
import { businessInfo } from '../constants/businessInfo';
import { images } from '../assets/images';
import Breadcrumbs from '../components/Breadcrumbs';
import { Breadcrumb } from '../types';

const ServiceAreaHubPage: React.FC = () => {
    const pageUrl = `https://${businessInfo.domain}/#/service-areas`;
    const crumbs: Breadcrumb[] = [{ name: 'Service Areas', path: '/service-areas' }];

    return (
        <div>
            <Seo
                title={`Service Areas | ${businessInfo.name} | Wise & Denton County`}
                description={`Henry Rental Works proudly serves Decatur, Bridgeport, Rhome, Boyd, Denton, and many more locations in North Texas. View our full service area map.`}
                canonicalUrl={pageUrl}
                ogImageUrl={images.serviceAreasBackground}
                breadcrumbs={crumbs}
            />

             <div className="relative h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: `url(${images.serviceAreasBackground})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white font-serif">Our Service Areas</h1>
                </div>
            </div>
            
            <Breadcrumbs crumbs={crumbs} />

            <div className="py-16 md:py-24 bg-neutral-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">Serving Decatur and Beyond</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral">
                            We deliver porta potties across Wise County, Denton County, and neighboring communities. If you don't see your town listed, give us a call! We frequently expand our service radius.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        <Link to="/" className="block p-4 bg-accent text-primary text-center rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform font-bold">
                            Decatur, TX
                        </Link>
                        {areas.map(area => (
                            <Link 
                                key={area.slug}
                                to={`/service-areas/${area.slug}`}
                                className="block p-4 bg-white text-center rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform text-primary hover:bg-gray-50 font-semibold"
                            >
                                {area.city}, {area.state}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAreaHubPage;