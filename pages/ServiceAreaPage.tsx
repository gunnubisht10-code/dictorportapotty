
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { areas } from '../constants/areas';
import { services } from '../constants/services';
import { businessInfo } from '../constants/businessInfo';
import Breadcrumbs from '../components/Breadcrumbs';
import { Breadcrumb } from '../types';

const ServiceAreaPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const area = areas.find(a => a.slug === slug);

    if (!area) {
        return <Navigate to="/404" replace />;
    }

    const pageUrl = `https://${businessInfo.domain}/#/service-areas/${area.slug}`;
    const crumbs: Breadcrumb[] = [{ name: 'Service Areas', path: '/service-areas' }, { name: `${area.city}, ${area.state}`, path: `/service-areas/${area.slug}` }];

    const localSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `${businessInfo.name} - Serving ${area.city}`,
        "image": `https://${businessInfo.domain}/logo.png`,
        "telephone": businessInfo.phone,
        "email": businessInfo.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": businessInfo.address,
            "addressLocality": "Decatur", // Main office
            "addressRegion": "TX",
            "postalCode": "76234"
        },
        "areaServed": {
            "@type": "City",
            "name": `${area.city}, ${area.state}`
        },
        "description": `Your local source for porta potty rentals in ${area.city}, ${area.state}.`
    };

    const getNearbyAreas = (currentSlug: string) => {
        const currentIndex = areas.findIndex(a => a.slug === currentSlug);
        if (currentIndex === -1) return [];

        const nearby = new Set<typeof area>();
        const totalAreas = areas.length;

        for (let i = 1; i <= 3; i++) {
            const nextIndex = (currentIndex + i) % totalAreas;
            const prevIndex = (currentIndex - i + totalAreas) % totalAreas;
            if (areas[nextIndex].slug !== currentSlug) nearby.add(areas[nextIndex]);
            if (areas[prevIndex].slug !== currentSlug) nearby.add(areas[prevIndex]);
        }
        
        return Array.from(nearby).slice(0, 3);
    };
    
    const nearbyAreas = getNearbyAreas(area.slug);

    return (
        <div>
            <Seo
                title={`Porta Potty Rental ${area.city}, ${area.state} | ${businessInfo.name}`}
                description={`Fast, affordable porta potty rentals in ${area.city}, ${area.state}. ${businessInfo.name} delivers clean portable toilets for events and job sites. Get your free quote today!`}
                canonicalUrl={pageUrl}
                jsonLd={localSchema}
                breadcrumbs={crumbs}
            />

            <div className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-serif">Porta Potty Rental {area.city}, {area.state}</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Your Trusted Local Provider for Clean and Reliable Portable Restrooms.
                    </p>
                </div>
            </div>

            <Breadcrumbs crumbs={crumbs} />
            
            <div className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-secondary font-serif">Top-Rated Portable Toilet Rental in {area.city}</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral">
                            {area.description}
                        </p>
                         <Link to="/contact" className="mt-8 inline-block bg-accent text-primary font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-400 transition-colors">
                            Get a Quote for {area.city}
                        </Link>
                    </div>

                    <div className="mt-20">
                         <h2 className="text-3xl font-bold text-primary font-serif mb-8 text-center">Our Porta Potty Services in {area.city}, {area.state}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.slice(0, 4).map(service => (
                                <Link to={`/services/${service.slug}`} key={service.slug} className="block p-6 bg-neutral-light rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition-transform">
                                    <h3 className="font-bold text-primary">{service.title}</h3>
                                    <p className="text-sm text-neutral mt-1">{service.description}</p>
                                </Link>
                            ))}
                        </div>
                         <div className="text-center mt-10">
                            <Link to="/services" className="font-semibold text-secondary hover:text-primary">View All Services &rarr;</Link>
                        </div>
                    </div>

                     <div className="mt-20 bg-neutral-light p-8 rounded-lg shadow-lg">
                         <h2 className="text-3xl font-bold text-primary font-serif mb-8 text-center">Different Types of Porta Potties Available in {area.city}</h2>
                        <p className="text-center text-lg text-neutral max-w-3xl mx-auto mb-10">From standard units for job sites to luxury trailers for weddings, we have the perfect portable restroom solution for your needs in {area.city}. We ensure every unit is delivered clean, sanitized, and ready for your guests or crew.</p>
                        <div className="text-center">
                            <Link to="/contact" className="bg-secondary text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-primary transition-colors">
                                Request a Free Consultation
                            </Link>
                        </div>
                    </div>

                    <div className="mt-20 border-t pt-16">
                         <h3 className="text-2xl font-bold text-secondary font-serif mb-6 text-center">Proudly Serving All of {area.city}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <h4 className="font-semibold text-lg text-primary">Neighborhoods</h4>
                                <p className="text-sm text-neutral mt-2">{area.neighborhoods.join(', ')}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-primary">ZIP Codes</h4>
                                <p className="text-sm text-neutral mt-2">{area.zipCodes.join(', ')}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-primary">Local Landmarks</h4>
                                <p className="text-sm text-neutral mt-2">{area.landmarks.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                     {nearbyAreas.length > 0 && (
                        <div className="mt-20">
                            <h3 className="text-2xl font-bold text-primary font-serif mb-8 text-center">Also Serving Nearby Communities</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link to="/" className="bg-white text-secondary font-semibold py-2 px-5 rounded-full shadow hover:shadow-lg transition-shadow">Decatur</Link>
                                {nearbyAreas.map(nearby => (
                                    <Link key={nearby.slug} to={`/service-areas/${nearby.slug}`} className="bg-white text-secondary font-semibold py-2 px-5 rounded-full shadow hover:shadow-lg transition-shadow">
                                        {nearby.city}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceAreaPage;